const customError = require('./custom-error')
const {StatusCodes} = require('http-status-codes') ;
class BadRequests extends customError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = BadRequests