<#assign CHdata = getDecisionModelResultNode("Content Hub SpinBanking").outputs[0].contentHubSpinbanking.data.allM_Asset.results>
<#assign variantName = getDecisionModelResultNode("Set Content").outputs[0].variant1>


  <#list CHdata as item>
    <#if variantName == item.fileName>
    {  
        "title" :"${item.title}",
        "description" :"${item.description["en-US"]?replace("<[^>]+>", "", "r")}",
        "image" :"https://cdp-content-demo5.sitecoresandbox.cloud/api/public/content/${item.assetToPublicLink.results[0].relativeUrl}",
        "CTA": "Learn More"

    }
    </#if>
  </#list>
