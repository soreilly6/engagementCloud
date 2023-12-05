/*
Output Config: 
Request for interactive experience has Request Parameter compares to Request Value(s)
*/


(function () {
  // Add statements here
  
  var customKey = "[[Request Parameter | string ]]";
  var customValue = "[[Request Value(s) | multiselect() ]]";
  var compareValue = "[[compares to | enum(is equal to,contains,starts with,ends with,is null) | | { required: true, placeholder: compares to }]]";
  var valueArray = customValue.split(',');
  
  var matchValue = false;

  
  if (request && request.params && request.params[customKey]) {
      
      if (compareValue === 'is equal to') {

          for (var k = 0; k < valueArray.length; k++) {	
              if (request.params[customKey] === valueArray[k]) {	
                  matchValue = true;	
                  break;
                  
              }
          }

      } else if (compareValue === 'contains') {
          matchValue = request.params[customKey].indexOf(valueArray[0]) >= 0 ? true : false;
          
      } else if (compareValue === 'starts with') {
          matchValue = request.params[customKey].startsWith(valueArray[0]);
          
      } else if (compareValue === 'ends with') {
          matchValue = request.params[customKey].endsWith(valueArray[0]);
      } 
        
  } else if (compareValue === 'is null') {
      	    matchValue = true;
  }
