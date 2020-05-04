const request=require('request')


const forcast=(latitude,lognitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=880e80f52dd60d80416d133228ffb724&query='+ latitude +','+ lognitude

    request({url:url,json:true},(err,res)=>{
        if(err)
        {
            callback('Unable to Connect')
        }
        else if(res.body.error)
        {
            callback('Wrong Co-Ordinates',undefined)
        }
        else
        {
            callback('',res.body.current.temperature)
        }
    })
}



module.exports=forcast

