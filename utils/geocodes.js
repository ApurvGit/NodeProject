const request=require('request')



const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXB1cnZwIiwiYSI6ImNrOWk5NWJ0MDAxeGUzZ3AyZjFmY3ltcmoifQ.SgscqziWkoxTOY5IU4Lv6Q'

    request({url:url,json:true},(error,response)=>{
         if(error)
         {
            callback('Unable to connect to Network')
         }
         else if(response.body.features.length === 0)
         {
             callback('Please try valid location')
         }
         else{
             callback(undefined,{
                 place_name:response.body.features[0].place_name,
                 latitude:response.body.features[0].center[1],
                 longnitude:response.body.features[0].center[0]
             })
         }
    })
 }

 module.exports=geocode