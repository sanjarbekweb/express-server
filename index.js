const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    res.send({ message: "OK" });
});

app.listen(PORT, () => {
    console.info("server started on port " + PORT);
});