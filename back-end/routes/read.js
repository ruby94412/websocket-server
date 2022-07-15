const {Router} = require('express');

const router = Router();


router.get('/test', (req, res) => {
  res.status(200).send({
    foo: 'bar',
  });
});

router.ws('/websocket', (ws, req) => {
  ws.on('message', msg => {
    console.log(msg);
    ws.send('hello from server');
  });
  // console.log(req);
});

module.exports = router;




