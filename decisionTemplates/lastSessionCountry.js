(function () {

  
    for(var i=0; i<guest.sessions.length; i++){
        for(var j=0; j<guest.sessions[i].dataExtensions.length; j++){
            if(guest.sessions[i].dataExtensions[j].name === "bxt"){
              
                if(guest.sessions[i].dataExtensions[j].values.geoLocationCountry){
                    return guest.sessions[i].dataExtensions[j].values.geoLocationCountry;
                }
            }
        }
    }
    
  return "";
  
})();
