# BIG IMPORTANT STARTUP NOTES!

### **Make sure to keep this updated!**

> "with great power, comes great responsibility." - Uncle Ben


Some basic Git commands to remember:
'''
git status
git add
git commit
'''

Here is a link to the [README.md file](https://github.com/DapDerDapy/startup/blob/main/README.md)

### Things I learned in this assignment ###

* How to use VS code and Github together to commit changes and make adjustments to my repositories.
* How to push and pull from VS Code.
* How to use different writing things in making Github docs.
* How to use Gitlens
* How to use Bash and the terminal

### HTML Notes ###
* Remember to eventually change the "deployFiles.sh" to something else later
* Use CodePen to test code in combination with CSS and JavaScript
* Make sure to use the live server extension to see what it looks like from my development enviornment

### CSS NOTES ###
* Make sure to think about the screen size of my startup, use "flex" and other things to make it more appealing
* Don't be afraid to add animations!
* Edit every single element, make everything intentional, and be specific

# Final Exam Study Guide

## Ports for Common Protocols

### HTTP (HyperText Transfer Protocol)
- **Port Number**: `80`
- **Usage**: Used for standard web traffic. When you access a website with `http://`, it uses this port by default.
- **Note**: Not secure, which means data is not encrypted.

### HTTPS (HyperText Transfer Protocol Secure)
- **Port Number**: `443`
- **Usage**: Used for secure web traffic. When you access a website with `https://`, it uses this port. 
- **Note**: Encrypts data to provide secure communication over the internet.

### SSH (Secure Shell)
- **Port Number**: `22`
- **Usage**: Used for securely accessing network services over an unsecured network.
- **Note**: Commonly used for secure file transfers, remote server login, and other secure network services.

## HTTP Status Codes

### 300 Range: Redirection
- **Meaning**: These codes indicate that further action needs to be taken by the user agent (browser) to fulfill the request.
- **Common Codes**:
  - `301 Moved Permanently`: The requested resource has been moved to a new URL permanently.
  - `302 Found`: The requested resource is temporarily located at a different URL.
  - `304 Not Modified`: Indicates that the resource has not been modified since the last request.

### 400 Range: Client Errors
- **Meaning**: These codes signify an error that the client made, like a bad request or a request for a resource that doesn't exist.
- **Common Codes**:
  - `400 Bad Request`: The server cannot process the request due to a client error.
  - `401 Unauthorized`: Authentication is required and has failed or has not been provided.
  - `404 Not Found`: The requested resource could not be found on the server.

### 500 Range: Server Errors
- **Meaning**: These codes indicate a problem on the server's side.
- **Common Codes**:
  - `500 Internal Server Error`: A generic error message when the server encounters an unexpected condition.
  - `503 Service Unavailable`: The server is currently unable to handle the request due to a temporary overload or maintenance.

## HTTP Header: Content-Type

### Overview
- The `Content-Type` header is used in HTTP requests and responses to define the media type of the body of the request or response.

### Functionality
- **Indicates Media Type**: It tells the client what the content type of the returned content actually is. This helps the browser (or other clients) to process and display the content correctly.
- **Examples**:
  - `text/html`: for HTML documents.
  - `application/json`: for JSON data.
  - `image/jpeg`: for JPEG images.
  - `text/css`: for CSS files.

### Importance
- **Ensures Correct Processing**: By specifying the content type, the server informs the client about how to interpret the data in the body of the message.
- **Facilitates Content Negotiation**: It plays a crucial role in content negotiation, where the client and server work out the best way to exchange data.

### Usage in Requests and Responses
- **In Requests**: When sending data to the server, like in a POST request, the client sets the `Content-Type` header to let the server know what type of data is being sent.
- **In Responses**: The server uses the `Content-Type` header in responses to inform the client about the type of data returned.

# Sample Code: Using Content-Type Header

## HTTP Request Example with Content-Type

In this example, a client is sending a POST request to a server with JSON data:

```javascript
fetch('https://example.com/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Web Wizard',
    topic: 'Web Development'
  })
});
```

Here is the repsonse body in a JSOn object with a message:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello, Web Wizard!' }));
});

server.listen(3000);
```

## Cookie Attributes

### Domain
- **Purpose**: Specifies the domain for which the cookie is valid. 
- **Usage**: Used by the browser to determine which domain the cookie should be sent to.
- **Example**: If a cookie is set with `domain=example.com`, it's available to both `example.com` and all its subdomains.

### Path
- **Purpose**: Defines the path within the domain for which the cookie is valid.
- **Usage**: The cookie will only be sent to the server when a request is made to a URL that matches this path.
- **Example**: A cookie with `path=/blog` will only be sent when accessing pages under `example.com/blog`.

### SameSite
- **Purpose**: Controls when cookies are sent with cross-site requests.
- **Options**:
  - `Lax`: Cookies are sent with top-level navigations and will be sent along with GET requests initiated by third party websites.
  - `Strict`: Cookies will only be sent in a first-party context and not be sent along with requests initiated by third party websites.
  - `None`: Cookies will be sent in all contexts, i.e., in responses to both first-party and cross-origin requests.

### HTTPOnly
- **Purpose**: Increases security by restricting access to the cookie from JavaScript.
- **Usage**: When set, the cookie can only be accessed by the server and not through client-side scripts.
- **Note**: This is an important attribute to prevent cross-site scripting (XSS) attacks, as it makes it difficult for an attacker to steal the cookie.

## Hypothetical Express Middleware Example

### Setup
Assuming we have an Express middleware setup like this:

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Requested URL:', req.url);
  next();
});

app.get('/foo/bar', (req, res) => {
  res.send('You reached /foo/bar');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

When a GET request is made to `/foo/bar`:

- The middware logs: `Requested URL: /foo/bar`
- Then, the request is handled by the route `app.get('/foo/bar', ...)`
- The reponse `You reached /foo/bar` is sent back to the clint.

## Setup
```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/foo/bar', (req, res) => {
  res.send('This route is not a static file');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
`public` is a directory that contains static files (like HTML, CSS, JS, images).

## Console Output for GET /foo/bar
In this case, when a GET request is made to `/foo/bar`:

- If there is a file at public/foo/bar (like public/foo/bar.html), it will be served automatically by express.static.
- If no such file exists, the request goes to the next middleware or route handler. In this case, it will be handled by app.get('/foo/bar', ...), and the response This route is not a static file will be sent.
- No additional console log is generated by express.static unless explicitly coded.

## Hypothetical Express Service Code

### Express Server Setup

```javascript
const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  res.json({ message: 'Hello, Web Wizard!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

- This server creates a route at /data that, when accessed, sends a JSON response with a message.

### JavaScript Fetch Request

```javscript
fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Expected Return from the Fetch Request

- The fetch request will receive the response from the Express server's /data route.
- The server responds with a JSON object: { message: 'Hello, Web Wizard!' }.
- The fetch then logs this data to the console, which would be:
`{ message: 'Hello, Web Wizard!' }`

## Hypothetical MongoDB Document Collection

### Sample Collection: `products`

```json
[
  { "name": "France Map", "cost": 8 },
  { "name": "Franklin Guide", "cost": 15 },
  { "name": "Franchise Kit", "cost": 20 },
  { "name": "Frame Set", "cost": 5 },
  { "name": "Frangipani Bouquet", "cost": 12 }
]
```

Given this query for MongoDB

```
{ cost: { $gt: 10 }, name: /fran.*/ }
```

This query's purpose
- select documents who's `cost` is greater than 10
- the `name` starts with 'fran' (case insensitive due to regular expression).

### Query Output
```json
[
  { "name": "Franklin Guide", "cost": 15 },
  { "name": "Franchise Kit", "cost": 20 },
  { "name": "Frangipani Bouquet", "cost": 12 }
]
```

Those 3 are the only ones who meet both the `name` and `cost` criteria

## Best Practices for Storing User Passwords in a Database

### Importance
- Storing passwords securely is crucial to protect user data from unauthorized access and breaches.

### 1. Use Hashing
- **Description**: Hashing is a one-way process that converts a password into another string of characters.
- **Best Practice**: Use a strong, cryptographic hashing algorithm like bcrypt, Argon2, or SHA-256.

### 2. Salt Your Hashes
- **Description**: A salt is a random value added to the password before hashing.
- **Purpose**: Prevents attackers from using pre-computed hash dictionaries (rainbow tables) to crack passwords.
- **Implementation**: Generate a unique salt for each password and store it alongside the hash.

### 3. Consider Adding Pepper
- **Description**: A pepper is like a salt but is applied to the password before hashing and is not stored with the hash.
- **Purpose**: Adds an additional layer of security.

### 4. Never Store Plain Text Passwords
- **Rationale**: Storing passwords in plain text is a significant security risk.
- **Implementation**: Always hash passwords before storing them.

### 5. Use Slow Hash Functions
- **Purpose**: Slows down brute-force attacks.
- **Example**: bcrypt, which includes cost factors to control the hash calculation time.

### 6. Implement Proper Security Measures
- **Include**: Secure SSL connections for transmitting passwords.
- **Avoid**: Security vulnerabilities such as SQL injection, which can expose hashed passwords.

### 7. Regularly Update Your Hashing Strategy
- **Why**: To keep up with advancements in hardware and password cracking techniques.
- **How**: Keep the hashing algorithm and security practices up-to-date.

### 8. Educate Users on Strong Passwords
- **Recommendation**: Encourage complex passwords that are difficult to guess or brute-force.

## Hypothetical Node.js WebSocket Service

### Node.js WebSocket Server Setup

```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('Received:', message);
  });

  ws.send('Hello from WebSocket server!');
});
```
When the client connects, it sends a greeting message "Hello from WebSocket Server!"
The server will listen for messages from client and logs it to the console

### Web Browser WebSocket Client

```javascript
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
  socket.send('Hello from the client!');
});

socket.addEventListener('message', function (event) {
  console.log('Message from server:', event.data);
});
```
this will send the message from the client saying "Hello from the Client"

* When the client connects to the WebSocket server, the server sends a message "Hello from WebSocket server!".
* This message triggers the client's 'message' event listener.
* Consequently, the following will be logged in the web browser's console:
`Message from server: Hello from WebSocket server!`

## WebSocket Protocol

### Overview
- The WebSocket protocol provides a persistent, full-duplex communication channel over a single TCP connection.
- It is a key technology in enabling interactive, real-time applications on the web.

### Key Features
- **Full-Duplex Communication**: Allows for simultaneous two-way communication between a client (like a web browser) and a server.
- **Persistent Connection**: Unlike HTTP, which is stateless, WebSocket provides a stateful connection, meaning the connection remains open until closed by either the client or server.
- **Low Latency**: WebSocket minimizes the overhead of data transfer, making it ideal for real-time applications.

### Common Uses
- **Real-Time Applications**: Such as chat applications, live sports updates, and collaborative editing tools.
- **Gaming**: Multiplayer online games benefit from the low-latency communication.
- **Financial Applications**: Used in trading platforms where real-time updates of stock prices are crucial.
- **Notifications and Alerts**: Instantly pushes updates from the server to the client, like social media notifications or system alerts.

### How It Works
- **Establishing Connection**: The client sends a WebSocket handshake request, and the server responds, establishing a WebSocket connection.
- **Data Transfer**: After the handshake, data can be sent back and forth between the client and server in real-time.
- **Closing the Connection**: Either the client or server can initiate a connection close.

### Advantages Over HTTP
- **Real-Time**: Provides real-time data transfer, whereas HTTP requires a new request for each response.
- **Reduced Overhead**: After the initial handshake, data frames have minimal headers, reducing the amount of redundant data sent compared to HTTP.

### Example
```javascript
const socket = new WebSocket('ws://example.com');

socket.onopen = function(event) {
  socket.send('Hello Server!');
};

socket.onmessage = function(event) {
  console.log('Message from server:', event.data);
};
```

## JSX (JavaScript XML)

### Overview
- JSX is a syntax extension for JavaScript, often used in React applications.
- It allows you to write HTML-like code in your JavaScript files.
- JSX is not native JavaScript and requires a compiler like Babel to convert it into plain JavaScript.

### Key Features
- **HTML in JavaScript**: Mixes HTML-like code with JavaScript, making it easier to create complex UIs.
- **Component Structure**: Each piece of the UI is often encapsulated in components, which can be written using JSX.
- **Declarative**: Clearly describes the UI layout, making the code more readable and maintainable.

### How JSX Works
- **Compilation**: JSX is transformed into JavaScript calls that create React elements. This transformation is typically done using Babel.
- **React Elements**: The JSX tags are compiled into `React.createElement()` calls, which return plain JavaScript objects representing the UI.

### Curly Braces in JSX
- **Expression Containers**: Curly braces `{}` in JSX are used to embed JavaScript expressions in the JSX markup.
- **Dynamic Content**: They allow you to include variables, functions, and other JavaScript expressions within your JSX.
- **Evaluation**: The JavaScript inside curly braces is evaluated, and the result is rendered as part of the JSX structure.

### Example

```jsx
const name = 'Web Wizard';
const greeting = <h1>Hello, {name}!</h1>;
```

- `{name}` is a javascript expression inside the JSX
- it will be evaluated and replacedx with the value of the `name` variable

## REACT problem: RENDERING
Assuming an HTML document with a

```html
<div id="root"></div>
```
element, what content will the following React component generate?

```jsx
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
```

### What the component generates
- The `App` component renders a `<div>` element containing three `Welcome` components
- Each `Welcome` component receives a different `name` prop and renders an `<h1>` element with a greeting

### resulting HTML content in `#root`

```html
<div>
  <h1>Hello, Sara</h1>
  <h1>Hello, Cahal</h1>
  <h1>Hello, Edite</h1>
</div>
```

* the `root` div in the original HTML document will contain this generated content
* each `Welcome` component instance creates an `<h1>` element for Sara, Cahal and Edite.

* Component Reusability: The Welcome component is reused with different props to create personalized greetings.
* Props: Props (props.name) are used to pass different names to each Welcome component instance.
* Rendering: The ReactDOM.createRoot and root.render methods mount the App component to the DOM, replacing the content inside the #root element with the rendered output.

## REACT problem: RENDERING NUMBERS

Assuming an HTML document with a 
```html
<div id="root"></div>
```
element, what content will the following React component generate?

```html
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
```

## What the component generates
- The `Numbers` component creates an unordered list (`<ul>`)
- it maps over the `numbers` array `[1,2,3,4,5]`, creating a list item (`<li>`) for each number

## Resulting HTML Content in `#root`

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```

- Array Mapping: The .map() method is used to iterate over the numbers array, returning a list item for each element.
- List Rendering: Each element in the array is represented as an individual list item (<li>), which is a common pattern for rendering lists in React.
- React Rendering: The ReactDOM.createRoot and root.render methods mount the Numbers component to the DOM, replacing the content inside the #root element with the rendered output.


## React component: EXAMPLE

### Component Overview
```javascript
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
- ** useState Hook **: the `useState` hook is used to declare a new state variable named `count`
- `count` is initialized with a value of 0
- `setcount` is the function provided by `useState` to update `count`.

- ** Rendering **: the component renders a `<div>` containing a `<p>` element and a `<button>`
- The `<p>` element displays the current value of `count`, indicating how many times the button has been clicked

- ** Button Interactivity **: The `<button>` element has an `onClick` event listener.
- When clicked, it executes the lambda function `() => setCount(count + 1)`. Which increments count by 1

## What happens you click the button?
- `setCount` updates the state of `count`.
- React will re render the `Example` component with the updated `count` value.
- The text inside `<p>` will get updated to reflect the number of clicks

## React Hooks

### Overview
- React Hooks are functions that let you “hook into” React state and lifecycle features from function components.
- They were introduced in React 16.8 to enable state and other React features in functional components.

### Purpose
- **Stateful Logic Reuse**: Hooks allow you to reuse stateful logic between components without changing the component hierarchy.
- **Function Components**: They enable function components to have features that were previously only available in class components (like state and lifecycle methods).

### Common Hooks
- **useState**: Adds local state to function components. Each call to `useState` creates a single piece of state associated with that component.

  ```javascript
  const [state, setState] = useState(initialState);
  ```

- **userEffect**: Used for side effects in function components. It's a replacement for lifecycle methods like `compononentDidMount`, `compononetDidUpdate`, and `componentWillUnmount` in class components

```javascript
userEffect(() => {
  // Effect logic or whatever
  return () => {
    // cleanup logic here!
  };
}, [dependencies]);
```

- **userContext**: Accepts a context object and returns the current context value, as given by the nearest context provider for the given context.

```javascript
const value = useContext(MyContext);
```
### Advantages
- **Simpler code**
- **Hooks composotion**: Custom hooks can be created, allowing for more code reuse and composition
- **Side Effects Management**: `useEffect` simplifies the handling of side effects.

### Example of useState and useEffect

```javascript
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## React Component: App with React Router

### Component Overview

```javascript
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

### Route stuff
- A **Route** is a component that renders the first `Route` that matches the location's pathname
- `Route path="/" element={<Layout />}` is the base Route, it will render the `layout` component when the URL matches the root path (`/`). This `Route` also serves as a parent for nested routes.
- `Route index element={<Home />}`: Renders the `Home` component on the Root path (`/`). It's equal to speicifying a route with `path="/"`.
- `Route path="blogs" element={<Blogs />}`: Renders the `Blogs` component when the URL matches `/blogs`.
- `Route path="contact" element={<Contact />}`: Renders the `Contact` component when the URL matches `/contact`
- `Route path="*" element={<NoPage />}`: A wildcard route that renders the `NoPage` component for any paths that don't match the above routes.

### Nested Routing Purpose
This setup provides a structured way to handle navigation and rendering of different components based on the URL path in a single-page application (SPA).
THe nested `Route` componenets under `<Layout />` allow for shared layout components while changing the content baswed on the route.

## Role of NPM in Web Development
### Overview
- **npm** is a package manager for JavaScript, commonly used with Node.js.
- It manages dependencies for an application and offers a large repository of JavaScript packages.

### Key Functions

#### 1. Package Management
- **Install Packages**: Allows developers to install third-party packages from the npm registry.
  ```shell
  npm install package_name
  ```
#### 2. Dependency Management
- **package.json**: Maintains a list of packages that a project depends on, allowing easy installation of all dependencies with `npm install`.
- **package-lock.json**: Locks the versions of installed packages to ensure consistency across enviornments.

#### 3. Run scripts and tasks

```json
"scripts": {
  "start": "node app.js",
  "test": "mocha"
}
```
- **Usage**: Run scripts using `npm run script_name`

### Simmered down version
- **simplifies development**
- **project consistency**
- **collabaroation**

## The Fetch Function in JavaScript

### Overview
- `fetch` is a native JavaScript function used to make network requests.
- It is part of the Web API provided by modern browsers.

### Functionality

#### Basic Usage
- **Syntax**:
  ```javascript
  fetch(url)
  ```
- **Returns**: A `Promise` that resolves to the `Response` object representing the response of the request..

#### Making the GET Requests
- used to retrieve data from a specified resource.

  ```javascript
  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
  ```
#### Handling Responses
- **Reposnse Methods**: Depending on the content type you can different methods like `repsonse.json()`, `response.text()`, `response.blob()`, etc.

#### Advanced Usage
- **Configuring Requests** You can pass an options object ot configure the request method, headers, body, etc.

```javascript
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
```

- A lot more simple than `XMLHttpRequest`
- Works well with modern JavaScript asynchronous programming patterns (promised based)

### Error Handling

Add a `catch` block to the promise chain

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Node.js: Overview and Capabilities

### What is Node.js?
- **Node.js** is an open-source, cross-platform JavaScript runtime environment.
- It allows developers to run JavaScript on the server side, outside a browser.

### Key Features

#### 1. JavaScript Everywhere
- **Unified Language**: Uses JavaScript for both client-side and server-side development, enabling a more streamlined development process.
- **NPM Ecosystem**: Access to a massive library of JavaScript modules through npm (Node Package Manager).

#### 2. Asynchronous and Event-Driven
- **Non-Blocking I/O**: Node.js uses non-blocking, event-driven architecture, making it efficient for building scalable network applications.
- **Handling Concurrent Requests**: Ideal for handling numerous simultaneous connections with high throughput.

#### 3. Built on V8 Engine
- **Performance**: Runs on Google Chrome's V8 JavaScript engine, which compiles JavaScript directly to native machine code for fast execution.

#### 4. Single-Threaded
- **Efficient Resource Utilization**: Uses a single thread with event looping. This is a departure from traditional models that use limited threads to handle requests.

#### 5. Versatile Use Cases
- **Web Application Development**: Suitable for building various web applications, from simple websites to complex APIs and microservices.
- **Real-Time Applications**: Excels in real-time applications like chat applications, online gaming, and collaboration tools.
- **Network Applications**: Ideal for developing server-side network applications, such as web servers, API backends, and more.

### Example Usage
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

## Vite: A Modern Front-End Build Tool

### What is Vite?
- **Vite** is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- It leverages modern JavaScript features and tools to improve performance and efficiency.

### Key Features

#### 1. Fast Development Start
- **Instant Server Start**: Utilizes native ES modules, allowing the server to start instantly.
- **Hot Module Replacement (HMR)**: Offers lightning-fast hot module replacement for a smoother development experience.

#### 2. Optimized Build Process
- **Pre-Bundling Dependencies**: Uses tools like esbuild to pre-bundle dependencies, significantly speeding up module loading during development.
- **Efficient Production Builds**: Leverages Rollup for optimized production builds, ensuring smaller and faster-loading bundles.

#### 3. Modern JavaScript Support
- **Native ESM**: Supports native ES Modules (ESM) out of the box.
- **Supports Latest JS Features**: Easily works with modern JavaScript features and frameworks.

#### 4. Plugin System
- **Extensible**: Comes with a rich plugin system, allowing developers to extend its capabilities or integrate with various frameworks and tools.

#### 5. Framework Agnostic
- **Versatile**: While particularly popular with Vue.js, it's designed to be framework-agnostic and can be used with React, Svelte, and others.

### Example Usage
```bash
# Install Vite
npm init vite@latest my-vite-project --template vue
cd my-vite-project
npm install
npm run dev
```
