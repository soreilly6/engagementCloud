/*
Output Config: 
Visitor has had [[event]] occur in current session 
*/


(function () {

  for( var i=0; i< guest.sessions.length; i++){
     if(guest.sessions[i].status === "OPEN" ){
         if(guest.sessions[i].channel === "WEB" || guest.sessions[i].channel === "MOBILE_APP" || guest.sessions[i].channel === "MOBILE_WEB"){
               
               for(var j=0; j<guest.sessions[i].events.length; j++){
                  
                  var currentEvent = guest.sessions[i].events[j];
                 
                  if(currentEvent.type === [[ event | string | "VIEW"]]){
                      
                      return currentEvent;
    
                  }
                  
              }
              
         }
     }
      
  }
  
  return false;
})();
