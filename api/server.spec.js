const server = require('./server.js');
const db = require('../database/db-config')
const request = require('supertest')

describe('the server', () => {
    // beforeEach(async () => {
    //     await db('cars').truncate();
    // })
    describe('GET /', () => {
        it('should run the testing env', () => {
            expect(process.env.DB_ENV).toBe('testing');
        })
        it('should return a status 200', () => {
            return request(server)
            .get("/")
            .then(response => {
                expect(response.status).toBe(200);
        });
        })
        it('should return last bw test', () =>{
            return request(server)
            .get('/')
            .then(response => {
                expect(response.body.api).toContain("Last BW Server Check")
            })
        })
    })
})
