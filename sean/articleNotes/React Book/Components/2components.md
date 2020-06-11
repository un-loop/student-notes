## Sean O'Dell 06/11/2020

focus on building timer app with multiple concurrent timers
?intro to async and sync?

**single responsibility principle - programming principle that states that:
`'A class should have only one reason to change'`
- Robert C. Martin
This means that each component of functionality should be responsible for one operation, and if another operation is required another component of functionality should be created.

### React construction data-flow
1. break app into components
2. build a static verson of app (just display)
3. determine what should be stateful (where is dynamic functionality?)
4. determine in which component each piece of state should live (fillowing single responsibility principle)
5. hard-code intitial state (dummy data)
6. add inverse data flow (create functionality for data to be passed back upwards)
7. add server communication (create pathway for real data and move away from dummy data)