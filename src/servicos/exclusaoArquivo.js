const blackBlazeS3 = require('../conexoes/armazenamento');

const excluirImagem = async (path) => {
    await blackBlazeS3.deleteObject({
        Bucket: process.env.BLACKBLAZE_BUCKET,
        Key: path
    }).promise()
}

module.exports = excluirImagem;