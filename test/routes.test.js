const chai = require('chai');
let expect = require('chai').expect;
const request=require('supertest');
const index = require('/final/backend/index.js');
let should = chai.should();

chai.use(require('chai-http'));

 describe('checking for getting movies',() => { 
       
        it('should get all the movies',async () => {
            
            
            res=await request(server).get('/api/movies');
        
                expect(res).to.have.status(200);
                expect(res.body[0].moviename).to.be.equal('chaloo');
                
          
           
        })
    })

    describe('checking for adding movies', () => {
        it('should add movie', async () => {
            chai.request(index).post('/api/movies').send({movieid:14,moviename:"chang",rating:2,releasedate:"10/12/2018",language:"malayalam"}).end((err, res) => {
                
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.json;
                done();
            });
       })
    })