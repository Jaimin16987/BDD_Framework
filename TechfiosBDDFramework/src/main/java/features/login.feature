Feature: Login Feature
#without Examples keyword
#Scenario: Login test scenario
#
#Given user is on login page
#When  title of login page is Techfios
#Then use enters "techfiosdemo@gmail.com" and "abc123"
#And user clik on login button
#Then user is on home page


#with using Example keywords
Scenario Outline: Login test scenario

Given user is on login page
When  title of login page is Techfios
Then use enters "<username>" and "<password>"
And user clik on login button
Then user is on home page

Examples:

   | username               | password |
   | techfiosdemo@gmail.com | abc123   |