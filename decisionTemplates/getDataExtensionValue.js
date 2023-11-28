/*

*/

(function () {
    
    var extensionName = '[[Extension Name | text ]]';

    for(var i=0;i<guest.dataExtensions.length;i++){
        var ext = guest.dataExtensions[i].values;
        
        if(ext[extensionName])){
            return ext[extensionName];
        }
    }
    
    return null;
 
})();


