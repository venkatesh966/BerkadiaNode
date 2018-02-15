var movie=require('/final/backend/src/services/model.js')

module.exports.addMovie=function(newmovie,callback)
{
    return new Promise((resolve)=>{
        console.log("I am in addmovie.js")
        movie.create(newmovie,callback)
           resolve();
            });
}