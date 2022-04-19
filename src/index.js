import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


function Hello(props) {
  return <p className="aaa">Hello {20000 + Number(props.number)}</p>
}

const element = <Hello number="150" />

ReactDOM.createRoot(
  document.getElementById('root')
).render(element);

