 const geocode=require('./utils/geocodes')
 const request=require('./node_modules/request')
 const forcast=require('./utils/forcast')
 const express=require('express')
 const path=require('path')
 const app=express()
 const hbs=require('hbs')
 const fetch = require('node-fetch');

 const templatePath=path.join(__dirname,'./templates/views')
 const staticPath=path.join(__dirname,'./public')

 app.set('view engine','hbs')
 app.set('views', templatePath)
 
 hbs.registerPartials(templatePath)
app.use(express.static(staticPath))
 //default Path
 app.get('',(req,res)=>{
   res.render('index',{
     'title':'These is Weather demo App'
   })
 })

 //About
app.get('/about',(req,res)=>{
  res.render('About')
})
 app.get('/weather',(req,res)=>{
     console.log(req.query)
     if(!req.query.address)
     {
           return  res.send({
            'Error':'Please Enter Location'
        })
     }
     else{
       geocode(req.query.address,(err,response)=>{
               console.log('Error',err)
                if(err)
                 {
                   return 'Entered Location is not Valid'
                 }
                 forcast(response.latitude,response.longnitude,(err,callback)=>{
                            if(err)
                            {
                            return console.log(err)
                            }
                           
                            res.send({
                             'Temperature':callback
                        })
            })
        
        })
     }
    
 })

 app.listen('3009',()=>{
  console.log("Server is Running up")
})


 







