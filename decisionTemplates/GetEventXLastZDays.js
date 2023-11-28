/*
Configure Template X days as input
*/

(function () {

  var date = new Date();
  date.setDate(date.getDay() - [[X days | number | 90]]);
  

  for( var i=0; i< guest.sessions.length; i++){
     if(guest.sessions[i].channel === "WEB" || guest.sessions[i].channel === "MOBILE_APP" || guest.sessions[i].channel === "MOBILE_WEB"){
         var sessionCreatedAt = new Date(guest.sessions[i].createdAt);
         
         if(sessionCreatedAt > date){
           
           for(var j=0; j<guest.sessions[i].events.length; j++){
              
              var currentEvent = guest.sessions[i].events[j];
             
              if(currentEvent.type === [[ event | string | "VIEW"]]){
                  
                  return currentEvent;

              }
              
          }
         }
     }
      
  }
  
  return null;
})();
