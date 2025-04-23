

(function () {

  var output;
  var currentSession = getMostRecentSession();
  
  if (currentSession.createdAt){
    var viewTime;
    for (var i = 0; i < currentSession.events.length; i++) {
        var ext = currentSession.dataExtensions[i].values;
        
        if(currentSession.dataExtensions[i].key === "bxt"){
            output = currentSession.dataExtensions[i].values;
            output['viewTime'] = currentSession.createdAt;
            return output;
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
