const Joi = require('@hapi/joi')

const user = Joi.object({
  type: Joi.string().valid('photographer', 'client').required(),
  first_name: Joi.string().min(3).required(),
  last_name: Joi.string().min(3).required(),
  email: Joi.string().min(3).required(),
  password: Joi.string().min(3).required(),
  phone: Joi.string().min(3).required(),
})

module.exports = userBody => {
  const validate = user.validate(userBody)
  if (validate.error && Object.keys(validate.error).length > 0) {
    throw new Error(validate.error.details.map(detail => detail.message).join(','))
  }
  return validate.value
}
