const https = require('https');

module.exports.handler = (req, res) => {
  const options = {
    hostname: '34.120.179.157.nip.io',
    path: '/test-arsh',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const httpsReq = https.request(options, response => {
    let data = '';

    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      res.status(200).send(data);
    });
  });

  httpsReq.on('error', error => {
    console.error(error);
    res.status(500).send(error);
  });

  httpsReq.end();
};