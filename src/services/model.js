var mongoose=require('mongoose');

//schema design
var movieSchema=mongoose.Schema(
    {
     movieid:Number,
     moviename:String,
     rating:Number,
     release_date:String,
     language:String

    })

 module.exports = mongoose.model("cinema",movieSchema);

