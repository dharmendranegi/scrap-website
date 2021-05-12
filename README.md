# scrap-website
This project will help to scrap given website url and return the og meta data.

## After you cloned the repo

In the project directory, you can run:

### `npm install`
This will install all the required dependencies.

### `npm test`
Launches the test runner in the interactive watch mode.

### `sls deploy`
This command will deploy it to aws account with default stage dev.
And will create following resources:
1- One Lambda.
2- Api gateway.
3- S3 bucket for cloudformation stack logs.
4- Cloudformation stack.
