# IBACodingChallange

## IBA Coding Challange

### Project Implementation

In this "Pay" challenge we ask you to build an app for showing transactions "Project Implementation" for customer in list view and show it's details in other view. We'll give you some tips if needed, but the requirements and specification are quite open.
You can use your own data structure (demo array of transactions or indicator values etc), sample data for your implementation.

### My Solution (general)

I used React Navigation for navigating between screens(home and details screen); SearchBox component of react-native-elements for SearchBox; react-native-progress-circle for Indicators. In dummy data i seperated data by time durations and every time duration has its own color, percentage, label(which gives us the opportunity to map&use them in Progress.js in Components folder) and operations history which is also simplifies its usage and mapping process, and also helps us not to use another dummy data for user details. In Components folder I created List.js for showing all operations made recently(current week, last week and last month) and here is firstly shown user image, name and amount of payment which navigates to details screen when pressing it. Detail.js is for showing payment details(payment date, payment type and payment method).(all files in Components folder mainly aim prevent bolierplates, shorten and increase the readibility of codes);
Note: I didn't use general styles (color/height/width etc.) as I didn't have enough time for them and also for better UI.
