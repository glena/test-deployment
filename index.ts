
import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("german-test-bucket", {
    acl: "private",
    tags: {
        Environment: "Dev",
        Name: "german-test-bucket",
    },
});



const bucket2 = new aws.s3.Bucket("german-test-bucket2", {
    acl: "private",
    tags: {
        Environment: "Dev",
        Name: "german-test-bucket2",
    },
});
 
export const bucketName = bucket.id;
export const bucket2Name = bucket2.id;
