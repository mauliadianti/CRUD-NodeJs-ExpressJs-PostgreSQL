const {pool} = require('../pg/queries.js')


class user{
  async create(req, res){
    try{
      const {_id, nama,nim} = req.body
  
      pool.query(`INSERT INTO Users (_id, nama,nim) VALUES (${_id}, ${nama}, ${nim})`, [_id, nama, nim], (error, results) =>{
        res.status(200).send({message: 'OK'})
      })
    }catch(err){
      res.send({error: 'Server Error' + err})
    }
  }

  async read(req, res){
    try{
      pool.query('SELECT * FROM users', (error, results) => {
        res.status(200).json(results.rows);
       })
    }catch(err){
      res.send({error: 'Server Error' + err})
    }
  }

  async readbyId(req,res){
    try{
      const user_id = req.params.user_id

      pool.query(`SELECT * FROM Users WHERE user_id=${user_id}`, [user_id], (error, results) => {
        res.status(200).json(results.rows);
      })
    }catch{
      res.send({error: 'Server Error' + err})
    }
  }


  async update(req, res){
    try{
      const _id = req.params._id
      const {nama} = req.body

      pool.query(`UPDATE users SET nama=${nama} WHERE _id=${_id}`, [nama, _id], (error, results) =>{
        res.status(200).send(`user with _id:${_id} succesfully update`)
      })
    }catch(err){
       res.send({error: 'Server Error' + err})
    }
  }

  async delete(req, res){
    try{
      const _id = req.params._id

      pool.query(`DELETE FROM users WHERE _id=${_id}`, [_id], (error, results) => {
      res.status(200).json(`user delete with ID ${_id}`);
  })
    }catch(err){
      res.send({error: 'Server Error' + err})
    }
  }
}

module.exports = user