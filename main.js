const express=require("express");


const app=express();

const date = new Date();
const day = date.getDay();
const hours = date.getHours();

const midlleweare = (req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 18 && hours < 20) {
    next();
  } else {
    res.send("  <h1> server is closed</h1>");
  }
};

app.use(midlleweare) ;









// app.get('/test' , (req,res)=> {


//     res.send ('hello')
// })


// app.get('/balise' ,(req,res)=> {

//     res.send ('<h1>hello</h1>')
// })

// app.get ('/' , (req,res)=> {
  

//     res.sendFile(__dirname+'/public/')
// })

// app.get('/contact', (req,res)=>{


//     res.sendFile(__dirname+'/public/contact.html')
// })

// app.get('/product' , (req,res)=>{
  

//     res.sendFile(__dirname+'/public/product.html')
// })


// app.get('/style.css' , (req,res)=>{
  
//     res.sendFile(__dirname+'/public/style.css')
// })



app.use(express.static("public"));

const port = 2000

app.listen(port , ()=>console.log(`server is running on port ${port}`) ) 
