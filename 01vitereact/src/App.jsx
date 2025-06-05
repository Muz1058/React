function App() {

  const variable="i am variable"

  return (
     <>
    <h1>Conventions</h1>
    <ul>
      <li>Name of the return function must be Upper Case</li>
      <li>we can return only one tag(parent). To solve this issue we use an empty parent tag "" called Fragment </li>
      
    </ul>

    <h2>how to create react project</h2>
    <p>we can create react app using differnt methods</p>
    <ul>
      <li>"npx create-reate-app projectName"  heavy weigth,contain test file and dependencies</li>
      <li>"npm create vite@latest my-app"  light weight,dont contain test files and dependencies</li>
    </ul>
    <h2>Differnce</h2>
    <p>npx create-react-app add javaScript to the files via dependencies  "react-scripts": "5.0.1"</p>
    <p>npm create vite@latest add javaScript to the file via  script tag with src</p>
    <p>in "npm create vite@latest" it is essential tha the javaScript file extension will be .jsx</p>
    <h2>Variable in JSX</h2>
    <p>in react variable are inserted inside CURLY BRaces without "$" sign</p>
    <p>These varible are inserted as evalueated expression form mean only final outcome. You have to perform operation or condition before</p>
    <p>This is because react convert code to object and then renders it. as you can add mathematical expressions to objects so we ad evalueated final resultant variable</p>
    <p>{variable}</p>
    </>
  )
}

export default App
