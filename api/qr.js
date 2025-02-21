const QRCode = require('qrcode');

module.exports = async (req, res) => {
  try {
    if (!global.qrString) return res.status(404).send('QR not available');
    res.setHeader('Content-Type', 'image/png');
    await QRCode.toFileStream(res, global.qrString);
  } catch (err) {
    res.status(500).send('Error generating QR');
  }
};
