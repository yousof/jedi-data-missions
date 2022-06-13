const express = require('express'); // A Node.js web application framework

// The potential attack defined to be investigated
const attack = require('./queries/darth-vader-attack-on-alderaan');

// Creating the application
const app = express();

// Getting the default system port if exists or setting the port to 3000
const port = process.env.PORT || 3000;

// The reponse for the problem
app.get('/information', (myRequest, myResponse) => {
  // Passing the response object to be used for the output
  attack.responseInformation(myResponse);
});

app.listen(port, () => {
  console.log('Darth Vader is planning an attack on the planet Alderaan.');
  console.log('Let\'s find out the information about his starship.');
  console.log(
    'The Dark Star\'s crew are many but let\'s find out how many exactly?!'
  );
  console.log(
    'Oh, no! Princess Leia may be on the planet. We need to plan rescuing her.'
  );
  console.log(
    `The Jedi High Council should listen on port ${port} and the secret path we agreed...`
  );
});
