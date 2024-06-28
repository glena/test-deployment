import * as aws from "@pulumi/aws";

console.log(process.env);
export const data = "foo_bar";



/*
const bucket = new aws.s3.Bucket("my-bucket", {
    acl: "private",
    tags: {
        Environment: "Dev",
        Name: "My bucket",
    },
});

export const bucketName = bucket.id;
*/
