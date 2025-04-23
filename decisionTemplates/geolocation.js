

(function () {

  var output;
  
  if(guest.sessions.length > 0){
      
      var currentSession = getMostRecentSession();
      
      print("getting current session");
      if (currentSession.createdAt){
        var viewTime;
        for (var i = 0; i < currentSession.events.length; i++) {
            
            if(currentSession.dataExtensions){
                
                var ext = currentSession.dataExtensions[i].values;
            
                if(currentSession.dataExtensions[i].key === "bxt"){
                    output = currentSession.dataExtensions[i].values;
                    output['viewTime'] = new Date(currentSession.createdAt);
                    return output;
                }  
            }
        }
    }

  }

  return output;
})();


function getMostRecentSession() {
    var webSessions = [];
    guest.sessions.forEach(function (session) {
        if (session.sessionType === 'WEB') {
            webSessions.push(session);
        }
    });
    return webSessions[0];
}
