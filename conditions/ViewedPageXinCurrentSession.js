/*
Output Config: 
Visitor has viewed page containing [[page name]] in current session  
*/


(function () {

  for( var i=0; i< guest.sessions.length; i++){
     if(guest.sessions[i].status === "OPEN" ){
         if(guest.sessions[i].channel === "WEB" || guest.sessions[i].channel === "MOBILE_APP" || guest.sessions[i].channel === "MOBILE_WEB"){
               
               for(var j=0; j<guest.sessions[i].events.length; j++){
                  
                  var currentEvent = guest.sessions[i].events[j];
                 
                  if(currentEvent.type === "VIEW"){
                      
                      if(currentEvent.arbitraryData.page.indexOf("[[page name|string|]]") !== -1){
                          return true;
                      }
                      
                      
    
                  }
                  
              }
              
         }
     }
      
  }
  
  return false;
})();
