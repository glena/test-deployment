import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import * as pulumiservice from "@pulumi/pulumiservice";

const config = new pulumi.Config("aws");

const deploymentSettings = new pulumiservice.DeploymentSettings("deploymentSettings", {
    operationContext: {
        environmentVariables: {
            "aws:accessKey": "AKIAZD726CKNDPAQFT7D",
            "aws:region": "us-east-2",
            "aws:secretKey": config.requireSecret("secretKey"),
        },
        options: {},
    },
    organization: "glena",
    project: "aws-typescript",
    sourceContext: {
        git: {
            branch: "refs/heads/main",
            repoDir: ".",
            repoUrl: "https://github.com/glena/test-deployment",
        },
    },
    stack: "dev",
}, {
    protect: true,
});

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("first-bucket");
const bucket2 = new aws.s3.Bucket("second-bucket");

// Export the name of the bucket
export const bucketName = bucket.id;
export const secondBucketName = bucket2.id;
