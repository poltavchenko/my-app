import { Component } from 'react';
import CounterApp from './components/counterApp/CounterApp';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }))
  }

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;

    const {position, years} = this.state;

    return (
      <div>
        <button onClick={this.nextYear} >{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
        <div>
          <a href={link}>My profile</a>
        </div>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Ivan" surname="Ivanov" link="vk.com"/>

      <CounterApp counter={12} />
    </div>
  );
}

export default App;
