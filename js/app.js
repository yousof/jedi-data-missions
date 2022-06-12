const express = require("express");

const attack = require('./queries/dark-vader-attack-on-alderaan')

const app = express();
const port = process.env.PORT || 3000;

app.get("/information", (myRequest, myResponse) => {
    attack.responseInformation(myResponse);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
