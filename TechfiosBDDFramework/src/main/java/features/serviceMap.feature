Feature: service features
Scenario: service test scenario

Given user is on login page
When  title of login page is Techfios
Then user enters username and password
 | username               | password |
 | techfiosdemo@gmail.com | abc123 |
And user clik on login button
Then user is on home page
Then user click on product & service page
Then user move on new service
And user enters service data
 | name     | salePrice | itemNo |
 | Alaptop1 | 500       | 101    |
 | Alaptop2 | 650       | 102    |
 | Alaptop3 | 700       | 103    |
Then browser is close

