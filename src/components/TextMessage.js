import React from 'react';

const initialData = {
    default: `There are no tasks! Add something`,
}

const TextMessage = ({ message }) => (
    <p className="todo-app__text"> {message.length ?
        `You have ${message.length} tasks to complete`
    : initialData.default}
    </p>

);

export default TextMessage;