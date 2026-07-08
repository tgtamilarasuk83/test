@Tamilarasu
Feature: TamilarasuK_8_07_2026_LoginFeature

Scenario: Login with valid credetials 
When the user click on the login 
And Enters The Email and Password 
And Click on the login 
Then The user sucessfully Login to the application

Scenario: Login with invalid credetials 
When the user click on the login 
And Enters The invalid  Email and Password 
And Click on the login 
Then The user can see the error message


