import {
  Box,
  Text,
  chakra,
  Button,
  Input,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Checkbox,
  CheckboxGroup,
  Select,
} from "@chakra-ui/react";
import Head from "next/head";
import form from "../form.json";
import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import { useRouter } from "next/router";

export default function Anmeldung() {
  const methods = useGoogleForm({ form: form as any });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const formData = {};
    data.forEach(function (value, key) {
      formData[key] = value;
    });
    await methods.submitToGoogleForms(formData as any);
    router.push("/dankesseite");
  };
  return (
    <div>
      <Head>
        <title>Anmeldung</title>
        <meta name="description" content="Anmeldung" />
        <link rel="icon" href="/lilie.ico" />
      </Head>
      <Box backgroundColor="#092955" width="100%" minHeight="100vh">
        <Box
          align="center"
          paddingTop="28px"
          width={{ base: "100%", xl: "1200px" }}
          backgroundColor="#ffffff"
          margin="auto"
          minHeight="100vh"
          boxShadow="-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"
          paddingX="24px"
        >
          <Text
            as="h1"
            fontSize={{ base: "32px", sm: "40px" }}
            lineHeight="145%"
            textTransform="uppercase"
            color="#092955"
            marginTop="40px"
            fontWeight="bold"
          >
            Anmeldung
          </Text>
          <Box align="left" maxWidth="700px">
            <GoogleFormProvider {...methods}>
              <form
                onSubmit={(event) => {
                  onSubmit(new FormData(event.target as HTMLFormElement));
                  event.preventDefault();
                }}
              >
                {form.fields.map((field) => {
                  const heading = (
                    <Text
                      as="h2"
                      fontSize="20px"
                      lineHeight="145%"
                      color="#092955"
                      margin="16px 0 8px 0"
                      fontWeight="bold"
                    >
                      {field.label}

                      {field.required && (
                        <Text color="#d93025" display="inline" marginLeft="4px">
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

                <Button
                  type="submit"
                  marginTop="40px"
                  backgroundColor="#841a1a"
                  color="#ffffff"
                  borderRadius="5px"
                  fontSize="20px"
                  _hover={{ background: "#5e1212" }}
                  _focus={{ background: "#841a1a" }}
                  _active={{ background: "#5e1212" }}
                >
                  Abschicken
                </Button>
              </form>
            </GoogleFormProvider>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
