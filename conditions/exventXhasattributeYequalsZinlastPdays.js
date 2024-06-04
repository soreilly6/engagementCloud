/*
Output Config: 
Visitor [[operator]] event [[event type]] has attribute [[attribute name]] equal to [[attribute value]] in the last [[P days]].
*/


(function () {
    
  var operator = '[[operator|enum(has, has not)|has]]';
  var date = new Date();
  date.setDate(date.getDay() - [[P days | number | 90]]);
  
  var triggered = false;
  

  for( var i=0; i< guest.sessions.length; i++){
     if(guest.sessions[i].status === "OPEN" ){
         if(guest.sessions[i].channel === "WEB" || guest.sessions[i].channel === "MOBILE_APP" || guest.sessions[i].channel === "MOBILE_WEB"){
             
             var sessionCreatedAt = new Date(guest.sessions[i].createdAt);
             
             if(sessionCreatedAt > date){
               
                   for(var j=0; j<guest.sessions[i].events.length; j++){
                      
                      var currentEvent = guest.sessions[i].events[j];
                     
                      if(currentEvent.type === "[[event type|string|VIEW]]"){
                          
                          if(currentEvent.arbitraryData.ext["[[attribute name|string|utm_campaign]]"] === "[[attribute value|string|paid_media]]"){
                              triggered = true;
                              break;
                          }
                      }
                  }
             }
         }
     }
  }
  
  if(operator === "has" && triggered){
      return true;
  }
  else if(operator === "has not" && !triggered){
      return true;
  }  
  else{
      return false;
  }
  
})();
