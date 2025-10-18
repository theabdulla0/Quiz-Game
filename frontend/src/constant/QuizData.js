// quizData.js
export const quizData = {
  html: {
    basic: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML element is used for the largest heading?",
        options: ["<heading>", "<h1>", "<h6>", "<head>"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<title>", "<head>", "<header>"],
        correctAnswer: 1,
      },
      {
        question:
          "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>", "<br>", "<newline>"],
        correctAnswer: 2,
      },
      {
        question: "Which attribute specifies the URL of a link?",
        options: ["src", "link", "href", "url"],
        correctAnswer: 2,
      },
      {
        question:
          "Which HTML element is used to specify a footer for a document?",
        options: ["<bottom>", "<footer>", "<section>", "<foot>"],
        correctAnswer: 1,
      },
      {
        question: "How can you make a numbered list?",
        options: ["<ul>", "<ol>", "<dl>", "<list>"],
        correctAnswer: 1,
      },
      {
        question:
          "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "alt", "src", "longdesc"],
        correctAnswer: 1,
      },
      {
        question: "Which HTML element defines emphasized text?",
        options: ["<italic>", "<i>", "<em>", "<strong>"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
          "<a url='http://www.example.com'>Example</a>",
          "<a href='http://www.example.com'>Example</a>",
          "<a>http://www.example.com</a>",
          "<link>http://www.example.com</link>",
        ],
        correctAnswer: 1,
      },
    ],
    intermediate: [
      {
        question: "Which HTML5 element is used for navigation links?",
        options: ["<navigation>", "<nav>", "<navigate>", "<navbar>"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the <article> element in HTML5?",
        options: [
          "To define a news article only",
          "To define independent, self-contained content",
          "To define an article citation",
          "To define a magazine layout",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which input type is used for selecting a date in HTML5?",
        options: ["datetime", "date", "calendar", "datepicker"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the <aside> element?",
        options: [
          "To define content aside from the main content",
          "To create a sidebar only",
          "To align content to the side",
          "To create marginal notes",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which attribute is used to specify that an input field must be filled out?",
        options: ["validate", "required", "mandatory", "must"],
        correctAnswer: 1,
      },
      {
        question: "What does the <datalist> element do?",
        options: [
          "Creates a database list",
          "Provides a list of predefined options for input controls",
          "Lists data in a table",
          "Creates a date picker",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which HTML5 element is used to display a scalar measurement?",
        options: ["<gauge>", "<measure>", "<meter>", "<progress>"],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of the contenteditable attribute?",
        options: [
          "To make content downloadable",
          "To make content editable by the user",
          "To lock content from editing",
          "To make content copyable",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which element is used to define a description list?",
        options: ["<dl>", "<ol>", "<ul>", "<desc>"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the <figure> element?",
        options: [
          "To create geometric figures",
          "To specify self-contained content like illustrations",
          "To display mathematical figures",
          "To create figure numbers",
        ],
        correctAnswer: 1,
      },
    ],
    advanced: [
      {
        question: "What is the purpose of the data-* attribute in HTML5?",
        options: [
          "To store custom data private to the page or application",
          "To define data types",
          "To create databases",
          "To validate form data",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which API is used for drawing graphics in HTML5?",
        options: ["SVG", "Canvas", "WebGL", "Both Canvas and WebGL"],
        correctAnswer: 3,
      },
      {
        question: "What is the purpose of Web Workers in HTML5?",
        options: [
          "To create web animations",
          "To run scripts in background threads",
          "To manage website employees",
          "To work with web services",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is true about the <picture> element?",
        options: [
          "It's used only for displaying images",
          "It allows multiple source elements for responsive images",
          "It's deprecated in HTML5",
          "It only works with JPEG images",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "What is the purpose of the integrity attribute in script tags?",
        options: [
          "To check if the script is virus-free",
          "To enable Subresource Integrity checking",
          "To validate JavaScript syntax",
          "To ensure the script loads completely",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which element is used to define a template in HTML5?",
        options: ["<template>", "<temp>", "<pattern>", "<blueprint>"],
        correctAnswer: 0,
      },
      {
        question: "What does the crossorigin attribute do?",
        options: [
          "Prevents cross-site scripting",
          "Configures CORS requests for the element",
          "Blocks cross-origin requests",
          "Enables cross-browser compatibility",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the slot element in HTML?",
        options: [
          "To create time slots",
          "To define a placeholder in a web component",
          "To create form slots",
          "To manage memory slots",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a valid custom element name?",
        options: ["<custom>", "<my-element>", "<MyElement>", "<element1>"],
        correctAnswer: 1,
      },
      {
        question: "What is Shadow DOM used for?",
        options: [
          "Creating dark mode",
          "Encapsulating styles and markup in web components",
          "Creating shadow effects",
          "Hiding DOM elements",
        ],
        correctAnswer: 1,
      },
    ],
  },

  css: {
    basic: [
      {
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which property is used to change the background color?",
        options: ["bgcolor", "color", "background-color", "background"],
        correctAnswer: 2,
      },
      {
        question: "How do you select an element with id 'demo' in CSS?",
        options: ["*demo", "#demo", ".demo", "demo"],
        correctAnswer: 1,
      },
      {
        question: "How do you select elements with class name 'test'?",
        options: ["#test", ".test", "*test", "test"],
        correctAnswer: 1,
      },
      {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "text-style", "font-family", "font"],
        correctAnswer: 2,
      },
      {
        question: "How do you make text bold in CSS?",
        options: [
          "font-weight: bold",
          "text-weight: bold",
          "font: bold",
          "text-style: bold",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "foreground-color"],
        correctAnswer: 1,
      },
      {
        question: "How do you add a comment in CSS?",
        options: [
          "// this is a comment",
          "/* this is a comment */",
          "<!-- this is a comment -->",
          "# this is a comment",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which property controls the text size?",
        options: ["text-size", "font-style", "font-size", "text-style"],
        correctAnswer: 2,
      },
      {
        question:
          "How do you make a list that displays its items with squares?",
        options: [
          "list-type: square",
          "list-style-type: square",
          "list: square",
          "list-style: square",
        ],
        correctAnswer: 1,
      },
    ],
    intermediate: [
      {
        question: "What is the default value of the position property?",
        options: ["relative", "fixed", "absolute", "static"],
        correctAnswer: 3,
      },
      {
        question: "Which property is used to create space between elements?",
        options: ["spacing", "margin", "padding", "border"],
        correctAnswer: 1,
      },
      {
        question: "What is the difference between margin and padding?",
        options: [
          "No difference",
          "Margin is inside, padding is outside",
          "Margin is outside, padding is inside",
          "Margin is for text, padding is for images",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Which property is used to control the opacity of an element?",
        options: ["transparency", "opacity", "visible", "alpha"],
        correctAnswer: 1,
      },
      {
        question: "What does the z-index property do?",
        options: [
          "Sets the zoom level",
          "Sets the stack order of elements",
          "Sets the size of elements",
          "Sets the z-axis rotation",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which CSS property controls the text overflow?",
        options: ["text-overflow", "text-wrap", "overflow", "text-flow"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the box-sizing property?",
        options: [
          "To set the size of a box",
          "To define how width and height are calculated",
          "To create a box shadow",
          "To set the box shape",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which pseudo-class selects the first child of an element?",
        options: [":first", ":first-child", ":child(1)", ":first-element"],
        correctAnswer: 1,
      },
      {
        question: "What unit is relative to the font-size of the root element?",
        options: ["em", "rem", "px", "%"],
        correctAnswer: 1,
      },
      {
        question: "Which property is used for CSS transitions?",
        options: ["transform", "transition", "animation", "change"],
        correctAnswer: 1,
      },
    ],
    advanced: [
      {
        question: "What is CSS Grid's 'fr' unit?",
        options: [
          "Frame rate",
          "Fraction of available space",
          "Fixed ratio",
          "Font relative",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which property is used to create CSS custom properties (variables)?",
        options: ["var()", "--variable", "$variable", "@variable"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the :root pseudo-class?",
        options: [
          "To select the root folder",
          "To select the document's root element",
          "To select the first element",
          "To select parent elements",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which function is used for CSS calculations?",
        options: ["calc()", "math()", "compute()", "eval()"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'clamp()' function do in CSS?",
        options: [
          "Clamps elements together",
          "Sets a value between a minimum and maximum",
          "Creates a clamping animation",
          "Fixes element position",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a CSS containment value?",
        options: ["layout", "block", "inline", "fixed"],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of CSS @supports rule?",
        options: [
          "To provide browser support information",
          "To test if a browser supports a CSS feature",
          "To support older browsers",
          "To add support files",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which property is used for CSS Scroll Snap?",
        options: [
          "scroll-snap-type",
          "scroll-type",
          "snap-scroll",
          "scroll-behavior",
        ],
        correctAnswer: 0,
      },
      {
        question: "What does the aspect-ratio property do?",
        options: [
          "Sets the screen aspect ratio",
          "Sets the preferred aspect ratio for an element",
          "Changes image aspect ratio",
          "Defines viewport aspect ratio",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which value of will-change optimizes for transform animations?",
        options: ["transform", "auto", "animation", "optimize"],
        correctAnswer: 0,
      },
    ],
  },

  js: {
    basic: [
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Mozilla"],
        correctAnswer: 1,
      },
      {
        question:
          "Which symbol is used for single line comments in JavaScript?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: 0,
      },
      {
        question: "Which method is used to write HTML output in JavaScript?",
        options: [
          "document.write()",
          "console.log()",
          "window.write()",
          "print()",
        ],
        correctAnswer: 0,
      },
      {
        question: "How do you create a function in JavaScript?",
        options: [
          "function:myFunction()",
          "function myFunction()",
          "function = myFunction()",
          "create myFunction()",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you call a function named 'myFunction'?",
        options: [
          "call myFunction()",
          "call function myFunction()",
          "myFunction()",
          "execute myFunction()",
        ],
        correctAnswer: 2,
      },
      {
        question: "How do you write an IF statement in JavaScript?",
        options: ["if i = 5", "if (i == 5)", "if i == 5 then", "if i = 5 then"],
        correctAnswer: 1,
      },
      {
        question: "How does a FOR loop start?",
        options: [
          "for (i = 0; i <= 5)",
          "for i = 1 to 5",
          "for (i <= 5; i++)",
          "for (i = 0; i <= 5; i++)",
        ],
        correctAnswer: 3,
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "=", "-", "x"],
        correctAnswer: 1,
      },
      {
        question: "What will typeof 'John' return?",
        options: ["string", "String", "text", "name"],
        correctAnswer: 0,
      },
      {
        question:
          "Which method is used to round a number to the nearest integer?",
        options: ["Math.round()", "Math.rnd()", "round()", "Math.ceil()"],
        correctAnswer: 0,
      },
    ],
    intermediate: [
      {
        question: "What is closure in JavaScript?",
        options: [
          "A function that has access to outer function's variables",
          "A way to close browser window",
          "A method to end a loop",
          "A type of error",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the difference between '==' and '===' operators?",
        options: [
          "No difference",
          "=== compares only value, == compares value and type",
          "== compares only value, === compares value and type",
          "=== is faster than ==",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is hoisting in JavaScript?",
        options: [
          "Lifting heavy objects",
          "Moving declarations to the top of their scope",
          "Increasing performance",
          "Raising errors",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does 'this' keyword refer to?",
        options: [
          "The current function",
          "The global object always",
          "The object that owns the current code",
          "The previous object",
        ],
        correctAnswer: 2,
      },
      {
        question: "What is the purpose of the 'use strict' directive?",
        options: [
          "To enable strict mode for better error checking",
          "To make code run faster",
          "To enable all features",
          "To disable warnings",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which method is used to remove the last element from an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        correctAnswer: 0,
      },
      {
        question: "What is event bubbling?",
        options: [
          "Creating bubble animations",
          "Events propagating up through the DOM",
          "Events propagating down through the DOM",
          "Preventing event propagation",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does JSON.parse() do?",
        options: [
          "Converts JavaScript object to JSON string",
          "Converts JSON string to JavaScript object",
          "Parses HTML",
          "Validates JSON",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which array method creates a new array with filtered results?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        correctAnswer: 1,
      },
      {
        question: "What is the difference between let and const?",
        options: [
          "No difference",
          "let is block-scoped, const is function-scoped",
          "let can be reassigned, const cannot",
          "const can be reassigned, let cannot",
        ],
        correctAnswer: 2,
      },
    ],
    advanced: [
      {
        question: "What is the output of: console.log(typeof NaN)?",
        options: ["'NaN'", "'undefined'", "'number'", "'object'"],
        correctAnswer: 2,
      },
      {
        question: "What is a Promise in JavaScript?",
        options: [
          "A guarantee that code will work",
          "An object representing eventual completion of an async operation",
          "A commitment to write better code",
          "A type of function",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of async/await?",
        options: [
          "To make code run faster",
          "To write asynchronous code in a synchronous manner",
          "To create animations",
          "To delay code execution",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the Event Loop in JavaScript?",
        options: [
          "A way to create loops",
          "A mechanism that handles asynchronous callbacks",
          "A type of for loop",
          "An error handling mechanism",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of WeakMap in JavaScript?",
        options: [
          "To create maps with weak values",
          "To store key-value pairs where keys are objects and are weakly referenced",
          "To create small maps",
          "To reduce memory usage of all maps",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the Symbol primitive type represent?",
        options: [
          "Mathematical symbols",
          "A unique identifier",
          "Special characters",
          "Symbolic links",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the Proxy object used for?",
        options: [
          "To create proxy servers",
          "To intercept and customize operations on objects",
          "To create object copies",
          "To improve performance",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of generators in JavaScript?",
        options: [
          "To generate random numbers",
          "To create functions that can be paused and resumed",
          "To generate HTML",
          "To create arrays",
        ],
        correctAnswer: 1,
      },
      {
        question: "What will [1, 2, 3] + [4, 5, 6] return?",
        options: ["[1,2,3,4,5,6]", "'1,2,34,5,6'", "Error", "[5,7,9]"],
        correctAnswer: 1,
      },
      {
        question: "What is the temporal dead zone?",
        options: [
          "Memory that can't be accessed",
          "Time between entering scope and variable declaration",
          "Deleted variables",
          "Unreachable code",
        ],
        correctAnswer: 1,
      },
    ],
  },

  react: {
    basic: [
      {
        question: "What is React?",
        options: [
          "A JavaScript library for building user interfaces",
          "A database management system",
          "A CSS framework",
          "A testing library",
        ],
        correctAnswer: 0,
      },
      {
        question: "Who developed React?",
        options: ["Google", "Facebook", "Twitter", "Microsoft"],
        correctAnswer: 1,
      },
      {
        question: "What is JSX?",
        options: [
          "JavaScript XML",
          "JavaScript Extension",
          "Java Syntax Extension",
          "JavaScript Extra",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is a component in React?",
        options: [
          "A function that returns CSS",
          "A reusable piece of UI",
          "A database table",
          "A type of variable",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which method is used to render React elements into the DOM?",
        options: [
          "ReactDOM.render()",
          "React.render()",
          "render()",
          "document.render()",
        ],
        correctAnswer: 0,
      },
      {
        question: "What are props in React?",
        options: [
          "Properties passed to components",
          "Component styles",
          "State variables",
          "React methods",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is state in React?",
        options: [
          "The current URL",
          "Data that changes over time in a component",
          "Component properties",
          "CSS states",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you create a React component?",
        options: [
          "class MyComponent extends React.Component",
          "React.createComponent()",
          "new Component()",
          "component MyComponent",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the correct way to create a functional component?",
        options: [
          "function MyComponent() { return <div>Hello</div> }",
          "const MyComponent = <div>Hello</div>",
          "React.function(MyComponent)",
          "component function MyComponent()",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useProps", "useComponent"],
        correctAnswer: 1,
      },
    ],
    intermediate: [
      {
        question: "What is the purpose of useEffect hook?",
        options: [
          "To create effects",
          "To perform side effects in functional components",
          "To improve performance",
          "To add CSS effects",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the Virtual DOM?",
        options: [
          "A virtual browser",
          "A JavaScript representation of the real DOM",
          "A DOM simulator",
          "A testing environment",
        ],
        correctAnswer: 1,
      },
      {
        question: "What are React Hooks?",
        options: [
          "Functions that let you use state and other React features in functional components",
          "Ways to hook into browser events",
          "Component connectors",
          "React plugins",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of key prop in lists?",
        options: [
          "To unlock components",
          "To help React identify which items have changed",
          "To encrypt data",
          "To sort lists",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is prop drilling?",
        options: [
          "Making holes in props",
          "Passing props through multiple component levels",
          "Validating props",
          "Destructuring props",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does useContext hook do?",
        options: [
          "Creates context menus",
          "Consumes context values",
          "Provides context to children",
          "Manages component context",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of React.memo?",
        options: [
          "To memorize code",
          "To optimize functional components by memoizing",
          "To create memos",
          "To store data",
        ],
        correctAnswer: 1,
      },
      {
        question: "When should you use useCallback?",
        options: [
          "For all callbacks",
          "To memoize callback functions",
          "To call functions",
          "To create callbacks",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is lifting state up?",
        options: [
          "Increasing state values",
          "Moving state to a common ancestor component",
          "Removing state",
          "Optimizing state",
        ],
        correctAnswer: 1,
      },
      {
        question: "What are controlled components?",
        options: [
          "Components controlled by users",
          "Form elements whose values are controlled by React state",
          "Components with access control",
          "Parent-controlled components",
        ],
        correctAnswer: 1,
      },
    ],
    advanced: [
      {
        question: "What is the purpose of useMemo hook?",
        options: [
          "To create memos",
          "To memoize expensive computations",
          "To memorize user inputs",
          "To manage memory",
        ],
        correctAnswer: 1,
      },
      {
        question: "What are render props?",
        options: [
          "Props that render components",
          "A technique for sharing code using a prop whose value is a function",
          "Properties of render method",
          "Props passed during rendering",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is React Fiber?",
        options: [
          "A cable system",
          "The new reconciliation algorithm in React 16",
          "A state management library",
          "A bundling tool",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of Error Boundaries?",
        options: [
          "To prevent errors",
          "To catch JavaScript errors in component tree",
          "To boundary check arrays",
          "To limit component size",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is Concurrent Mode in React?",
        options: [
          "Running multiple React apps",
          "A set of features for handling asynchronous rendering",
          "Parallel processing",
          "Multi-threading support",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of useReducer?",
        options: [
          "To reduce bundle size",
          "To manage complex state logic",
          "To reduce renders",
          "To compress data",
        ],
        correctAnswer: 1,
      },
      {
        question: "What are Suspense and lazy used for?",
        options: [
          "Creating suspenseful UI",
          "Code splitting and lazy loading components",
          "Delaying execution",
          "Handling loading states only",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of forwardRef?",
        options: [
          "To move refs forward",
          "To pass refs through components to children",
          "To create refs",
          "To forward props",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is reconciliation in React?",
        options: [
          "Resolving conflicts",
          "The process of updating the DOM to match the virtual DOM",
          "Component communication",
          "State synchronization",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of React DevTools Profiler?",
        options: [
          "To profile users",
          "To measure performance of React applications",
          "To debug errors",
          "To profile component structure",
        ],
        correctAnswer: 1,
      },
    ],
  },

  node: {
    basic: [
      {
        question: "What is Node.js?",
        options: [
          "A JavaScript runtime built on Chrome's V8 engine",
          "A frontend framework",
          "A database",
          "A CSS preprocessor",
        ],
        correctAnswer: 0,
      },
      {
        question: "Who created Node.js?",
        options: [
          "Ryan Dahl",
          "Brendan Eich",
          "Douglas Crockford",
          "John Resig",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which module is used to create a web server in Node.js?",
        options: ["server", "http", "web", "express"],
        correctAnswer: 1,
      },
      {
        question: "What is npm?",
        options: [
          "Node Package Manager",
          "New Programming Method",
          "Node Project Manager",
          "Network Protocol Manager",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which command is used to initialize a new Node.js project?",
        options: ["node init", "npm init", "npm start", "node start"],
        correctAnswer: 1,
      },
      {
        question: "How do you import a module in Node.js?",
        options: [
          "import module",
          "require('module')",
          "include module",
          "using module",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is package.json?",
        options: [
          "A JSON database",
          "A file that contains project metadata and dependencies",
          "A package installer",
          "A JavaScript file",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which global object provides information about the current Node.js process?",
        options: ["global", "process", "node", "system"],
        correctAnswer: 1,
      },
      {
        question: "What does the fs module do?",
        options: [
          "Handles frontend styles",
          "Provides file system operations",
          "Manages functions",
          "Creates servers",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command runs a Node.js file?",
        options: [
          "run file.js",
          "node file.js",
          "npm file.js",
          "execute file.js",
        ],
        correctAnswer: 1,
      },
    ],
    intermediate: [
      {
        question: "What is the Event Loop in Node.js?",
        options: [
          "A loop that creates events",
          "A mechanism that handles asynchronous operations",
          "An error handling loop",
          "A server loop",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is middleware in Express.js?",
        options: [
          "Software in the middle",
          "Functions that execute during the request-response cycle",
          "Database connectors",
          "CSS processors",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the cluster module?",
        options: [
          "To group files",
          "To create child processes that share server ports",
          "To cluster data",
          "To manage databases",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the difference between readFile and readFileSync?",
        options: [
          "No difference",
          "readFile is asynchronous, readFileSync is synchronous",
          "readFileSync is faster",
          "readFile only reads text files",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a Buffer in Node.js?",
        options: [
          "A temporary storage",
          "A class for handling binary data",
          "A cache system",
          "A stream buffer",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of process.env?",
        options: [
          "To process environments",
          "To access environment variables",
          "To set up development environment",
          "To check Node environment",
        ],
        correctAnswer: 1,
      },
      {
        question: "What are Streams in Node.js?",
        options: [
          "Data flows",
          "Objects for handling reading/writing data piece by piece",
          "Video streams",
          "Array methods",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the crypto module?",
        options: [
          "To mine cryptocurrency",
          "To provide cryptographic functionality",
          "To encrypt files only",
          "To create secure servers",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is REPL in Node.js?",
        options: [
          "Repeat Loop",
          "Read Eval Print Loop",
          "Real-time Event Programming Language",
          "Request Event Process Loop",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of nodemon?",
        options: [
          "To monitor nodes",
          "To automatically restart Node.js application when file changes are detected",
          "To debug Node.js",
          "To manage Node versions",
        ],
        correctAnswer: 1,
      },
    ],
    advanced: [
      {
        question:
          "What is the difference between spawn and fork in child_process?",
        options: [
          "No difference",
          "spawn is for any command, fork is specifically for Node.js processes",
          "fork is faster",
          "spawn creates threads, fork creates processes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of Worker Threads in Node.js?",
        options: [
          "To create web workers",
          "To perform CPU-intensive operations in parallel",
          "To handle HTTP requests",
          "To manage background jobs",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is libuv?",
        options: [
          "A UV protection library",
          "The C library that provides Node.js with asynchronous I/O",
          "A Linux library",
          "A networking library",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the --inspect flag?",
        options: [
          "To inspect files",
          "To enable debugging with Chrome DevTools",
          "To inspect memory usage",
          "To check for errors",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is backpressure in Node.js streams?",
        options: [
          "Server pressure",
          "When data accumulates because consumer is slower than producer",
          "Memory pressure",
          "Network latency",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the N-API?",
        options: [
          "Node API",
          "API for building native addons",
          "Network API",
          "New API system",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of AsyncLocalStorage?",
        options: [
          "To store data locally",
          "To store data specific to async execution contexts",
          "To cache async operations",
          "To manage localStorage",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is V8 heap snapshot used for?",
        options: [
          "Taking screenshots",
          "Memory profiling and leak detection",
          "Backing up data",
          "Creating heap structures",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of domain module (deprecated)?",
        options: [
          "To manage domains",
          "To handle multiple errors from different async operations",
          "To create subdomains",
          "To manage DNS",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "What is the difference between setImmediate and process.nextTick?",
        options: [
          "No difference",
          "process.nextTick executes before I/O events, setImmediate after",
          "setImmediate is faster",
          "They run in parallel",
        ],
        correctAnswer: 1,
      },
    ],
  },

  mongodb: {
    basic: [
      {
        question: "What type of database is MongoDB?",
        options: ["SQL", "NoSQL", "Graph", "Key-Value"],
        correctAnswer: 1,
      },
      {
        question: "What format does MongoDB use to store data?",
        options: ["XML", "JSON/BSON", "CSV", "SQL"],
        correctAnswer: 1,
      },
      {
        question: "What is a collection in MongoDB?",
        options: [
          "A group of databases",
          "A group of documents",
          "A group of fields",
          "A group of indexes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a document in MongoDB?",
        options: [
          "A PDF file",
          "A record in a collection",
          "A text file",
          "A database schema",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which command is used to create a database in MongoDB?",
        options: [
          "CREATE DATABASE",
          "use database_name",
          "new database",
          "db.create()",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do you insert a document in MongoDB?",
        options: [
          "INSERT INTO",
          "db.collection.insertOne()",
          "ADD DOCUMENT",
          "db.add()",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the primary key in MongoDB?",
        options: ["id", "_id", "key", "primary"],
        correctAnswer: 1,
      },
      {
        question: "Which method is used to find documents in MongoDB?",
        options: ["SELECT", "find()", "search()", "get()"],
        correctAnswer: 1,
      },
      {
        question: "What does BSON stand for?",
        options: ["Binary JSON", "Better JSON", "Big JSON", "Browser JSON"],
        correctAnswer: 0,
      },
      {
        question: "Which command shows all databases?",
        options: [
          "show databases",
          "list databases",
          "get databases",
          "display databases",
        ],
        correctAnswer: 0,
      },
    ],
    intermediate: [
      {
        question: "What is an index in MongoDB?",
        options: [
          "A table of contents",
          "A data structure that improves query performance",
          "A unique identifier",
          "A collection reference",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is aggregation in MongoDB?",
        options: [
          "Combining databases",
          "Processing data records and returning computed results",
          "Adding documents",
          "Grouping collections",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of $match in aggregation?",
        options: [
          "To match patterns",
          "To filter documents",
          "To find duplicates",
          "To compare values",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a replica set?",
        options: [
          "Duplicate documents",
          "A group of MongoDB servers that maintain the same data",
          "Backup files",
          "Copy of a collection",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is sharding in MongoDB?",
        options: [
          "Breaking documents",
          "Distributing data across multiple machines",
          "Encrypting data",
          "Compressing data",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the $set operator do?",
        options: [
          "Creates a set",
          "Updates field values in documents",
          "Sets database",
          "Configures settings",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of MongoDB Atlas?",
        options: [
          "A map service",
          "A cloud database service",
          "A GUI tool",
          "A migration tool",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the difference between findOne() and find()?",
        options: [
          "No difference",
          "findOne returns first match, find returns cursor to all matches",
          "find is faster",
          "findOne searches all documents",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a capped collection?",
        options: [
          "A limited access collection",
          "A fixed-size collection that overwrites oldest documents",
          "A collection with a maximum number of fields",
          "An encrypted collection",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the $lookup operator do?",
        options: [
          "Searches for text",
          "Performs left outer join with another collection",
          "Looks up indexes",
          "Finds documents",
        ],
        correctAnswer: 1,
      },
    ],
    advanced: [
      {
        question: "What is the WiredTiger storage engine?",
        options: [
          "A wire protocol",
          "The default storage engine for MongoDB",
          "A backup system",
          "A network engine",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the oplog in MongoDB?",
        options: [
          "Operation log for replica sets",
          "Optimization log",
          "Open source log",
          "Optional logging",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is read concern in MongoDB?",
        options: [
          "Reading speed",
          "Level of isolation for read operations",
          "Read permissions",
          "Number of read operations",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is write concern?",
        options: [
          "Write speed",
          "Level of acknowledgment for write operations",
          "Write permissions",
          "Writing style",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of change streams?",
        options: [
          "To change data types",
          "To watch for changes in collections in real-time",
          "To modify streams",
          "To update schemas",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is MongoDB transactions isolation level?",
        options: [
          "Read Uncommitted",
          "Snapshot Isolation",
          "Serializable",
          "Read Committed",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the balancer in sharding?",
        options: [
          "To balance load",
          "To ensure even distribution of data across shards",
          "To balance indexes",
          "To manage connections",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a compound index?",
        options: [
          "Multiple single indexes",
          "An index on multiple fields",
          "A complex index",
          "An index of indexes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the maximum BSON document size?",
        options: ["4MB", "8MB", "16MB", "32MB"],
        correctAnswer: 2,
      },
      {
        question: "What is GridFS used for?",
        options: [
          "Creating grids",
          "Storing files larger than 16MB",
          "Grid computing",
          "Distributed processing",
        ],
        correctAnswer: 1,
      },
    ],
  },

  java: {
    basic: [
      {
        question: "What type of programming language is Java?",
        options: ["Object-oriented", "Functional", "Procedural", "Assembly"],
        correctAnswer: 0,
      },
      {
        question: "Who created Java?",
        options: [
          "Dennis Ritchie",
          "James Gosling",
          "Bjarne Stroustrup",
          "Guido van Rossum",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does JVM stand for?",
        options: [
          "Java Virtual Machine",
          "Java Version Manager",
          "Java Visual Model",
          "Java Vendor Machine",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which keyword is used to create a class in Java?",
        options: ["Class", "class", "create", "new"],
        correctAnswer: 1,
      },
      {
        question: "What is the entry point of a Java program?",
        options: [
          "start() method",
          "main() method",
          "run() method",
          "init() method",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of these is a valid Java data type?",
        options: ["integer", "int", "Int", "INTEGER"],
        correctAnswer: 1,
      },
      {
        question: "How do you create a single-line comment in Java?",
        options: ["#", "//", "/*", "--"],
        correctAnswer: 1,
      },
      {
        question: "Which keyword is used for inheritance in Java?",
        options: ["inherits", "extends", "implements", "super"],
        correctAnswer: 1,
      },
      {
        question: "What is the default value of a boolean variable?",
        options: ["true", "false", "null", "0"],
        correctAnswer: 1,
      },
      {
        question: "Which package is imported by default in Java?",
        options: ["java.util", "java.io", "java.lang", "java.awt"],
        correctAnswer: 2,
      },
    ],
    intermediate: [
      {
        question: "What is polymorphism in Java?",
        options: [
          "Multiple forms of a method",
          "Many classes",
          "Multiple inheritance",
          "Many objects",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the difference between == and .equals()?",
        options: [
          "No difference",
          "== compares references, .equals() compares values",
          ".equals() is faster",
          "== compares values, .equals() compares references",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is an abstract class?",
        options: [
          "A class that cannot be instantiated",
          "A hidden class",
          "An interface",
          "A final class",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is the purpose of the 'final' keyword?",
        options: [
          "To end a program",
          "To make a variable, method, or class unchangeable",
          "To finalize objects",
          "To complete initialization",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is method overloading?",
        options: [
          "Having too many methods",
          "Multiple methods with same name but different parameters",
          "Overwriting a method",
          "Method inheritance",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the difference between ArrayList and LinkedList?",
        options: [
          "No difference",
          "ArrayList uses dynamic array, LinkedList uses doubly linked list",
          "LinkedList is faster",
          "ArrayList can only store primitives",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a static method?",
        options: [
          "A method that doesn't change",
          "A method that belongs to the class rather than instance",
          "A constant method",
          "A private method",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is exception handling?",
        options: [
          "Ignoring errors",
          "Mechanism to handle runtime errors",
          "Debugging code",
          "Testing code",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the synchronized keyword?",
        options: [
          "To sync data",
          "To control access to shared resources in multithreading",
          "To synchronize time",
          "To match patterns",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is autoboxing in Java?",
        options: [
          "Automatic packaging",
          "Automatic conversion between primitives and wrapper classes",
          "Creating boxes",
          "Auto-generating classes",
        ],
        correctAnswer: 1,
      },
    ],
    advanced: [
      {
        question: "What is the Java Memory Model?",
        options: [
          "RAM usage",
          "Specification of how threads interact through memory",
          "Memory allocation",
          "Garbage collection",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is type erasure in Java generics?",
        options: [
          "Deleting types",
          "Removal of generic type information at runtime",
          "Type casting",
          "Type checking",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the happens-before relationship?",
        options: [
          "Event ordering",
          "Memory visibility guarantee between threads",
          "Method execution order",
          "Class loading order",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a volatile variable?",
        options: [
          "A variable that changes frequently",
          "A variable visible to all threads with latest value",
          "An unstable variable",
          "A temporary variable",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the Fork/Join framework?",
        options: [
          "Database operations",
          "Framework for parallel execution of recursive tasks",
          "Process management",
          "Thread joining",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a phantom reference?",
        options: [
          "A null reference",
          "Weakest reference type used for cleanup actions",
          "A ghost object",
          "An undefined reference",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "What is the difference between fail-fast and fail-safe iterators?",
        options: [
          "Speed difference",
          "Fail-fast throws exception on concurrent modification, fail-safe doesn't",
          "Fail-safe is slower",
          "No difference",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is CompletableFuture?",
        options: [
          "A completed task",
          "A Future that can be completed manually and supports callbacks",
          "A promise",
          "A thread pool",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of ThreadLocal?",
        options: [
          "Local threads",
          "Variables that are local to each thread",
          "Thread creation",
          "Thread management",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is JPMS (Java Platform Module System)?",
        options: [
          "Java Package Management System",
          "Module system introduced in Java 9",
          "Java Performance Monitoring System",
          "Java Project Management System",
        ],
        correctAnswer: 1,
      },
    ],
  },

  python: {
    basic: [
      {
        question: "Who created Python?",
        options: [
          "Guido van Rossum",
          "Dennis Ritchie",
          "Bjarne Stroustrup",
          "James Gosling",
        ],
        correctAnswer: 0,
      },
      {
        question: "What type of language is Python?",
        options: ["Compiled", "Interpreted", "Assembly", "Machine"],
        correctAnswer: 1,
      },
      {
        question: "How do you create a comment in Python?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: 2,
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        correctAnswer: 1,
      },
      {
        question: "How do you create a variable in Python?",
        options: ["var x = 5", "int x = 5", "x = 5", "declare x = 5"],
        correctAnswer: 2,
      },
      {
        question: "Which of these is a valid Python data type?",
        options: ["integer", "int", "Int", "INTEGER"],
        correctAnswer: 1,
      },
      {
        question: "What is the correct file extension for Python files?",
        options: [".python", ".py", ".pyt", ".pt"],
        correctAnswer: 1,
      },
      {
        question: "How do you create a list in Python?",
        options: [
          "list = (1, 2, 3)",
          "list = [1, 2, 3]",
          "list = {1, 2, 3}",
          "list = <1, 2, 3>",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which function is used to get user input in Python 3?",
        options: ["input()", "get()", "raw_input()", "scanf()"],
        correctAnswer: 0,
      },
      {
        question: "How do you start a for loop in Python?",
        options: [
          "for (i = 0; i < 5; i++)",
          "for i in range(5):",
          "foreach i in range(5)",
          "for i = 0 to 5",
        ],
        correctAnswer: 1,
      },
    ],
    intermediate: [
      {
        question: "What is a lambda function?",
        options: [
          "A named function",
          "An anonymous function",
          "A recursive function",
          "A generator function",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the difference between a tuple and a list?",
        options: [
          "No difference",
          "Tuples are immutable, lists are mutable",
          "Lists are faster",
          "Tuples can only store numbers",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is list comprehension?",
        options: [
          "Understanding lists",
          "A concise way to create lists",
          "List documentation",
          "List methods",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does the 'self' parameter represent?",
        options: [
          "The class itself",
          "The instance of the class",
          "A static variable",
          "The parent class",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a decorator in Python?",
        options: [
          "A design pattern",
          "A function that modifies another function",
          "A class attribute",
          "A variable decorator",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of __init__ method?",
        options: [
          "To initialize Python",
          "Constructor method for class initialization",
          "To start a program",
          "To import modules",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the difference between '==' and 'is'?",
        options: [
          "No difference",
          "'==' checks value equality, 'is' checks identity",
          "'is' is faster",
          "'==' checks identity, 'is' checks value",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a generator in Python?",
        options: [
          "A function that generates random numbers",
          "A function that yields values one at a time",
          "A class generator",
          "A code generator",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of *args and **kwargs?",
        options: [
          "Command line arguments",
          "Variable number of arguments and keyword arguments",
          "Default arguments",
          "Type arguments",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is duck typing in Python?",
        options: [
          "A type of error",
          "Type checking based on behavior rather than type",
          "Dynamic typing",
          "Type conversion",
        ],
        correctAnswer: 1,
      },
    ],
    advanced: [
      {
        question: "What is the GIL (Global Interpreter Lock)?",
        options: [
          "A security feature",
          "A mutex that prevents multiple threads from executing Python bytecode simultaneously",
          "A global variable",
          "An import lock",
        ],
        correctAnswer: 1,
      },
      {
        question: "What are metaclasses in Python?",
        options: [
          "Parent classes",
          "Classes whose instances are classes",
          "Abstract classes",
          "Meta tags for classes",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of __slots__?",
        options: [
          "To create slots",
          "To restrict instance attributes and save memory",
          "To define methods",
          "To manage time slots",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a context manager?",
        options: [
          "A project manager",
          "Object that defines methods for with statement",
          "Memory manager",
          "Process manager",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "What is the difference between @staticmethod and @classmethod?",
        options: [
          "No difference",
          "staticmethod doesn't receive implicit first argument, classmethod receives class",
          "classmethod is faster",
          "staticmethod is for classes only",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is memoization?",
        options: [
          "Memory management",
          "Caching function results",
          "Creating memos",
          "Memory allocation",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of asyncio?",
        options: [
          "Synchronous I/O",
          "Asynchronous I/O and concurrent programming",
          "File I/O",
          "Network I/O only",
        ],
        correctAnswer: 1,
      },
      {
        question: "What are descriptors in Python?",
        options: [
          "File descriptors",
          "Objects that define how attributes are accessed",
          "Function descriptions",
          "Variable descriptors",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the MRO (Method Resolution Order)?",
        options: [
          "Memory Read Order",
          "Order in which methods are inherited in multiple inheritance",
          "Method Return Order",
          "Module Resolution Order",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of weakref module?",
        options: [
          "Weak typing",
          "Creating weak references that don't prevent garbage collection",
          "Reference counting",
          "Weak encryption",
        ],
        correctAnswer: 1,
      },
    ],
  },
};
