const express = require('express');
const path = require('path');  

const app = express();
const port = 3001;

const publicDirectoryPath = path.join(__dirname, '../build');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


