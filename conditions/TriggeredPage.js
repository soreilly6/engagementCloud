/*
output config: 
The page that triggered this experience was [[compares to]] [[page]] 
*/

(function () {
  // Add statements here
  
  var pageName = '[[page | string |  | { required: true, placeholder: page }]]'.toLowerCase();
  var compareValue = '[[compares to | enum(is equal to, contains, starts with, ends with) | | { required: true, placeholder: compares to }]]';
   var pageMatch = false;
    
  var triggerEventPage = entity.arbitraryData.page;
  
  if (compareValue === 'is equal to') {
      pageMatch = triggerEventPage === pageName;
  } else if (compareValue === 'contains') {
      pageMatch = triggerEventPage.indexOf(pageName) >= 0 ? true : false;
  } else if (compareValue === 'starts with') {
      pageMatch = triggerEventPage.startsWith(pageName);
  } else if (compareValue === 'ends with') {
      pageMatch = triggerEventPage.endsWith(pageName);
  }
        
  return pageMatch;
  
  
})();
