function main() {
    //print("most recent session " + guest.webSessions[0]);
    var webSessions = [];
    guest.sessions.forEach(function (session) {
        //print("type" + session.sessionType)
        if (session.sessionType === 'WEB') {
            webSessions.push(session);
        }
    });
    return webSessions[0];
    //return guest.sessions[0];
}

main();
