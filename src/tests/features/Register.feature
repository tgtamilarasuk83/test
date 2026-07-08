@Tamilarasu
Feature: Tamilarasu_K_8_07_2026_RegisterFeature

Background: 
Given the user in the Dashboard 


Scenario Outline: Register with validCredials
When The user enters "<First name:>" , "<Last name:>","<Email:>","<Password>","<Confirm password:>" details 
And The user click on the Register button 
Then The user register sucessfully with the message of Your registration completed


Examples:
    | First name: | Last name: | Email |Password | Confirm password:|
    | Tamilarasu   | k | testingtamil@gmail.com  |testingtamil@gmail.com|testingtamil@gmail.com|