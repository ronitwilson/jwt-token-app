const customError = require('./custom-error')
class BadRequests extends customError {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = 400
    }
  }
  
  module.exports = BadRequests