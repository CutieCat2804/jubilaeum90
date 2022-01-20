// @ts-ignore
const googleFormsToJson = require("react-google-forms-hooks");
const fs = require("fs");

async function createForm() {
  const result = await googleFormsToJson.googleFormsToJson(
    "https://docs.google.com/forms/d/e/1FAIpQLScI7-c2sX3ckUWGc5NkSn4ndCOdLUs3nLkGgj7SWR0we-5HBA/viewform"
  );

  fs.writeFileSync("form.json", JSON.stringify(result));
}

createForm();
