/*
output config:
The visitor is part of the [[Segment]] segment in Sitecore CDP
*/

(function () {
    var segment = "[[Segment| enum(US Customers, High Value Customers, Contract Expiry in next 30 days, Account Balance over $100) | | { required: true, values: [us_customers,segment_test_1,test55, test] }]]";
    
    if (guest && guest.guestType) {
 
      for (var i=0; i<guest.segmentMemberships.length;i++) {
        
        if (guest.segmentMemberships[i].name === segment){
            return true;
        }
      
      }
      
    }
    return false;
  })();
  
