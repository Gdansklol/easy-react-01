# Fun fun  React study :smiley:

## Install/Downloads node js

Link : (https://nodejs.org/en/download)

`test for nord version  & npm version`

```bash

node -v

npm -v

```


##  01. Create React app & Install React
link : (https://react.dev/learn)

```bash
npx create-react-app . / or + [name of directory]

```
### Run react app

```bash
npm start
```

## 02. Introduction to folder structure & components
 1.  open src> index.js file

Delete files or statements that will not be used.

If I delete React's strict mode and just change the component name, it works.

If you want to get help from React’s strict mode, you can wrap your component in strict mode.

2. open puplc > index.html 
+ <div id="root"></div>
+ ex )  <div id="root"></div>

3. Let’s take a look at how components are structured in React.

4. started writing React as a function a few years ago.

5. Create a function, and the return value is the jsx value.

   *jsx : It is a grammar that extends JavaScript.*

6. Let's change the syntax of the App component.
Let's run it and see if it works properly.

 It reloads automatically and works well.

 # 03 - Event handling (onClick & onKeyUp)

 <p> An event is when something happens.

So, a representative example is when we click the button with the mouse, this also

It's an event.
</p>
 
 <p>
 So we added an event handler so that if we click the button

It's now the event handler that wants something to happen.

Now, let’s find out how to handle events in Direct through the example.
 </p>

1. First, open npm start , cserver local port 3000 in terminal or git bash.

Open material 3000 on the local host in a web browser.

And open App.js

2. I added a button with the text Submit like this.

So, if you look at this Frauji, the word Submit is written inside the button like this.

You can check what is written.

Then, let’s add a click event to this button.


`code`

```bash
import React from 'react';

function App() {
  return (
    <div> Frontend Developer Pippi 
      <button onClick={()=> alert('Hello user!')}>
        Submit
      </button>
    </div>
  );
}
export default App;

```

3. Submitted! I will put a message in the alert window.

So when you press the Submit button, this function will be executed.

```bash

import React from 'react';

function App() {

  const onSubmit = () => {
    alert("Good! submitted.! ")
  }
  return (
    <div> Frontend Developer Pippi 
      <br></br>
      <button onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}
export default App;

```

4. Let's take a look at other events besides the onClick event.
Another event This time, let's take a look at onKeyUp.

And let's put this function inside the event handler.

```bash
ex)
  const onKeyUpEnter = (event) => {
     if (event.keyCode === 13) {
       onSubmit();
     }
   }
 ```

```bash

import React from 'react';

function App() {

  const onSubmit = () => {
    alert("Good! Submitted. 😂")
  };

  const onKeyUpEnter = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  }


  return (
    <div>Frontend Developer Pippi 
      <br></br>
      <input onKeyUp={onKeyUpEnter}/>
      <button onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}
export default App;

```
5. Event functions should start with a lowercase letter and the next starting letter should be an uppercase letter. ex) onKeyUp

Then save it and write it in the input here.
In the developer inspector window, you will see console.log('key up') called Key Up.

This event occurs when a key on the keyboard is pressed and raised.
  So, when you press the keyboard and the keyboard goes down, it does not work, but when it goes down and then comes up, this event occurs. So, if you press and hold Enter, it stops, but if you press Enter here, it is an event that occurs when the key comes up.

() Let’s say there is no parameter, and the parameter is an event.
There is a variety of information contained in the event, and one of them is a key code. 13 is another number key for the Enter key.

It works with the event handler, but if you press a key other than 13 (Enter key),
Alert events will not work.


6. I'll save it and test it.

If you use the camal case for events used in java script, first lowercase letter and then uppercase letter.
It is available for use. 
 ** ex) onChange **


## 04 - React hook / useState 🤩

Link : (https://react.dev/learn/state-a-components-memory)










