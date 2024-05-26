// LECTO AI

const axios = require("axios");
let data = JSON.stringify({
  texts: ["How are you?", "What are you waiting for?"],
  to: ["fr"],
  from: "en",
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://api.lecto.ai/v1/translate/text",
  headers: {
    "X-API-Key": "KZHWRBC-N9X4N8A-HY3950F-9DKTVDM",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

// MT Machine translation

data = JSON.stringify({
  text: ["Hello world!"],
  template_name: "En2Fr",
});

config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://console.custom.mt/translation/translate",
  headers: {
    "Content-Type": "application/json",
    token: "05dd6816-5092-44c9-abf2-f11ad7308464",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
