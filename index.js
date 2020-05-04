const express = require("express");
const randoRouter = require('./routers/rando');

const app = express();
const port = process.env.PORT || 4001;

app.use('/rando', randoRouter)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});