import * as mongoose from 'mongoose'
import * as supertest from 'supertest-as-promised'
import app from '../../app'
import {View} from './view.model'
import {expect} from 'chai'

const request = supertest(app)

describe ('GET /api/views/async', function () {

  before(function () {
    return mongoose.connection.collections.views.remove()
  })

  it('returns a new view', async function () {
    const t = await request.get('/api/views/await')
    expect(t.status).to.equal(200)
    expect(t.body).to.have.property('lastVisit')
    expect(t.body).to.have.property('count', 1)
  })

  it('creates a view', async function () {
    expect(await View.count({})).to.equal(1)
  })

})
