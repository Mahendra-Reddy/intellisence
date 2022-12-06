import express from 'express';
import axios from 'axios'

const router = express.Router()

router.get('/reference', async (req, res) => {
    try {
        const response = await axios({
            url: 'https://reference.intellisense.io/thickenernn/v1/referencia',
            headers: {
                'Accept-Encoding': 'identity'
            },
            method: 'get'
        })
        res.send(response.data)
    }
    catch (err) {
        res.statusCode = 400
        res.send({
            message: 'some thing went wrong',
            error: true
        })
    }
})

export default router

