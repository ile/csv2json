var csv2json_arraySlice = [].slice,
    csv2json_array = function(list) { return csv2json_arraySlice.call(list); }; // conversion for NodeLists
