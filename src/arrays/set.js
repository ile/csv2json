import "../core/class";
import "map";

csv2json.set = function(array) {
  var set = new csv2json_Set;
  if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
  return set;
};

function csv2json_Set() {}

csv2json_class(csv2json_Set, {
  has: function(value) {
    return csv2json_map_prefix + value in this;
  },
  add: function(value) {
    this[csv2json_map_prefix + value] = true;
    return value;
  },
  remove: function(value) {
    value = csv2json_map_prefix + value;
    return value in this && delete this[value];
  },
  values: function() {
    var values = [];
    this.forEach(function(value) {
      values.push(value);
    });
    return values;
  },
  forEach: function(f) {
    for (var value in this) {
      if (value.charCodeAt(0) === csv2json_map_prefixCode) {
        f.call(this, value.substring(1));
      }
    }
  }
});
