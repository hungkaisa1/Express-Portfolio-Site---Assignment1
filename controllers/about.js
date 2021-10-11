// use express
let express = require('express')

//instantiate an express router to parse and direct url requests
let router = express.Router()

router.get('/', (req, res) => {
  res.render('index');
})

//make public
module.exports = router