const { expect } = require('chai')
const supertest = require('supertest')
const { describe, it } = require('mocha')

const request = supertest(`http://localhost:8080`)
const api = '/api'

describe('TEST API', () => {
  describe('Create new user', () => {
    describe('Create new user valid information', () => {
      it('Res should be 200', async () => {
        const randomString = (Math.random() + 1).toString(36).substring(7)
        const newUser = { username: `${randomString}@gmail.com`, password: 'abc' }
        const res = await request.post(`${api}/register`).send(newUser)
        expect(res.status).to.eql(200)
      })
    })

    describe('Create new user with incorrect information', () => {
      it('Res should be 400', async () => {
        const randomString = (Math.random() + 1).toString(36).substring(7)
        const newUser = { username: `${randomString}@gmail.com` }
        const res = await request.post(`${api}/register`).send(newUser)
        expect(res.status).to.eql(400)
      })
    })
  })

  describe('Login', () => {
    describe('Try to login with valid data', async () => {
      it('Response should be: "Login confirmed"', async () => {
        const user = {username: 'coelhoagustin1@gmail.com', password: 'abc'}
        const res = await request.post(`${api}/login`).send(user)
        expect(res.body.data).to.eql('Login confirmed')
      })
    })

    describe('Try to login with invalid data', async () => {
      it('Response should be: "Login confirmed"', async () => {
        const user = {username: 'coelhoagustin1@gmail.com', password: 'abcd'}
        const res = await request.post(`${api}/login`).send(user)
        expect(res.status).to.eql(500)
      })
    })
  })

  describe('Users', () => {
    describe('Try to get users without validation', async () => {
      it('Status should be 403', async () => {
        const res = await request.get(`${api}/users`)
        expect(res.status).to.eql(403)
      })
    })

    describe('Try to get users without validation', async () => {
      it('Status should be 403', async () => {
        const res = await request.get(`${api}/users`)
        expect(res.status).to.eql(403)
      })
    })
  })
})