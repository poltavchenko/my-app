import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }
  
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  IncrementNum = () => {
    if (this.state.counter < 50) {
      this.setState(state => ({
        counter: ++state.counter
      }))
    }
  }

  DecrementNum = () => {
    if (this.state.counter > -50) {
      this.setState(state => ({
        counter: --state.counter
      }))
    }
  }

  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  RNDNum = () => {
    this.setState(state => ({
      counter: Math.floor(Math.random() * 100) - 50
    }))
  }

  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
  ResetNum = () => {
    this.setState(state => ({
      counter: 0
    }))
  }

  render() {
    const {counter} = this.state;

    return (
      <div className="app-block">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={this.IncrementNum}>INC</button>
          <button onClick={this.DecrementNum}>DEC</button>
          <button onClick={this.RNDNum}>RND</button>
          <button onClick={this.ResetNum}>RESET</button>
        </div>
      </div>
    )
  }
}

export default CounterApp;

// 1) Начальное значение счетчика должно передаваться через props


