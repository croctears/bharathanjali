import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({ region: "ap-south-1" });

export const handler = async (event) => {
    const bucketName = 'bharathanjali';
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            body: ''
        };
    }

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
        const command = new PutObjectCommand(params);
        await s3.send(command);
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
