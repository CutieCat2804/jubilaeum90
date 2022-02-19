// @ts-ignore
const googleFormsToJson = require("react-google-forms-hooks");
const fs = require("fs");

async function createForm() {
  const result = await googleFormsToJson.googleFormsToJson(
    "https://docs.google.com/forms/d/1Vyyz0CPw9FgXjqU-wwLGdxJ5LNoQfTsPlGgHEzEojZQ/viewform"
    //"https://docs.google.com/forms/d/e/1FAIpQLScfHFUoe_cY_2AVfnRlA3ck1WNreX2hVqO0f_Hs4Y3LGeXwfw/viewform?usp=sf_link"
  );

  fs.writeFileSync("form.json", JSON.stringify(result));
}

createForm();
