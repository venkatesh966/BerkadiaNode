var movie=require('/final/backend/src/services/model.js')

module.exports.updateMovie=function(id,newmovie,callback)
{
    return new Promise((resolve)=>{
        console.log("I am in updatemovie.js");
        movie.findByIdAndUpdate(id,newmovie,callback)
           resolve();
            });
}

