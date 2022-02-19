import { Box, Text, Input, Textarea, Select } from "@chakra-ui/react";
import form from "../form.json";
import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import { useRouter } from "next/router";
import Button from "../components/Button";
import ContentBox from "../components/ContentBox";
import PageHead from "../components/PageHead";
import Footer from "../components/Footer";
import { Fragment, useState } from "react";

const ignoredFieldIds = [
  "1128836742",
  "1405852427",
  "1248248356",
  "1093702533",
  "1382011162",
  "268123908",
];

const autocomplete = {
  "1166974658": "tel",
  "1045781291": "email",
};

export default function Anmeldung() {
  const methods = useGoogleForm({ form: form as any });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const formData = {};
    data.forEach(function (_value, key) {
      formData[key] = data.getAll(key);
    });
    await Promise.all(
      formData["2005620554"].map(async (name: string) => {
        const submitData = { ...formData, "2005620554": [name] };
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
                      <Fragment key={field.id}>
                        {heading}
                        <Input
                          placeholder={field.label}
                          maxWidth="400px"
                          name={field.id}
                          autoComplete={autocomplete[field.id]}
                          required={field.required}
                        />
                      </Fragment>
                    );
                  case "LONG_ANSWER":
                    return (
                      <Fragment key={field.id}>
                        {heading}
                        <Textarea
                          placeholder={field.label}
                          name={field.id}
                          resize="none"
                          isRequired={field.required}
                        />
                      </Fragment>
                    );
                }
              })}

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
                </Box>
              ))}
              <Button display="flex" label="Abschicken" type="submit" />
            </form>
          </GoogleFormProvider>
        </Box>
        <Footer />
      </ContentBox>
    </div>
  );
}
