


Values exported in the API tab can be added in a template

```
{  
   "cta": "${node.outputs[0].offer.headline}",
   "text": "${node.outputs[0].offer.text}"
}

```

![image](https://github.com/soreilly6/engagementCloud/assets/88727212/58915299-c69d-4244-a021-c60f7df7d449)


Using values in the API tabs as Ifs to show or hide a HTML element

```
          <div>
            <span>Up to {{numberOfPeople}} person • {{numberOfBedrooms}} bedroom</span>
            <p>{{location}}</p>
            <div>
              {{#if checked}}<span>Checked</span>{{/if}}
              {{#if trustedLandlord}}<span>Trusted Landlord </span>{{/if}}
            </div>
            <div>
              <div>
                <span>{{pricePerMonth}}</span> /month
              </div>
            </div>
          </div>
```
