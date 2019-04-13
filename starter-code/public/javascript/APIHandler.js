class APIHandler {
  constructor (baseUrl) {
    this.axios = axios.create({
      baseURL: baseUrl,
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar'}
    });
  }

  getFullList () {
    return this.axios.get('/characters/').
    then(response => response.data)
  }

  getOneRegister (id) {
    return this.axios.get('/characters/'+id).
    then(response => response.data)

  }

  createOneRegister (character) {
    return this.axios.post('/characters/', character).
    then(response => response.data)

  }

  updateOneRegister (id, character) {
    return this.axios.put('/characters/'+id, character).
    then(response => response.data)

  }

  deleteOneRegister (id) {
    return this.axios.delete('/characters/'+id).
    then(response => response.data)

  }
}
