// Copies a variable number of methods from source to target.
csv2json.rebind = function(target, source) {
  var i = 1, n = arguments.length, method;
  while (++i < n) target[method = arguments[i]] = csv2json_rebind(target, source, source[method]);
  return target;
};

// Method is assumed to be a standard csv2json getter-setter:
// If passed with no arguments, gets the value.
// If passed with arguments, sets the value and returns the target.
function csv2json_rebind(target, source, method) {
  return function() {
    var value = method.apply(source, arguments);
    return value === source ? target : value;
  };
}
