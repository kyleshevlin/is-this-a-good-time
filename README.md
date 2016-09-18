# Is This A Good Time?

A family member of mine with some mental health issues struggles to understand when an appropriate time to call me is. This app will give this family member the red light or green light for them.

## How it works

In the current implementation, I created a module called TimeEvaluation. In this module, I have written a number of functions that take the time and return a boolean whether it's a good time or not. Then there is final function which evaluates all the booleans and if they don't all return true, it's a bad time to call.

## How it might work in the future

I think a viable option in the future is to hook this into a Google calendar to determine whether it's a good time or not. It would be simple enough for a user to create a calendar for the app and have recurring events to block of set times to not call.

Because this is built with React, there is the option to try and make it work for mobile devices, too. It might be nice to have an override switch available for short term changes to one's schedule.
