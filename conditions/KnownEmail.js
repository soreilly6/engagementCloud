/*
Output Config:
Visitor email [[operator]] known
*/

(function () {
  var operator = '[[operator|enum(is, is not)|is]]';
    
  if (operator === 'is') {
      if(guest.email !== null){
          return true;
      }
  }
  
  if (operator === 'is not') {
      if(guest.email === null){
          return true;
      }
  }
  
  return false;
})();
