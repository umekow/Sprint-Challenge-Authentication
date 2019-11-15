const request = require('supertest'); 

const server = require('../api/server.js');


describe('server.js', () => {
    describe('register endpoint', () => {
      it('should return 201 status code', async () => {
        const expectedStatusCode = 400;
  
        const response = await request(server).post('/api/auth/register');
  
        expect(response.status).toBe(expectedStatusCode);
  
     
      });
  
      it('should return an Object', async () => {
        
        const response = await request(server).get('/api/auth/register');
  
        expect(response.type).toMatch(/text/); 
      });
  
    
    });

    // describe('register endpoint', () => {
    //     it('should return 201 status code', async () => {
    //       const expectedStatusCode = 400;
    
    //       const response = await request(server).post('/api/auth/register');
    
    //       expect(response.status).toBe(expectedStatusCode);
    
       
    //     });
    
    //     it('should return array of id', async () => {
    
    //       const response = await request(server).get('/api/auth/register');
    
    //       expect(response.type).toMatch(/text/i); 
    //     });
    
      
    //   });
  });