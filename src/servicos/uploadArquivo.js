const blackBlazeS3 = require('../conexoes/armazenamento');

const uploadImagem = async (path, buffer, mimetype) => {
    const imagem = await blackBlazeS3.upload({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path,
        Body: buffer,
        ContentType: mimetype
    }).promise()

    return {
        path: imagem.Key,
        url: `https://${process.env.BACKBLAZE_BUCKET}.${process.env.ENDPOINT_S3}/${imagem.Key}`
    }
}

module.exports = uploadImagem;