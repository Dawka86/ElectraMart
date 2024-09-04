const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');  

const app = express();
const port = 3003;



app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

function passwordCheck(req, res, next) {
    const password = req.body.password;
    if (password === "iLove"){
        req.userPasswordCheck = true;
    } else {
        req.userPasswordCheck = false;
    }
    next();   
};

app.post(`/sign`, passwordCheck, (req, res)=>{
    
    if (req.userPasswordCheck) {
        res.sendFile(path.join(publicDirectoryPath, `secret.html`));
    } else {
        res.sendFile(path.join(publicDirectoryPath, `wrong.html`));
    }
    
});


const publicDirectoryPath = path.join(__dirname, '../build');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});




app.post("/sign", (req, res)=>{
    infoRes = req.body.name;
    console.log(req.body);
    res.send(`Thank you for sending the data ${infoRes} `);
    
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


