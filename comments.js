// Create web server
var express = require('express');
var router = express.Router();

// Import comment model
var Comment = require('../models/comment');

// Import passport
var passport = require('passport');

// Import user model
var User = require('../models/user');

// Import Post model
var Post = require('../models/post');

// Import mongoose
var mongoose = require('mongoose');

// Import csrf
var csrf = require('csurf');

// Import csrf protection
var csrfProtection = csrf();

// Use csrf protection
router.use(csrfProtection);

// Import moment
var moment = require('moment');

// Import auth function
var isLoggedIn = require('../config/auth');

// Import mailer
var mailer = require('../config/mailer');

// Import config
var config = require('../config/config');

// Import async
var async = require('async');

// Import crypto
var crypto = require('crypto');

// Import validator
var validator = require('validator');

// Import sanitize
var sanitize = require('mongo-sanitize');

// Import multer
var multer = require('multer');

// Set upload directory
var upload = multer({ dest: 'uploads/' });

// Import fs
var fs = require('fs');

// Import path
var path = require('path');

// Import mkdirp
var mkdirp = require('mkdirp');

// Import json2csv
var json2csv = require('json2csv');

// Import csvtojson
var csvtojson = require('csvtojson');

// Import xlsx
var xlsx = require('node-xlsx');

// Import json2xls
var json2xls = require('json2xls');

// Import jsonexport
var jsonexport = require('jsonexport');

// Import json2csv
var json2csv = require('json2csv');

// Import csvtojson
var csvtojson = require('csvtojson');

// Import xlsx
var xlsx = require('node-xlsx');

// Import json2xls
var json2xls = require('json2xls');

// Import jsonexport
var jsonexport = require('jsonexport');

// Import json2csv
var json2csv = require('json2csv');

// Import csvtojson
var csvtojson = require('csvtojson');

// Import xlsx
var xlsx = require('node-xlsx');

// Import json2xls
var json2xls = require('json2xls');

// Import jsonexport