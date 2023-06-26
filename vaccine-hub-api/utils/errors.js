class ExpressError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(message) {
    super(message, 400);
  }
}

class UnathorizedError extends ExpressError {
  constructor(message) {
    super(message, 401);
  }
}

class ForbiddenError extends ExpressError {
  constructor(message) {
    super(message, 403);
  }
}

class NotFoundError extends ExpressError {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = {
  BadRequestError,
  ForbiddenError,
  NotFoundError,
  UnathorizedError,
};
