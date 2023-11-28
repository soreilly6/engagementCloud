(function () {
    for (var i = 0; i < guest.sessions.length; i++) {
        var currentSession = guest.sessions[i];
          
        if(currentSession.status === "OPEN" & currentSession.channel !== "EMAIL"){
            return currentSession;
        }
    }
    return {
        createdAt : null
    };
})();
