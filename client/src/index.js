import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />, document.getElementById('root'));


root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


