const modbusRTU = require("modbus-serial");
const SerialPort = require("serialport");
let client = null;

SerialPort.list().then(res => {
  res?.forEach(element => {
    if (element.path.indexOf('usbserial')) {
      client = new modbusRTU(new SerialPort(element.path, {baudRate: 9600, autoOpen: false}));
    }
  })
});

const writeSVData = (res, data) => {
  if (!client) {
    res.status(500).json({error: 'serial port not detected'});
    return;
  }
  client.writeRegister(0, data)
    .then(response => {
      console.log(response);
      res.status(200).send({success: true});
    });
};

const deviceConnection = (res, connect) => {
  if (!client) {
    res.status(500).json({error: 'serial port not detected'});
    return;
  }
  if (connect) {
    client?.open(() => {
      res.status(200).send({connectionStatus: true});
      console.log('connection success!!');
    });
  } else {
    client?.close(() => {
      res.status(200).send({connectionStatus: false});
      console.log('disconnection success!!');
    });
  }
}

const readTempertureData = res => {
  if (!client) {
    res.status(500).json({error: 'serial port not detected'});
    return;
  }
  client?.readInputRegisters(0, 6)
    .then(response => {
        res.send(response);
        console.log('temperture fetch success:', response);
    });
}

module.exports = {
  deviceConnection,
  readTempertureData,
  writeSVData,
}