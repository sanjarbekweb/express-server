const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
    res.send({ message: "OK" });
});

app.listen(port, () => {
    console.info("server started on port " + port);
});