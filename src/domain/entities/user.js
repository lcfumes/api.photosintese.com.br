const fields = [
  'type', 'first_name', 'last_name', 'phone', 'email', 'password', 'created_at', 'updated_at', 'deleted_at'
]
module.exports = class User {
  constructor(user) {
    fields.map(field => {
     this[field] = user[field]
    })
  }

  set(user) {
    fields.map(field => {
      this[field] = user[field]
    })
  }

  clear() {
    fields.map(field => {
      this[field] = ''
    })
  }

  getType() { return this.type }
  getFistName() { return this.first_name }
  getLastName() { return this.last_name }
  getPhone() { return this.phone }
  getEmail() { return this.email }
  getPassword() { return this.password }
  getCreatedAt() { return this.created_at }
  getUpdatedAt() { return this.updated_at }
  getDeletedAt() { return this.deleted_at }

  json(password = false) {
    return {
      type: this.type,
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
      email: this.email,
      password: password ? this.password : '',
      created_at: this.created_at,
      updated_at: this.updated_at,
      deleted_at: this.deleted_at,
    }
  }
}
