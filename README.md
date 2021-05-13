# Scrap-Website-Url
This project will help to scrap given website url and return the og meta data.

## Services used in project.
- AWS cloud for development.
  - AWS Lambda
  - Api Gateway
  - S3 Bucket
  - Cloudformation
  - Cloudwatch
- Serverless Framework for deployment.
- GitHub actions for continuous integration and continuous delivery.
- open-graph-scraper npm package to scrape the given url.
- Jest for unit testing and coverage.
- Webpack for build package.
- Eslint for file formatter.


In this project directory, you can run:

### `npm install`
 - This will install all the required dependencies.

### `npm test`
 - Launches the test runner in the interactive watch mode.

### `sls deploy`
 - This command will deploy it to aws account with default stage dev.
 - And will create following resources:
    - One Lambda.
    - Api gateway.
    - S3 bucket for cloudformation stack logs.
    - Cloudformation stack.
