/**
 * Created by batur on 2017/1/28.
 */

home = ctx => {
  ctx.render("home", {double: "rainbow"})
};

test = ctx => {
  ctx.body = "test page"
}

module.exports = {
  home: home,
  test: test
}
