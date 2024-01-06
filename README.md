# Cluster.dev Serverless API
This Cluster.dev template creates a Serverless API on AWS cloud using API Gateway and a Lambda function

## Prerequisites
- Terraform version 13+
- AWS account
- AWS CLI installed
- [Cluster.dev client](https://docs.cluster.dev/installation-upgrade/) installed

## How to Use?
1. [Configure access to AWS](https://docs.cluster.dev/examples-aws-eks/#authentication) and export required variables.
2. Create a S3 bucket to store Cluster.dev backend state by running below command.
```
aws s3 mb s3://<bucket-name>
```
3. Initialize template by running below cli command and following the instructions.
```
cdev project create https://github.com/sidathasiri/cdev-serverless-api --interactive
```
4. Run cdev plan.
5. Run cdev apply.