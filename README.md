# React-Nuggets-II
An insight about advanced techniques that developers encounter every day.

Let's have a quick look on state updates ( basics of react state management ) before we can go deep into redux toolkit.   
*You must be careful on how you update your state.
so we have [colors,setcolors] as a useState hook do not directly change it as : colors[0]='orange';setColors(colors); - Bad practise.
Always create a new const object and do what has to be done then pass it as a parameter inside the setState() method coming from the useState hook.
Adding elements: Use the spread operator to connect an object with an array -> const updatedArray=[...array,newArray];setState(updatedArray)   -> use slice method to add at a specific index.
Removing elements: use filter method -> const updatedArray=colors.filter((color,index))=>{return index === indexToRemove);
Changing elements:  const changeTitleById = (id, newTitle) => {const updatedBooks = books.map((book) => {if (book.id === id) {return { ...book, smthToChange: newChange };} return book;});

# Custom Hooks: Let's keep in mind that they contain some re-usable logic and re-use built-in hooks (e.g useState, useEffect)   
Brute force custom hook creation:    
1. Create a function and retrieve non-JSX expression that manage some kind of state and put them inside.   
2.Try to return the variables that you're going to need: return {count, handleClick};
3.In your component, call the function that you created: const {count, handleClick}= useSomething(aParameter)


# DATA PERSISTENCE WITH API REQUESTS:   
POST Request: After assigning to "response" variable the post request like the following : const response =async (title)=>{ await axios.post('http://localhost:3005',{title:title}) {*We can stock our title variable inside a useState hook [book,setBooks] *}  const updatedBooks=[...books,response.data] ; setBooks(updatedbooks); -> after creating a new variable called updatedBooks we stack that inside setBooks() useState hook.

FETCH Request: After creating the request inside an async variable, don't call it directly ! use it inside a useEffect hook so that it doesn't get re-run thousands of times! only depending on the second argument!
useEffect(()=>{fetchRequest();},[])    -> useEffect runs each time if 2nd argument changes over time        

# LET'S NOT FORGET ABOUT THE FAMOUS useEffect() HOOK:
A typical react developer will just put a function that updates itselfs depending on a variable  inside square brackets but the problem is that useEffect will keep running multiple times on that variable which won't be updated because inside the useEffect there will be multipl re-runders if the funtion uses useState() to update that variable, so to avoid that better go with the useCallBack() hook inside the useEffect which useEffect only re-runs if the useCallBack() function returns an original value. 
Also put in mind what you are only allowed to return inside the useEffect() Hook:   
You're not allowed to return a number/string/ or make the first parameter which is a function in async mode.    
You can only return a function inside the first parameter function.
