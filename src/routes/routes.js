var express=require('express');
var router = express.Router();
var fs = require('fs');
const joi = require('joi')

var app=express();

var getmovie=require('/final/backend/src/services/getmovie/getmovie.js');
var addmovie=require('/final/backend/src/services/addmovie/addmovie.js');
var deletemovie=require('/final/backend/src/services/deletemovie/deletemovie.js');
var updatemovie=require('/final/backend/src/services/updatemovie/updatemovie.js');







router.get('/',async function(req,res){

 await getmovie.getMovie( function(err,data){
     if(err) throw err;
      res.json(data)
      console.log(data)

  
 }) 

   
 
})

console.log("I am in routes file")

router.post('/',async function(req,res){
    
        var newmovie={
            movieid:req.body.movieid,
            moviename:req.body.moviename,
            rating:req.body.rating,
            release_date:req.body.release_date,
            language:req.body.language
        } 
    
    

    
      await   addmovie.addMovie(newmovie, function(err,data){
            if(err) throw err;
            res.json(data)
            console.log(data)
      });
          
      });
           


  



router.delete('/:_id',async function(req,res){
  
   deletemovie.deleteMovie(req.params._id,function(err,data){
        if(err) throw err;
        res.json(data);
        
    })


})



router.put('/:_id', async function(req,res){
   
    var newmovie={
        movieid:req.body.movieid,
        moviename:req.body.moviename,
        rating:req.body.rating,
        release_date:req.body.release_date,
        language:req.body.language
    }
 
    await updatemovie.updateMovie(req.params._id,newmovie,function(err,data){
        if(err) throw err;
        res.json(data); 
        console.log(data);

      
    })

})

module.exports=router