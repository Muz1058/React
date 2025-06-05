import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from 'react';

import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:"Click to visit google"
// }

// const anotherElement=(
//   <a href="https://google.com" target="_blank">Visit Google by anotherElement</a>
// )

// eslint-disable-next-line no-undef
const ReactElement= React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Visit Google by reactElement'

)

// createRoot(document.getElementById("root")).render(

//     ReactElement

// );
createRoot(document.getElementById("root")).render(

    App()

);

