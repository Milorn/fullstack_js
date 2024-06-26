const Joi = require('joi');

module.exports = (schema) => {
    return (req, res, next) => {
        const validator = Joi.object(schema);
        const result = validator.validate(req.body);

        if(result.error) {
            res.status(422).json({message: result.error.message});
        }
        else {
            next();
        }
    }
}