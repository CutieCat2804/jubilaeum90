import {
  Box,
  Text,
  Input,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Checkbox,
  CheckboxGroup,
  Select,
} from "@chakra-ui/react";
import form from "../form.json";
import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import { useRouter } from "next/router";
import Button from "../components/Button";
import ContentBox from "../components/ContentBox";
import PageHead from "../components/PageHead";
import Footer from "../components/Footer";

export default function Anmeldung() {
  const methods = useGoogleForm({ form: form as any });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const formData = {};
    data.forEach(function (_value, key) {
      formData[key] = data.getAll(key);
    });
    await methods.submitToGoogleForms(formData as any);
    router.push("/dankesseite");
  };

  return (
    <div>
      <PageHead title="Anmeldung" />
      <ContentBox>
        <Text as="h1" textStyle="heading-m-uppercase" marginTop="40px">
          Anmeldung
        </Text>
        <Box align="left" maxWidth="700px" width="100%">
          <GoogleFormProvider {...methods}>
            <form
              onSubmit={(event) => {
                onSubmit(new FormData(event.target as HTMLFormElement));
                event.preventDefault();
              }}
            >
              {form.fields.map((field) => {
                const heading = (
                  <Text as="h2" margin="16px 0 8px 0" textStyle="text-xs-bold">
                    {field.label}

                    {field.required && (
                      <Text color="required" display="inline" marginLeft="4px">
                        *
                      </Text>
                    )}
                  </Text>
                );
                switch (field.type) {
                  case "SHORT_ANSWER":
                    return (
                      <>
                        {heading}
                        <Input
                          placeholder={field.label}
                          maxWidth="400px"
                          name={field.id}
                          required={field.required}
                        />
                      </>
                    );
                  case "LONG_ANSWER":
                    return (
                      <>
                        {heading}
                        <Textarea
                          placeholder={field.label}
                          name={field.id}
                          resize="none"
                          isRequired={field.required}
                        />
                      </>
                    );
                  case "RADIO":
                    return (
                      <>
                        {heading}
                        <Box>
                          <RadioGroup name={field.id}>
                            <Stack spacing="8px">
                              {field.options.map((option) => (
                                <Radio
                                  key={option.label}
                                  value={option.label}
                                  isRequired={field.required}
                                >
                                  {option.label}
                                </Radio>
                              ))}
                            </Stack>
                          </RadioGroup>
                        </Box>
                      </>
                    );
                  case "CHECKBOX":
                    return (
                      <>
                        {heading}
                        <CheckboxGroup>
                          <Stack spacing="8px">
                            {field.options.map((option) => (
                              <Checkbox
                                name={field.id}
                                key={option.label}
                                value={option.label}
                              >
                                {option.label}
                              </Checkbox>
                            ))}
                          </Stack>
                        </CheckboxGroup>
                      </>
                    );
                  case "DROPDOWN":
                    return (
                      <>
                        {heading}
                        <Select
                          placeholder="Select option"
                          maxWidth="400px"
                          isRequired={field.required}
                          name={field.id}
                        >
                          {field.options.map((option) => (
                            <option key={option.label} value={option.label}>
                              {option.label}
                            </option>
                          ))}
                        </Select>
                      </>
                    );
                }
              })}
              <Button label="Abschicken" type="submit" />
            </form>
          </GoogleFormProvider>
        </Box>
        <Footer />
      </ContentBox>
    </div>
  );
}
