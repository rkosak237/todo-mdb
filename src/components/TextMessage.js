import React from 'react';

const initialData = {
    default: `There are no tasks! Add something`,
}

const TextMessage = ({ tasks }) => (
    <p className="todo-app__text"> {tasks.length ?
    `You have ${tasks.length} tasks to complete`
    : initialData.default}
    </p>

);

export default TextMessage;