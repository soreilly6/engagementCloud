/*
for trigger event with ext value name and appt date
*/

(function () {
  
  if(entity && entity.ref){
      return {
          name : entity.arbitraryData.ext.name,
          appt_date : entity.arbitraryData.ext.appt_date
          
      }
  }
  return null;
  
})();
