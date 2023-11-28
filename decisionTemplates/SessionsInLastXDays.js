/*
Configure Template X days as input
*/

(function () {

  var date = new Date();
  date.setDate(date.getDay() - [[X days | number | 90]]);
  
  var output = {
      'abandoned': 0,
      'converted': 0,
      'browsed': 0
  }
  
  for( var i=0; i< guest.sessions.length; i++){
     if(guest.sessions[i].channel === "WEB" || guest.sessions[i].channel === "MOBILE_APP" || guest.sessions[i].channel === "MOBILE_WEB"){
         var sessionCreatedAt = new Date(guest.sessions[i].createdAt);
         
         if(sessionCreatedAt > date){
         
             switch(guest.sessions[i].cartType) {
                  case "BROWSED":
                    output['browsed'] += 1;
                    break;
                  case "CONVERTED":
                    output['converted'] += 1;
                    break;
                  case "ABANDONED":
                    output['abandoned'] += 1;
                    break;
                }
         }
     }
      
  }
  
  return output;
})();
