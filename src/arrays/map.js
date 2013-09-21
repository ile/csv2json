import "../core/class";

csv2json.map = function(object) {
  var map = new csv2json_Map;
  if (object instanceof csv2json_Map) object.forEach(function(key, value) { map.set(key, value); });
  else for (var key in object) map.set(key, object[key]);
  return map;
};

function csv2json_Map() {}

csv2json_class(csv2json_Map, {
  has: function(key) {
    return csv2json_map_prefix + key in this;
  },
  get: function(key) {
    return this[csv2json_map_prefix + key];
  },
  set: function(key, value) {
    return this[csv2json_map_prefix + key] = value;
  },
  remove: function(key) {
    key = csv2json_map_prefix + key;
    return key in this && delete this[key];
  },
  keys: function() {
    var keys = [];
    this.forEach(function(key) { keys.push(key); });
    return keys;
  },
  values: function() {
    var values = [];
    this.forEach(function(key, value) { values.push(value); });
    return values;
  },
  entries: function() {
    var entries = [];
    this.forEach(function(key, value) { entries.push({key: key, value: value}); });
    return entries;
  },
  forEach: function(f) {
    for (var key in this) {
      if (key.charCodeAt(0) === csv2json_map_prefixCode) {
        f.call(this, key.substring(1), this[key]);
      }
    }
  }
});

var csv2json_map_prefix = "\0", // prevent collision with built-ins
    csv2json_map_prefixCode = csv2json_map_prefix.charCodeAt(0);
