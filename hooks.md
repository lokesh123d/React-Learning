what is hooks ===>
hooks are the function to use some react feature in functional components.

in other words , hooks are functions that make functional components work like a class component 


 1 -) use state 
 use state hook is a function to add state in functional component 
 what is state --->
 state is nothing but just values or variables of our component 


2 -) useEffect 
useEffect is used to perform  side effects on our component.
what is sideEffect --->
side effect are actions which are performed with the 'outside world'.
we perform a side effect when we need to reach outside of our react components to do something.

some common side effect's 
 fetching data from a api 
 updating a dom document & window
 timer function set Timeout and set Interval's

3 -) useContext 
useContext Hooks is used to manage global data in react application 
Global State 
Services
Themes 
User Setting 
 by using this hook we solve the porblem of props drilling and make data available in a globally 

4 -) useRef
useRef is allows us to access dom elements .
and for creating a mutable variables which will not re-render the component 
just like when we use a useState insted of useRef then whenever our variable value is chaged then the function component is re-render but with the useRef we can change the value of variable/state wihtout re -render 

5 -) useReducer
useReducer is used to manage state in our react application 
in other words , useReducer works like a state managment tool 
what is state managment 
state managment is used to manage all state of application in a simple  way 
and always use the useReducer hook when you have a lot of states and method to handle

this hook is used to manage complex states in react application 

6 -) useLayoutEffectHook 
useLayoutEffect works exactly the same as useEffect (also the same syntax)
but the diffrence is when it's run 
useEffect the run after when the dom printed on the browser 
useLayoutEffect runs before the Dom is printed on the browser 
height
width
anything related to layout 
it runs the synchronously 


7 -) useMemo Hook 
useMemo hook is used to apply memoization in react 
what is memoization ?
so memoization is a techinique for improving the perfomance of the code
and it is useful to avoid expensive calculation on every render when the returned value is not change

use memo is used to improve performance of our react application 
we can stop running unwanted functions on re-rendering 

we perform all side effect in useEffect hook 
all expensive functions,calculation in usememo hook 

8 -) useCallback Hook 
useCallback is used to return Memoize function 
it's also useful for preventing functions from begin re-created or re-rendering 

diffrence between callback and memo 
memo return the memoization value but the callback return the memoization function 





