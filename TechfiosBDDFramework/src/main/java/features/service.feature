Feature: service features
Scenario Outline: service test scenario

Given user is on login page
When  title of login page is Techfios
Then use enters "<username>" and "<password>"
And user clik on login button
Then user is on home page
Then user click on product & service page
Then user move on new service
And user enters data "<name>" and "<salePrice>" and "<itemNo>"
Then browser is close

Examples:

 | username               | password | name     | salePrice | itemNo |
 | techfiosdemo@gmail.com | abc123   | Alaptop1 | 500       | 101    |
 | techfiosdemo@gmail.com | abc123   | Alaptop2 | 650       | 102    |   
 | techfiosdemo@gmail.com | abc123   | Alaptop3 | 700       | 103    | 
  

