# Pinterest app

***TODO:***

**I leave a few points to keep in mind**

- Used inversify as dependency injection container
  
- Create a theme provider for styled component and save all font colors and utils for transform px in density screen
  
- For the management of the side effects that used redux sagas, also used the calls directly in the view so that both options of use are seen.
  
- I implemented a test for component type, pending pending for the other classes and components.
  
- The button component should ideally have types of styles for the button such as: primary, secondary ...
  
- I have made some calls using a data model directly and others that return an entity, I have done it like this so that both use cases are seen.
  
- For the issue of knowing when a saga is in progress, the ideal would be to create a saga middleware (safeSafa) that controls errors, shows an error alert where appropriate and records the status of the saga in a context, reducer. ..
  
- The discover price of a specific item I have created the metedo in the entity that returns the price with the currency (principle say, do not ask)
  
- I have created a Navigation Service through an interface to uncouple it from the specific library, it would be necessary to save its reference so that through the service locator we can use it
  
- Implementing react-native-config for manage environments and flavors
  
- Pending styling details like a dot carrousel... because its delay long time in all details
  
- Pending config prettier, eslint in detail


  *For an average project I understand that it is not necessary to assemble a type of complex architecture simply by structuring the components, application state and others, it could well simplify creating services for side effects and it would look simpler*

