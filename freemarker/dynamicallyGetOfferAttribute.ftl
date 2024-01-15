
<#assign language = getDecisionModelResultNode("Get Session Language").outputs[0].language>


<#list offers as i> 
        <#assign personalizedDescription =  "${i.attributes['${language}']}" >
</#list>

{
  "language": "${language}",
  "personalizedDescription": "${personalizedDescription}"
}
