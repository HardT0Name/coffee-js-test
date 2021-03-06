// Generated by CoffeeScript 2.3.2
(function() {
  var mod;

  mod = function(body) {
    var Arr, reg;
    Arr = body.match(/Content-Type\:.*?boundary=-*(.*;?)+/);
    reg = `\n-*${Arr[1]}[\\s\\S]*?filename="(.*)"[\\s\\S]*?(?:Content-Type:.*)([\\s\\S]*?)-*${Arr[1]}--`;
    reg = new RegExp(reg);
    if (/[^0-9a-z\-]/.test(Arr[1])) {
      throw new Error("unexpected token");
    }
    return body.match(reg);
  };

  module.exports = mod;

}).call(this);
