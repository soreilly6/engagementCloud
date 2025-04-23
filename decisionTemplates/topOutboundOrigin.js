(function () {
  // Add statements here
  var d = new Date();
  d.setMonth(d.getMonth() - [[X months | number | 6]]);
  
  var numOrders = 0;
  
  var maxOriginIata;
  var maxOrigin;
  var maxOriginCount = 0;
  
  var origins = {};

  for (var i=0; i < guest.orders.length; i++){
      var currentOrder = guest.orders[i];
      var orderCreatedAt = new Date(currentOrder.createdAt);
      
      if(orderCreatedAt > d){
          numOrders += 1;
          
          var currOrigin = currentOrder.orderItems[0].flightSegments[0].origin;
          
          if(origins[currOrigin]){
              origins[currOrigin] += 1;
          }else{
              origins[currOrigin] = 1;
          }
          
          if(maxOriginCount < origins[currOrigin]){
              maxOriginIata = currOrigin;
              maxOrigin = currentOrder.orderItems[0].name.split(' to ')[0];
              maxOriginCount = origins[currOrigin];
          }
      }
  }
  
  return {
      'totalOrders': numOrders,
      'topOrigin': maxOrigin,
      'topOriginIata': maxOriginIata,
      'flightFromOrigin': maxOriginCount,
      'allFlight': origins
  };
})();
