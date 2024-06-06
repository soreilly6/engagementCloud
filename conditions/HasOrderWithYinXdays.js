/*
Visitor has trip with [[attribute]] in [[X days]]
*/

(function () {
  // Add statements here
  var d = new Date();
  var today = new Date();
  var timeframe = "[[X days | number | 10]]";
  d.setDate(d.getDay() + timeframe);
  
  for (var i=0; i < guest.orders.length; i++){
      var currentOrder = guest.orders[i];
      
      for(var j=0;j<currentOrder.dataExtensions.length;j++){
          
          if(guest.dataExtensions[i].values["[[attribute | string | startDate]]"]){
                var ext = guest.dataExtensions[i].values["[[attribute | string | startDate]]"];
                var date = new Date(ext);
                
                if(date <= d && date > today){
                    return true;
                }
              }
              
          }

  }
  
  return false;
})();
