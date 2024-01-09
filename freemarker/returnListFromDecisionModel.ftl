<#assign trips = getDecisionModelResultNode("Get Price").outputs[0].price> 

{
 "trips": [
  <#list trips?keys as key>
    {
        "title": "${trips[key].title}",
        "description": "${trips[key].description}",
        "iata": "${trips[key].iata}",
        "country": "${trips[key].country}",
        "area": "${trips[key].area}",
        "destination": "${trips[key].destination}",
        "origin": "${trips[key].origin}",
        "price": "${trips[key].price}"
    }<#sep>, </#sep>
  </#list>
 ]
}
