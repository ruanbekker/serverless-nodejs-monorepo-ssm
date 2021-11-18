'use strict';

module.exports.fn = async event => {
  const SECRET_NUMBER = process.env.SECRET_NUMBER || 0;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `this is the get route with secret: ${SECRET_NUMBER}`
        //input: event,
      },
      null,
      2
    ),
  };
};
