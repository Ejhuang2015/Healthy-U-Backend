// Dependencies
// =============================================================
const AWS = require('aws-sdk');
const fs = require('fs');
require('dotenv').config();

// Variables
// =============================================================
const ID = process.env.S3_ID;
const SECRET = process.env.S3_SECRET;
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

// Initialize
// =============================================================
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
})

// Upload Function
// =============================================================
const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: fileContent
    };

    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.location}`);
    });
}