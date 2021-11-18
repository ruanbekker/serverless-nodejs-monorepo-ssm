
# serverless-nodejs-monorepo-ssm

Serverless Framework example with 4 Nodejs Functions and SSM to pull secrets and use as environment variables

## Usage

Install:

```
npm install
```

Deploy:

```
serverless deploy

Serverless: Deprecation warning: Detected ".env" files. Note that Framework now supports loading variables from those files when "useDotenv: true" is set (and that will be the default from next major release)
            More Info: https://www.serverless.com/framework/docs/deprecations/#LOAD_VARIABLES_FROM_ENV_FILES
            More Info: https://www.serverless.com/framework/docs/deprecations/#AWS_API_GATEWAY_NAME_STARTING_WITH_SERVICE
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service dev-node-rest-api-app.zip file to S3 (2.86 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..........................................................................................................
Serverless: Stack update finished...
Service Information
service: dev-node-rest-api-app
stage: dev
region: eu-west-1
stack: dev-node-rest-api-app-dev
resources: 29
api keys:
  None
endpoints:
  GET - https://msuv36accl.execute-api.eu-west-1.amazonaws.com/dev/users/get
  GET - https://msuv36accl.execute-api.eu-west-1.amazonaws.com/dev/users/delete
  GET - https://msuv36accl.execute-api.eu-west-1.amazonaws.com/dev/account/login
  GET - https://msuv36accl.execute-api.eu-west-1.amazonaws.com/dev/account/logout
functions:
  getuser: dev-node-rest-api-app-dev-getuser
  deleteuser: dev-node-rest-api-app-dev-deleteuser
  gologin: dev-node-rest-api-app-dev-gologin
  gologout: dev-node-rest-api-app-dev-gologout
layers:
  None

********************************************************************************************************************************************
Serverless: Announcing an enhanced experience for Serverless Full-Stack Applications: https://github.com/serverless-components/fullstack-app
********************************************************************************************************************************************

```

Test:

```
❯ curl -s https://msuv36accl.execute-api.eu-west-1.amazonaws.com/dev/users/get | jq .message
"this is the get route"

❯ curl -s https://msuv36accl.execute-api.eu-west-1.amazonaws.com/dev/users/delete | jq .message
"this is the delete user route"

❯ curl -s https://msuv36accl.execute-api.eu-west-1.amazonaws.com/dev/account/login | jq .message
"this is the login route"

❯ curl -s https://msuv36accl.execute-api.eu-west-1.amazonaws.com/dev/accounts/logout | jq .message
"this is the logout route"
```
