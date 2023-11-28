
(function () {
  // Add statements here
  var d = new Date();
  d.setMonth(d.getMonth() - [[X months | number | 6]]);
  
  var numOrders = 0;
  var totalValue = 0;
  
  
  for (var i=0; i < guest.orders.length; i++){
      var currentOrder = guest.orders[i];
      var orderCreatedAt = new Date(currentOrder.createdAt);
      
      if(orderCreatedAt > d){
          numOrders += 1;
          
          for (var j=0; j < currentOrder.orderItems.length; j++){
              totalValue += currentOrder.orderItems[j].price;
          }
      }
  }
  
  return {
      'totalValue': totalValue,
      'number': numOrders
  };
})();
