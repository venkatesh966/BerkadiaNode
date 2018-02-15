var movie=require('/final/backend/src/services/model.js')

module.exports.getMovie= function(callback)
{
    return new Promise((resolve)=>{
        console.log("I am in getmovie.js")
           resolve(movie.find(callback));
            });
}