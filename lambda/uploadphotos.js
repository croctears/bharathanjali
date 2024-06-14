const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucketName = '';
    const body = JSON.parse(event.body);
    const base64String = body.file.split(';base64,').pop();
    const buffer = Buffer.from(base64String, 'base64');
    const fileName = body.fileName;
    const filePath = `uploads/${fileName}`;
    
    const params = {
        Bucket: bucketName,
        Key: filePath,
        Body: buffer,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg'
    };
    
    try {
        await s3.putObject(params).promise();
        const url = `https://${bucketName}.s3.amazonaws.com/${filePath}`;
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            body: JSON.stringify({ url })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            body: JSON.stringify({ error: error.message })
        };
    }
};
