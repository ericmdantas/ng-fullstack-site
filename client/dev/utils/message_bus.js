module.exports = {
  _q: [],
  sub(token, cb) {
    this._q.push({
      token: token,
      cb: cb
    });
  },
  pub(token, info) {
    this._q.forEach((item) => {
      if (item.token === token) {
        item.cb(info);
      }
    });
  }
}
