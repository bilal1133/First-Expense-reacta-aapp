const  path = require('path')
const  express =require('express')
const app = express();
const publicPath = path.join(__dirname,'..','build')

app.use(express.static(publicPath))

app.get('*',(req,res)=>{

    res.sendFile(path.join(publicPath,'index.html'))
})


app.listen(3000,()=>{
    console.log("Server is running")
})
















// const express = require('express');
// const path = require('path');
//
// const app = express();
//
// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));
//
// // An api endpoint that returns a short list of items
// app.get('/api/getList', (req,res) => {
//     var list = ["item1", "item2", "item3"];
//     res.json(list);
//     console.log('Sent list of items');
// });
//
// // Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/client/public/index.html'));
// });
//
// const port = process.env.PORT || 5000;
// app.listen(port);
//
// console.log('App is listening on port ' + port);