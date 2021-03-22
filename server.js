const axios = require("axios");

const servers = [
  {
    name: "Servidor 1",
    url: "http://localhost:4001",
    developer: {
      name: "Weslley Fratini",
      telephone: process.env.WESLLEYFRATINI_TELEPHONE,
    },
  },
  {
    name: "Servidor 2",
    url: "http://localhost:4002",
    developer: {
      name: "Weslley Fratini",
      telephone: process.env.WESLLEYFRATINI_TELEPHONE,
    },
  },
];

setInterval(async function () {
  console.log("Iniciando o monitoramento dos servidores");

  for (const server of servers) {
    await axios({
      url: server.url,
      method: "get",
    }).then((response) => {
      console.log(`${server.name} está no ar`);
    }).catch() =>{
        console.log(`${server.name} está fora do ar`);
    };
  }

  console.log("Finalizando o monitoramento dos servidores");
}, 1000);
