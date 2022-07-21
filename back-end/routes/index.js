

const {Router} = require('express');
const loginRouter = require('./Login');

const router = Router();
router.use('/login', loginRouter);
module.exports = router;


// router.get('/test', (req, res) => {
//   res.status(200).send({
//     foo: 'bar',
//   });
// });

// router.post('/login', (req, res) => {
//   console.log(req.body);
//   res.status(200).send({
//     foo: 'bar',
//   })
// });

// router.ws('/websocket', (ws, req) => {
//   ws.on('message', msg => {
    
//     ws.listeners('message').forEach(ele => {
//       console.log(ele.name);
//     })
//     console.log(msg, req.ip);
//     ws.send('hello from server2');
//   });
//   // console.log(req);
// });

// router.ws('/websocket', (ws, req) => {
//   ws.on('connection', msg => {
//     console.log('---------')
//   });
// });

// module.exports = router;




