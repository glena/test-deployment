// import * as aws from "@pulumi/aws";

// const bucket = new aws.s3.Bucket("my-bucket", {
//     acl: "private",
//     tags: {
//         Environment: "Dev",
//         Name: "My bucket",
//     },
// });

// export const bucketName = bucket.id;

console.log(`LOOK MA I'M RUNNING`);
console.log(process.env);
console.log('SOME_LOCAL_ENV_VAR', process.env['SOME_LOCAL_ENV_VAR']);
console.log('SETTINGS_VAR_1', process.env['SETTINGS_VAR_1']);
console.log('SETTINGS_VAR_2_SECRET', process.env['SETTINGS_VAR_2_SECRET']);


async function wait(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

console.log('Lets chill!')
await wait(30000)
console.log('Back to work!')

export const someOutput = "the value";
