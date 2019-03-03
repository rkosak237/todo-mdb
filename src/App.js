import React, { Component } from 'react';
import './styles/styles.scss';
import uuid4 from 'uuid/v4';
//components
import TextMessage from './components/TextMessage';
import AddTask from './components/AddTask';
import BtnContainer from './components/BtnContainer';
import List from './components/List';
import Button from './components/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  addTask = (task) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: uuid4(),
          text: task
        }
      ]
    })
  }
  removeLast = () => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.slice(0, -1)
    })
  }

  clearList = () => {
    this.setState({
      tasks: []
    })
  }

  removeTask = (taskToRemove) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => {

        return taskToRemove !== task;
      })
    }))
  }


  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }


  render() {
    const { tasks } = this.state;
    return (
      <div className="todo-app">
        <article className="todo-app__container">
          <h1 className="todo-app__title">Hey, Good Evening!</h1>
            <TextMessage
            message={tasks}/>
          <section>
            <AddTask
              addTask={this.addTask}
              listOfTasks={tasks.length}
            />
            <BtnContainer
              removeLastTask={this.removeLast}
              clearList={this.clearList}
              disableBtns={tasks.length === 0 ? true : false}
            />
          </section>

          <List
            tasks={tasks}
            event={this.removeTask}
          />

          <Button
            styling={"btn btn--add"}
            form={'todo__form'}
            text={'+ Add task'}
            type={'submit'}
          />
        </article>
      </div>
    );
  }
}
