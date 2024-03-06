(function () {
    
    
    
    function getExtValue(key) {
        for (var i=0; i< guest.dataExtensions.length; i++) {
            if (key in guest.dataExtensions[i].values) {
                return guest.dataExtensions[i].values[key];
            }
        }
        return "";
    }
    
    function getTotalOrder() {
        var totalValue = 0;
        for (var i=0; i< guest.orders.length; i++) {
            totalValue += guest.orders[i].price;
        }
        return totalValue;
    }
    
    function dateSinceEvent(type){
        for (var i=0; i< guest.sessions.length; i++) {
            for (var j=0; j< guest.sessions[i].events.length; j++) {
                if(guest.sessions[i].events[j].type === type){
                    return guest.sessions[i].events[j].createdAt;
                }
            }
            
        }
        return "";
    }
    
    
    var guestFavTeam = getExtValue('favouriteTeam');
    var guestAge = getExtValue('age');
    var guestVertical = getExtValue('preferredVertical');
    var guestLifetimeOrderValue = getTotalOrder();
    var guestlastLogin = dateSinceEvent("IDENTITY");
    var guestlastBet = dateSinceEvent("ADD");
  
    // Return the guest's age in the "age" variable. Then, reference "age" as ${jsResult.age} on the Output structure tab.
    return { age: guestAge,
    preferredVertical: guestVertical,
    dateOfLastBet: guestlastLogin,
    dateOfLastSignIn: guestlastBet,
    totalRevenueGenerated: guestLifetimeOrderValue,
    favouriteTeam: guestFavTeam
        
    }
})()
