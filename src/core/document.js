import "array";

var csv2json_document = document,
    csv2json_documentElement = csv2json_document.documentElement,
    csv2json_window = window;

// Redefine csv2json_array if the browser doesn’t support slice-based conversion.
try {
  csv2json_array(csv2json_documentElement.childNodes)[0].nodeType;
} catch(e) {
  csv2json_array = function(list) {
    var i = list.length, array = new Array(i);
    while (i--) array[i] = list[i];
    return array;
  };
}
