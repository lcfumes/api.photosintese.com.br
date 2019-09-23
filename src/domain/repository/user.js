const userModel = require('../models/user')
const UserEntity = require('../entities/user')

const save = async userEntity => {
  const result = await userModel.findAll({
    attributes: {
      exclude: ['password']
    },
    where: {
      email: userEntity.getEmail()
    }
  })
  if (result.length === 0) {
    const create = await userModel.create(userEntity.json(true))
    return new UserEntity(create.dataValues)
  }
  return false  
}

const sync = () => userModel.sync({ force: false })

module.exports = {
  save
}
