const express = require('express');

const bodyParser = require('body-parser');

const connect = require('./config/database')

const { PORT } = require('./config/serverConfig');

const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
    // create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        await connect();
        console.log(`Server started at ${PORT}`);
    })
}
setupAndStartServer();