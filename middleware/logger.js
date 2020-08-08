const moment = require('moment');

//Constructing an using a logger!
const logger = (req,res,next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
  next();
};

module.exports = logger;
