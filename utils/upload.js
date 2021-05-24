// Dependencies
// =============================================================
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require("multer-s3");
const { S3_ID, S3_SECRET, S3_BUCKET_NAME } = require("../config/connections");


// Initialize
// =============================================================
const s3 = new AWS.S3({
    accessKeyId: S3_ID,
    secretAccessKey: S3_SECRET,
    region: "us-east-2"
})

// Filter Function
// =============================================================
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};

// Upload Function
// =============================================================
const upload = multer({
    fileFilter,
    storage: multerS3({
        acl: "public-read",
        s3,
        bucket: S3_BUCKET_NAME,
        metadata: function (req, file, cb) {
            cb(null, Object.assign({}, req.body));
        },
        key: function (req, file, cb) {
            cb(null, req.params.id);
        },
    }),
});

// Exports
// =============================================================
module.exports = {
    upload,
};
