var getOptions = require('loader-utils').getOptions;

var toFunction = function(content) {
    return `function(){${content}}`;
}

module.exports = function(source) {
  var options = getOptions(this);

  // 对资源应用一些转换……
  console.log(source);
  var output = "";
  output += 'var exportfun = '
    + toFunction(`console.log('${source}');`);


  return 'export default exportfun;';
};
