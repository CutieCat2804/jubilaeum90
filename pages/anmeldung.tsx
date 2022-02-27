import {
  Box,
  Text,
  Input,
  Textarea,
  Select,
  RadioGroup,
  Stack,
  Radio,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import form from "../form.json";
import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import { useRouter } from "next/router";
import Button from "../components/Button";
import ContentBox from "../components/ContentBox";
import PageHead from "../components/PageHead";
import Footer from "../components/Footer";
import { useState } from "react";

const ignoredFieldIds = [
  "1128836742",
  "1405852427",
  "1248248356",
  "1093702533",
  "1382011162",
  "268123908",
  "1084548225",
  "295065933",
  "1988812163",
  "336701212",
];

export default function Anmeldung() {
  const methods = useGoogleForm({ form: form as any });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const formData = {};
    data.forEach(function (_value, key) {
      formData[key] = data.getAll(key);
    });
    console.log(formData);
    let index = 0;
    await Promise.all(
      formData["2005620554"].map(async (name: string) => {
        const submitData = {
          ...formData,
          "2005620554": [name],
          "1988812163": formData["1988812163" + index],
          "295065933": formData["295065933" + index],
          "1084548225": formData["1084548225" + index],
        };
        index++;
        await methods.submitToGoogleForms(submitData as any);
      })
    );
    router.push("/dankesseite");
  };

  const [numberOfPersons, setNumberOfPersons] = useState(1);

  return (
    <div>
      <PageHead title="Anmeldung" />
      <ContentBox>
        <Text as="h1" textStyle="heading-m-uppercase" marginTop="40px">
          Anmeldung
        </Text>
        <Box align="left" maxWidth="700px" width="100%">
          <Text as="h2" margin="16px 0 8px 0" textStyle="text-xs-bold">
            Anzahl der Personen
          </Text>
          <Select
            maxWidth="400px"
            value={numberOfPersons}
            onChange={(event) => setNumberOfPersons(Number(event.target.value))}
          >
            {[...new Array(6)].map((_, index) => {
              const label = index === 0 ? "Person" : "Personen";

              return (
                <option key={index + 1} value={index + 1}>
                  {`${index + 1} ${label}`}
                </option>
              );
            })}
          </Select>
          <GoogleFormProvider {...methods}>
            <form
              onSubmit={(event) => {
                onSubmit(new FormData(event.target as HTMLFormElement));
                event.preventDefault();
              }}
            >
              {form.fields.map((field) => {
                if (ignoredFieldIds.includes(field.id)) return undefined;
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
              <Person index={0} />

              {[...new Array(numberOfPersons - 1)].map((_, index) => (
                <Box key={index}>
                  <Text as="h2" margin="16px 0 8px 0" textStyle="text-xs-bold">
                    {" Person " + (index + 2)}
                  </Text>
                  <Text as="h3" margin="16px 0 8px 0" textStyle="text-xs">
                    Vor-und Nachname
                    <Text color="required" display="inline" marginLeft="4px">
                      *
                    </Text>
                  </Text>
                  <Input
                    placeholder="Vor-und Nachname"
                    maxWidth="400px"
                    name="2005620554"
                    required={true}
                  />

                  <Person index={index + 1} />
                </Box>
              ))}
              <>
                <Text as="h2" margin="16px 0 8px 0" textStyle="text-xs-bold">
                  Anmerkungen
                </Text>
                <Textarea
                  placeholder="Anmerkungen"
                  name="336701212"
                  resize="none"
                />
              </>
              <Button display="flex" label="Abschicken" type="submit" />
            </form>
          </GoogleFormProvider>
        </Box>
        <Footer />
      </ContentBox>
    </div>
  );
}
const Person: React.FC<{ index: number }> = ({ index }) => {
  const [isStammesMitglied, setIsStammesMitglied] = useState<
    string | undefined
  >(undefined);

  return (
    <>
      <RadioGroup
        value={isStammesMitglied}
        onChange={(value) => setIsStammesMitglied(value)}
      >
        <Text as="h3" margin="16px 0 8px 0" textStyle="text-xs">
          Stammesmitglied
          <Text color="required" display="inline" marginLeft="4px">
            *
          </Text>
        </Text>
        <Stack spacing="8px">
          <Radio name={"1988812163" + index} key="Ja" value="Ja">
            Ja
          </Radio>
          <Radio name={"1988812163" + index} key="Nein" value="Nein">
            Nein
          </Radio>
        </Stack>
      </RadioGroup>
      <Box display={isStammesMitglied === "Ja" ? "block" : "none"}>
        <Text as="h3" margin="16px 0 8px 0" textStyle="text-xs">
          Ich komme
          <Text color="required" display="inline" marginLeft="4px">
            *
          </Text>
        </Text>
        <CheckboxGroup>
          <Stack spacing="8px">
            <Checkbox name={"295065933" + index} value="Freitag">
              Freitag
            </Checkbox>
            <Checkbox name={"295065933" + index} value="Samstag">
              Samstag
            </Checkbox>
            <Checkbox name={"295065933" + index} value="Sonntag">
              Sonntag
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <Box display={isStammesMitglied === "Nein" ? "block" : "none"}>
        <Text as="h3" margin="16px 0 8px 0" textStyle="text-xs">
          Ich komme
          <Text color="required" display="inline" marginLeft="4px">
            *
          </Text>
        </Text>
        <CheckboxGroup>
          <Stack spacing="8px">
            <Checkbox name={"1084548225" + index} value="Samstag Vormittag">
              Samstag Vormittag
            </Checkbox>
            <Checkbox name={"1084548225" + index} value="Samstag Nachmittag">
              Samstag Nachmittag
            </Checkbox>
            <Checkbox name={"1084548225" + index} value="Samstag Abend">
              Samstag Abend
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
    </>
  );
};
