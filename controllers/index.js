var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})

// GET: /about
router.get('/about', (req, res) =>{
  res.render('about', {
    title: 'About this Site',
    content: 'Here is content of about Page'
  })
})

// GET: /project
router.get('/project', (req, res) =>{
  res.render('project', {
    title: 'Project this Site',
    content: 'Here is content of project Page'
  })
})

// GET: /contact
router.get('/contact', (req, res) =>{
  res.render('contact', {
    title: 'Contact this Site',
    content: 'Here is content of contact Page'
  })
})

module.exports = router;
