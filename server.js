const express = require('express');
const QRCode = require('qrcode');

const app = express();
const port = 3000;

app.get('/generate-qr', async (req, res) => {
  try {
    const url = 'https://example.com';
    const qrCodeDataURL = await QRCode.toDataURL(url);
    res.send(`
      <h1>QR Code</h1>
      <img src="${qrCodeDataURL}" alt="QR Code" />
    `);
  } catch (err) {
    res.status(500).send('Error generating QR code');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
