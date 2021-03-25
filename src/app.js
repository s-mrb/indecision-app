import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
class Page extends React.Component{

  render(){
    return(
      <div>
      <p>Header</p>
      <p>Footer</p>
      </div>
    )
  }

}

ReactDOM.render(
  <IndecisionApp options={["d", "ff"]} />,
  document.getElementById("app")
);





// console.log(option)