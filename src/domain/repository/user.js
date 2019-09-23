const userModel = require('../models/user')

const save = async userEntity => {
  const result = await userModel.findAll({
    where: {
      email: userEntity.getEmail()
    }
  })
  if (result.length === 0) {
    const create = await userModel.create(userEntity.json(true))
    userEntity.clear()
    userEntity.set(create)
    return userEntity
  }
  return false  
}

const findByEmail = async userEntity => {
  const user = await userModel.findAll({
    attributes: {
      exclude: ['password']
    },
    where: {
      email: userEntity.getEmail()
    }
  })
  userEntity.clear()
  userEntity.set(create)
  return userEntity
}

const sync = () => userModel.sync({ force: false })

module.exports = {
  save,
  findByEmail
}
