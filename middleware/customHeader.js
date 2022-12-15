// TODO: En los middelwares, es necesario considerar el parametro NEXT en las funciones

const customHeader = (req, res, next) => {
    try{
        const apikey = req.headers.api_key;
        if(apikey === 'simonbrial'){
            next()
        } else (
            res.status(403),
            res.send({ error: 'API_KEY_NO_NO_ES_CORRECTO'})
        )
    }
    catch(error){
        res.status(403)
        res.send({ error: 'ALGO_OCURRIO_EN_EL_CUSTOM_HEADER' })

    }
};

module.exports = customHeader;