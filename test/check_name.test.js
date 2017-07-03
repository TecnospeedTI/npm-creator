var httpMock = require('./http_mock')()

var checkName = require('../lib/check_name')

beforeAll(function (done) {
  httpMock.start(1337, done)
})

afterAll(function (done) {
  httpMock.stop(done)
})

it('should fail the request', function (done) {
  httpMock.queueResponse(500, false, '{"invalid_json')
  checkName({name: 'npm-creator'}, function (err) {
    expect(err.message).toBe('ERROR_REQUEST')
    done()
  })
})

it('should return that "name" is not URL-friendly', function (done) {
  httpMock.queueResponse(400, true, {
    code: 'INVALID_PARAMETER',
    message: 'name can only contain URL-friendly characters'
  })
  checkName({name: 'npm-creator'}, function (err) {
    expect(err.message).toBe('ERROR_URL_FRIENDLY')
    done()
  })
})

it('should return that "name" is already taken', function (done, isNameAvailable) {
  httpMock.queueResponse(200, true, {})
  checkName({name: 'npm-creator'}, function (err, isNameAvailable) {
    if (err) return done(err)
    expect(isNameAvailable).toBe(false)
    done()
  })
})

it('should return that "name" is available', function (done, isNameAvailable) {
  httpMock.queueResponse(404, true, {
    code: 'NOT_FOUND',
    message: 'Module not found'
  })
  checkName({name: 'npm-creator'}, function (err, isNameAvailable) {
    if (err) return done(err)
    expect(isNameAvailable).toBe(true)
    done()
  })
})
