const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger-output.json'

const endpointFiles = ['./src/index.js']

swaggerAutogen(outputFile, endpointFiles)