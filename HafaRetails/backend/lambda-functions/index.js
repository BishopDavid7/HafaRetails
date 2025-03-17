const AWS = require("aws-sdk");

exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "HafaRetails Backend is Running!" }),
    };
};
