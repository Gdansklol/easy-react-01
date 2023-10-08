# Fun fun React study :smiley:

@bluecrownLee :+1: This PR looks great - it's ready to merge! :shipit:

# <img src="https://github.com/Gdansklol/react-level-01/assets/56717993/a1c47e81-9bf9-411f-bd47-ac7197cc6977" width="200" height="400"/>

![react1](https://github.com/Gdansklol/react-level-01/assets/56717993/a1c47e81-9bf9-411f-bd47-ac7197cc6977)

## Install/Downloads node js

Link : (https://nodejs.org/en/download)

`test for nord version & npm version`

```bash

node -v

npm -v

```

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

## 01. Create React app & Install React

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

- <div id="root"></div>
- ex ) <div id="root"></div>

3. Let’s take a look at how components are structured in React.

4. started writing React as a function a few years ago.

5. Create a function, and the return value is the jsx value.

   _jsx : It is a grammar that extends JavaScript._

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

## # 05 - useState in form

> > changes with wrap <form></form>

ex) `code`

```bash
const onSubmit = (event) => {
    event.preventDefault();
    console.log(userName, passWord);
  };

```

> When the a tag or submit tag is clicked, it moves through the href or is executed by refreshing the window.

You can prevent this behavior through preventDefault.

Mainly used cases

1. When not moving to the href link even when the a tag is clicked

2. If you want to prevent a new execution even if you press the submit button in the form (submit works).

- A similar function is stopPropagation. This function prevents events from propagating to parent tags. \*

## _Question_

**It works well just by using the input and button tags.
Why bother wrapping it again with a form tag?**

**Answer>
There is no major difference, but the tag itself tells you that this part is a form, and there is also a small advantage of being able to submit when you press enter within the input.**

.....
(https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
