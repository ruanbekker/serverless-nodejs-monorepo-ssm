'use strict';

module.exports.fn = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'this is the delete user route'
        //input: event,
      },
      null,
      2
    ),
  };
};
