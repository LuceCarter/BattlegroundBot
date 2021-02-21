# Learning

The aim of this file is to provide a place to log what was learned each stream. This is my first chat bot in a language I haven't used in a while and a framework I've barely touched. Will be useful!

## Lessons

### 20th Feb 2021
1. With React, you have an index page that references a default App component. This is where you can add not only code but also a render section that allows you to add to the front end as well.
2. With tmi.js, you can create a client without the identity property object, this makes it anonymous which is easier for not needing to faff with oauth etc but means you can only be read-only.

### 21st Feb 2021
1. You can create a functional component in react by just doing export default function <name>(props){}
2. The props passed in is how you share data you then want to display
3. You can do const { property1, property2 } = props to get out the info you pass into props to be used in the component
4. useState is how you keep it functional. You can have a variable to hold the state and then a function to update that state. For example const [chatMessages, setChatMessages] = useState([]); which creates an empty array state for chatMessages and a function to update that array called setChatMessages
5. You then call that set function in the code whenever you want to update the value
6. You call the component by writing it as a tag in the html section, using attributes to pass in that state 