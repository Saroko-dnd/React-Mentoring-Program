import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class HelloWorldPureComponent extends React.PureComponent {
  render() {
    return <h1>Hello world! (PureComponent)</h1>;
  }
};

class HelloWorldComponent extends React.Component {
  render() {
    return <h1>Hello world! (Component)</h1>;
  }
};

const helloWorldElement = React.createElement('h1', null, 'Hello world! (Element)');

function HelloWorldFunctionalComponent(props) {
  return <h1>Hello world! (Functional component)</h1>;
}

ReactDOM.render(
  [helloWorldElement, <HelloWorldComponent/>, <HelloWorldPureComponent/>, <HelloWorldFunctionalComponent/>],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
