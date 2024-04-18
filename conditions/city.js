(function () {
    var visited = "[[is | enum(is, is not) | is | { required: true, values: [is, is not], placeholder: is/is not }]]";
    var cityString = "[[city(s) | multienum(Aix en Provence, Amiens, Amsterdam, Antwerp, Athens, Bagneux, Barcelona, Belfast, Berlin, Bilbao, Birmingham, Blankenberge, Boblingen, Bochum, Bologna, Bonn, Bordeaux, Bournemouth, Braunschweig, Bremen, Brighton, Bruges, Brussels, Cambridge, Cardiff, Coimbra, Cologne, Copenhagen, Cork, Darmstadt, Dortmund, Douai, Dresden, Dublin, Edinburgh, Essen, Exeter, Florence, Frankfurt, Galway, Gdansk, Geneva, Glasgow, Granada, Graz, Grenoble, Groningen, Hamburg, Issy les Moulineaux, Kiel, Krakow, Krefeld, Lancaster, Leeds, Leicester, Leipzig, Leoben, Leuven, Leuwaarden, Lille, Lincoln, Lisbon, Liverpool, Lodz, London, Ludwigsburg, Lund, Luton, Lyngby, Madrid, Malaga, Malmo, Manchester, Mannheim, Marseille, Mechelen, Menen, Milan, Molndal, Montpellier, Muenster, Munich, Nantes, Newcastle, Nuremberg, Paris, Plymouth, Porto, Portsmouth, Potsdam, Prague, Preston, Rome, Rouen, Saint-Étienne, Salamanca, Seville, Sheffield, Siegen, Sollentuna, Southampton, Stockholm, Stuttgart, Swieqi, Taby, Toronto, Toulon, Toulouse, Turin, Valencia, Venice, Vienna, Warsaw, Wolfsburg, Zoersel, Zurich) |  | { required: true, searchable: true, placeholder: city(s) }]]";
    var cityArray = cityString.split(',');
    var cityMatch = false;
    var expectedType = "WEB";
    var expectedStatus =  "OPEN";
    
    if (guest && guest.sessions && guest.sessions.length > 0) {
        loop:
        for (var i = 0; i < guest.sessions.length; i++) {
            if (guest.sessions[i]) {
                if (
                    guest.sessions[i].sessionType !== expectedType
                    || guest.sessions[i].status !== expectedStatus
                ) {
                    continue loop;
                } else if (
                    guest.sessions[i].dataExtensions
                ) {
                    for (var j = 0; j < guest.sessions[i].dataExtensions.length; j++) {
                       if (guest.sessions[i].dataExtensions[j].key && guest.sessions[i].dataExtensions[j].key === 'bxt') {
                           if (guest.sessions[i].dataExtensions[j].values && guest.sessions[i].dataExtensions[j].values.geoLocationCity) {
                               for (var k = 0; k < cityArray.length; k++) {	
                                    if (guest.sessions[i].dataExtensions[j].values.geoLocationCity === cityArray[k].trim()) {	
                                        cityMatch = true;
                                        break;
                                    }
                                }
                           }
                       } 
                    }
                }
            }
        }
    }
    
    return (visited === "is") && cityMatch || (visited === "is not") && !cityMatch;
})();
