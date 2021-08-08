const chaiHttp  = require('chai-http')
const chai      = require('chai')
const app       = require('../server')

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Routes",()=>{
    describe("GET /", () =>{
        it("Get route should return an object",(done)=>{
            chai.request(app)
            .get('/')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
        })
    })
}) 