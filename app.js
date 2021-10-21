const express =  require('express');
const morgan = require('morgan')
const routes = require('./src/api/Routes.js');
const {pool} = require('./src/pg/queries.js')
const dotenv = require('dotenv')
dotenv.config()
const path = require('path');
const { query } = require('express');

const port = process.env.PORT || 3000;
const app = express();
// console.log(db);

app.use(
  morgan('dev'),
  express.json(),
  express.urlencoded({
    extended: true
  })

)

app.use('/api/assets', express.static(path.join(__dirname, 'assets/img')))

app
  .get('/', (req, res) => {
    res.json({'message': "welcome home"})
  })
  .listen(port, () => {
    console.log(`Server running in http://127.0.0.1:${port}`);
    // http://192.168.18.16:3000
  });
  
routes(app)