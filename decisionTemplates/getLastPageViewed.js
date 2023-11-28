
(function () {

  var viewPage;
  var currentSession = getMostRecentSession();
  
  if (currentSession.createdAt){
    var viewTime;
    print(viewTime);
    for (var i = 0; i < currentSession.events.length; i++) {
        var currentEvent = currentSession.events[i];
          
        if(currentEvent.type === "VIEW"){
            if(currentEvent.createdAt > viewTime || viewTime === undefined){
                viewTime = currentEvent.createdAt;
                viewPage = currentEvent.arbitraryData.page;
            }
        }
    }
    if (viewPage === "/"){
     viewPage = "homepage" 
        
    }
  }

  return viewPage;
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
