const {Router} = require('express');
// const cors = require('cors');
// const modbusController = require('../controllers/modbusController');
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// };

const router = Router();

// Requests 
// router.post('/connection', (req, res) => {
//   console.log(`Got a ${req?.body?.connect ? '' : 'dis'}connection post request`);
//   modbusController.deviceConnection(res, req?.body?.connect);
// });

// router.get('/temperture', cors(corsOptions), (req, res) => {
//   modbusController.readTempertureData(res);
//   console.log("Got a read request");  
// });

// router.post('/setSVData',  (req, res) => {
//   console.log(`Got a SV data post request: set value to ${req?.body?.svData}`);
//   modbusController.writeSVData(res, req?.body?.svData);
// });

router.post('/test', (req, res) => {
  res.status(200).send({
    foo: 'bar',
  });
});
module.exports = router;


// This responds a POST request for the homepage
// app.post('/', function (req, res) {
//   console.log("Got a POST request for the homepage");
//   res.send('Hello POST');
// });

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', function (req, res) {
//   console.log("Got a DELETE request for /del_user");
//   res.send('Hello DELETE');
// });


