import React, { Component } from 'react';
import AddTask from './components/AddTask';
import './styles/styles.scss';
import List from './components/List';
import Button from './components/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['Barnabus Stinson!', 'Buy travel & tour guide book', 'Be awesome', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,'],
    }
  }

  addTask = (task) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        task
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

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }


  render() {
    const { tasks } = this.state;
    return (
      <div>
        <article>
          <h1>Hey, Good Evening!</h1>
          <section>
            <p>You have {tasks.length} tasks to complete</p>
            <AddTask
            addTask={this.addTask}/>
            <Button
              text={'- Remove last task'}
              event={this.removeLast}
              className={'btn'}/>

            <Button
              text={'Clear all'}
              event={this.clearList}
              className={'btn'} />
          </section>

          <List
          tasks={tasks}
          />

        </article>
      </div>
    );
  }
}
