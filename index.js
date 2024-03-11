const express =require('express')
const app = express()
  const port= 3000
  app.get ('/mi',(req,res)=> {
    res.send('Taylor Swift te amo')
  })
  app.listen(port,() =>{
    console.log('La aplicacon se esta ejecutando por el puerto' + port)
  })

