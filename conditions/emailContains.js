
//Output: The customer's email [[compares to]] [[emails(s)]]

(function () {
    var compareValue = "[[compares to | enum(is equal to, includes any of, contains, starts with, ends with, is null) | | { required: true, placeholder: compares to }]]";
    var emailMultiValue = "[[emails(s) | multiselect() || {required: true, placeholder: referrer(s) } ]]";
    var emailArray = emailMultiValue.split(',');
    var emailMatch = false;
    
    if (guest && guest.email) {
        
        for (var k = 0; k < emailArray.length; k++) {	
            
            switch (compareValue) {
              case "is equal to":
                if (guest.email === emailArray[k]) {	
                    emailMatch = true;	
                    break;	
                }
              case "includes any of":
                if (guest.email === emailArray[k]) {	
                    emailMatch = true;	
                    break;		
                }
              case "contains":
                emailMatch = guest.email.indexOf(emailArray[k]) >= 0 ? true : false;
                break;	
              case "starts with":
                emailMatch = guest.email.startsWith(emailArray[k]);
                break;	
              case "ends with":
                emailMatch = guest.email.endsWith(emailArray[k]);
                break;	
              case "is null":
                emailMatch = !emailArray[k];
                break;	
              default:
                break;
                
            }

        }
        
    } 
    
    return emailMatch;
})();
