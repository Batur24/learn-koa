/**
 * Created by batur on 2017/1/28.
 */

import User from '../model/model';

let home = async ctx => {
  let user = await User.findOne();
  await ctx.render("home", {"users": user.get('name')})
};

let test = ctx => {
  ctx.body = "test page"
};

module.exports = {
  home: home,
  test: test
};
