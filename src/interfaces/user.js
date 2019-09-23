const createResponse = require('../domain/helpers/createResponse')

const { save } = require('../domain/repository/user')
const userSchema = require('../domain/schemas/user')
const UserEntity = require('../domain/entities/user')

module.exports.handler = async (event, context, callback)  => {
  let user;
  try {
    user = userSchema(JSON.parse(event.body))
  } catch (error) {
    return createResponse(400, error)
  }
  const userEntity = new UserEntity(user)
  const create = await save(userEntity)
  if (!create) {
    return createResponse(409, 'email already exists')
  }
  return createResponse(200, userEntity.json())
}