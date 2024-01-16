(function () {

  var operator = "[[operator| enum(equal to, not equal to) | | { required: true, values: [===, !==] }]]";
  var sessionType = "[[session type| enum(current session, last session) | | { required: true ,placeholder: 'last session' }]]";
  var language = '[[language | enum(AF,AR,AZ,BE,BG,BN,BS,CA,CS,CY,DA,DE,EL,EN,EO,ES,ET,EU,FA,FI,FR,GA,GL,GU,HE,HI,HR,HT,HU,HY,ID,IS,IT,JA,KA,KK,KM,KN,KO,KU,KY,LA,LB,LT,LV,MK,ML,MN,MR,MS,MT,NE,NL,NO,PA,PL,PS,PT,RO,RU,SD,SI,SK,SL,SM,SN,SO,SQ,SR,SV,SW,TA,TE,TG,TH,TK,TL,TR,TT,UK,UR,UZ,VI,XH,YI,YO,ZH,ZU) |  | { required: true }]]';


  for(var i=0; i<guest.sessions.length; i++){
      
      if (sessionMatchesSessionType(guest.sessions[i], sessionType)){
          
          if(compare(guest.sessions[i].language, operator, language)){
              return true;
          }else{
              break;
          }
      }
  }
  
  return false;
})();

function sessionMatchesSessionType(session, sessionType){
    if (sessionType === "current session"){
        if (session.status === "OPEN"){
            return true;
        }
        
    }
    if (sessionType === "last session"){
        if (session.channel === "WEB"){
            return true;
        }
    }
    return false;
}


function compare(post, operator, value) {
  switch (operator) {
    case '>':   return post > value;
    case '<':   return post < value;
    case '>=':  return post >= value;
    case '<=':  return post <= value;
    case '===': return post === value;
    case '!==': return post !== value;
    case 'or': return post || value;
    case 'and': return post && value;
  }
}
