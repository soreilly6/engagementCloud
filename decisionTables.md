
### Date as an input in a decision table

![image](https://github.com/soreilly6/engagementCloud/assets/88727212/493b933c-d519-4382-b784-ce2ac1453489)

Add an input as script 

![image](https://github.com/soreilly6/engagementCloud/assets/88727212/ea8306c5-3a85-4515-bf53-6818845e52bb)

and include the following code with the output type in the settings as a date

![image](https://github.com/soreilly6/engagementCloud/assets/88727212/10355f2e-71d6-416a-9483-e954d49a9eeb)


```
(function () {
  
  load("classpath:moment.js");
  
  var today = moment().format();                         
  
  print(today);
  
  return today;
})();
```


### Check value if value exists in list

![image](https://github.com/soreilly6/engagementCloud/assets/88727212/5468190c-acdd-434d-8a30-0e5aa37362bb)

Add an input as script 

![image](https://github.com/soreilly6/engagementCloud/assets/88727212/ea8306c5-3a85-4515-bf53-6818845e52bb)

and return true with the output type in the settings as a boolean

![image](https://github.com/soreilly6/engagementCloud/assets/88727212/a30844f5-37dd-4891-a173-d2e4b5f99d62)

in the decision table add the code to check if the value exisits in the list e.g. idDetails.provider.contains("email")

