import express from "express";
const app = express()
app.use(express.json())

app.get("/", (req, res) => {     
    return res.status(200).json("Odgovor :-)"); 
  });
app.listen(8080, ()=>{
    console.log('Connected!')
})