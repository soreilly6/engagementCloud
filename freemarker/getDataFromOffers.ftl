
<#list offers as i> 
    <#if (i?index == 0)> 
        <#assign image =  "${i.attributes.image}" >
        <#assign description =  "${i.attributes.description}" >
        <#assign cta =  "${i.attributes.cta}" >
        <#assign link =  "" >
    </#if> 
    <#if (i?index == 1)> 
        <#assign image1 =  "${i.attributes.image}" >
        <#assign description1 =  "${i.attributes.description}" >
        <#assign cta1 =  "${i.attributes.cta}" >
        <#assign link1 =  "" >
    </#if> 
</#list>


[
    {
        "keys": {
            "Email": "${guest.email}"
        },
        "values": {
            "PAM_ID": "${guest.identifiers[0].id}",
            "name": "${guest.firstName} ${guest.lastName}",
            "image": "${image}",
            "description": "${description}",
            "cta": "${cta}",
            "link": "${link}",
            "image2": "${image1}",
            "description2": "${description1}",
            "cta2": "${cta1}",
            "link2": "${link1}",
            "sendEmail": "sarah.oreilly@sitecore.com"
        }
    }
]
