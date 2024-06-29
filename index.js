const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.json());
app.use(routes);

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
    });

    
