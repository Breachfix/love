const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "AKIAVBIWS3LPXHBT6EJH",
    secretAccessKey: "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 ",
    region: 'us-west-1'
});

const s3 = new AWS.S3();
