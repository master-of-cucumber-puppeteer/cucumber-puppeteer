Feature: Purecloud Login
As a product manager
I want users to be authenticated before using the product
So that only registered users have access

Scenario: User logs in
Given I navigate to "apps.mypurecloud.com"
When I type "myuser" into "#email"
And I type "mypassword" into "#password"
And I click "#btn-login"
Then "available" is contained in the class of the element with selector "entity-mini-card-container"