import * as aws from "@pulumi/aws";

console.log('Look ma I am running!');

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-first-bucket");

// // Export the name of the bucket
export const bucketName = bucket.id;

console.log('Done!');