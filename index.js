
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.info("server started on port " + PORT);
});
