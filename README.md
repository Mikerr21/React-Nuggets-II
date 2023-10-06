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





