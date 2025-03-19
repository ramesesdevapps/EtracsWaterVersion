const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ latestVersion: "1.0.4" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
