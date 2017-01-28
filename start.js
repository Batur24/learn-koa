/**
 * Created by batur on 2017/1/28.
 */
const register = require('babel-core/register');

register({
  presets: ['stage-3']
});

require('./app.js')
