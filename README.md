# apigeee-dev
front end to hit the apigee public facing endpoint.

# I am Using Serverless Framework to deploy the Cloud Function using Cloud Code. 
The Serverless Framework is designed to provision your Google Cloud Functions, Events and Resources safely and quickly.

# Deploy All
This is the main method for doing deployments with the Serverless Framework:

``` serverless deploy ```

Use above method when you have updated your Function, Events or Resource configuration in serverless.yml and you want to deploy that change (or multiple changes at the same time) to the Google Cloud.

# How It Works
The Serverless Framework translates all syntax in serverless.yml to a Google Deployment Manager configuration template.
The provider plugin parses ```serverless.yml``` configuration and translates it to Google Cloud resources
The code of your Functions is then packaged into a directory, zipped and uploaded to the deployment bucket and it deploys the resources. 

