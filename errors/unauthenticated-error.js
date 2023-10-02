const customError = require('./custom-error')
class Unauthenticated extends customError {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = 401
    }
  }
  
  module.exports = Unauthenticated
  