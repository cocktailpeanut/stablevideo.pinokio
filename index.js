const decompress = require('decompress')
const path = require('path')
class API {
  async unzip(req, ondata, kernel) {
    const zip = path.resolve(req.cwd, "StableVideo", "nla_share.zip")
    const dest = path.resolve(req.cwd, "StableVideo", "data")
    ondata({ raw: `decompressing ${zip} to ${dest}\r\n` })
    await decompress(zip, dest, { strip: 1}) 
  }
}
module.exports = API
