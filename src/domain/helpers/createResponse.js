module.exports = (status, body, header = {}) => {
  return {
    headers: Object.assign(header, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }),
    statusCode: status,
    body: (typeof body === 'object') ? JSON.stringify(body) : body
  }
}