const   controllers  = require('../src/Controllers/Controllers');
const server = require('../src/routes');

const request = require('supertest');


test('test to create client', async()=>{
   beforeEach(async()=>{
       await  request(server).get('/deleteAll');
   });
    const response = await request(server)
    .post('/singUp')
    .send({
        name: "son goku", 
        email:"ozaroo@gmail.com",
        password: "lutar12345",
        occupation: "guerreiro Z"
    })
});

test('test to making login', async() => {
    
    const response = await request(server)
    .post('/singIn')
    .send({
    email: "ozaroo@gmail.com",
    password: "lutar12345"
});
expect(response.status).toBe(200);
});

test('test to expect error in login', async() => {
    
    const response = await request(server)
    .post('/singIn')
    .send({
    email: "goku@gmail.com",
    password: "12345"
});
expect(response.status).toBe(404);
});

test('test to the routes authenticate',async()=>{

    const response = await request(server)
    .get('/sarch')
    .set("x-access-token",`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJhbXMiOjIsImlhdCI6MTYxMzc0NjU4OSwiZXhwIjoxNjEzODMzMDg5fQ.yxFxXLh-bIBgTNvnHg7Nj-jIJOxd6z0suYRJlKs4TV8`)
    .query({name:'son goku'})

    expect(response.status).toBe(500);//expect 500 case the token expire

})