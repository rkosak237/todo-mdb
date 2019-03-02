import React, { Component } from 'react';
import AddTask from './components/AddTask';
import './styles/styles.scss';
import List from './components/List';
import Button from './components/Button';
import TextMessage from './components/TextMessage';
import uuid4 from 'uuid/v4';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{id: 1, text:'Barnabus Stinson!'}, {id: 2, text: 'Buy travel & tour guide book'}, {id: 3, text: 'Be awesome'}, {id: 4, text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, { id: 5, text:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,'}],
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
            <div className="todo-app__btn-container">
              <Button
                text={'- Remove last task'}
                event={this.removeLast}
                />

              <Button
                text={'Clear all'}
                event={this.clearList}
                />
            </div>
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
