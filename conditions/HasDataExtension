/*
Output Config: 

The visitor's [[Extension Name]] [[operator]] [[Extension Value]]

*/

(function () {
    
    var extensionName = '[[Extension Name | text ]]';
    var extensionValue = '[[Extension Value | text ]]';
    var operator = "[[operator| enum(greater than, greater than or equal to, less than, less than or equal to, equal to, not equal to) | | { required: true, values: [>,>=,<,<=,===, !==] }]]";
    
    for(var i=0;i<guest.dataExtensions.length;i++){
        var ext = guest.dataExtensions[i].values;
        
        if(compare(ext[extensionName], operator, extensionValue)){
            return true;
        }
    }
    
    return false;
 
})();


function compare(post, operator, value) {
  switch (operator) {
    case '>':   return post > value;
    case '<':   return post < value;
    case '>=':  return post >= value;
    case '<=':  return post <= value;
    case '===': return post === value;
    case '!==': return post !== value;
    case 'or': return post || value;
    case 'and': return post && value;
  }
}
