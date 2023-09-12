# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: sfs

1. What is the difference between a parameter and an argument?

Your answer: A parameter goes into the construction of a function, it will be called the argument when the function is invoked.

Researched answer: A parameter is a variable or placeholder in the function or method you define. Parameters are a part of the method or function's "signature" and and are placed in parenthesis after the method or function name.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: It takes three predifine parameters. They are currentValue, Index, and array in that order. currentValue is required, and the other two are otional, but because they have an order, if you want to use array, you have to also have Index. 

Researched answer: The callback function is required as is the currentValue. The callback function is something that you define and is the most important parameter. The currentValue represents the current element being processed from the array. The callback function must accept this parameter because it is the value you will be working with. 

3. What is the difference between map and filter?

Your answer: They are both high order functions, but map iterates through the array and creates a new array of the same length while filter creates a subset of the original array.

Researched answer:They are both high-order array methods, but serve different functions. The map method is used to transform each element of an array into a new value and create a new array of the same length. It applies the callback function to each element of the array and creates a new array with the results of the function calls.

4. What is iteration?

Your answer: Iteration is repeating a process or function until a specific condition is met.

Researched answer: Iteration is the process of repeatedly executing a set of instructions or operations a specified number of times or until a particular condition is met.There are two primary types of iteration--definite iteration and indefinite iteration. Definite iteration is used when you know in advance how many times you want to repeat a set of instructions, while indefinite itteration repeats a set of instructions as long as a specified condition is true.

5. What is the difference between a function and a method?

Your answer:A function is a set of instructions in code to do a task. Methods are the means inside of the function that you get the function to do the task.

Researched answer: Both functions and methods are used to define blocks of reusable code that performs specific tasks, but they do have key differences. Functions are indepentent blocks of code that can be defined and called anywhere within a program. Methods are functions that are associated with objects or classes. They are defined within the scope of an object or class and are meant to operate on that specific object's data. Methods are typically called on an object or class instance using dot notation. They often work with the object's properties and perform actions related to that object's context.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I am not sure.

Researched answer: Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use a variable or call a function before it's actually declared in your code, and JavaScript will not produce an error. However, it's important to note that only the declarations are hoisted, not the initializations. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Spread operator: The spread operator ("...") is a feature that lets you expand something that is iterabble into individual elements. It can be used in many contexts like, expanding arrays, copying arrays, spreading string characters, and expanding function arguments.

2. React state: In React, state refers to an object that represents the data or information about a component. Each component in a React application can have its own state, which determines how it behaves and how it responds to user interactions. State is a fundamental concept in React and is used to manage and store data that can change over time.

3. DOM events: DOM is short for Documented Object Model events. And they are interations or occurances that happen in a web page when a user interacts with is or when certain conditions are met.These events allow for the creation of interactive and responsive web apps. DOM events are triggered by the action of a user like clicking a button or moving the mouse.
