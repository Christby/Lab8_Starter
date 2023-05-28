# Lab 8 - Starter

Q1: I will put the automated tests within a Github action that runs whenever code is pushed. The reason is that every code pushed to the repo should pass the test to prevent from causing errors in other functions in the future. Having an autamatic test makes sure that no changes that is not fully functional will be accidentally pushed to the repo to cause further problems.


Q2: No, using end-to-end tests is a waste of time to test if a specific function is working as expected, we can just use Unit tests in this case.

Q3: No, the message feature of a messaging application is a big part that involves many sections of functionalities that are working and interacting together, so using end-to-end test is better in this case.

Q4: Yes, the max character length feature is an independent function handeled by a small portion of code, so we can use Unit test to see if this single functinality works.