require('dotenv').config()
const fs = require('fs')

const credentials = {
  pfx: fs.readFileSync(process.env.PFX_FILE),
  passphrase: process.env.PFX_PASSPHRASE,
  ca: fs.readFileSync(process.env.INTERCERT_FILE)
}

module.exports = { credentials }
