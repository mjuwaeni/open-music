class ClientError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'ClientError';
  }
}

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

class InvariantError extends ClientError {
  constructor(message){
    super(message, 400);
    this.name = 'InvariantError';
  }
}

module.exports = { ClientError, NotFoundError, InvariantError };
