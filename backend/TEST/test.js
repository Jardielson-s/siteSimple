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
        occupation: "guerreiro Z",
        address: "japão"
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