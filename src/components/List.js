import React from 'react';
import SingleTask from './SingleTask';


export default ({
    tasks,
    event
}) => (
    <ul className="todo-app__list">
        {
        tasks.map((item, index) =>
            <SingleTask
                index={index}
                key={item.id}
                item={item}
                removeItem={event}
            />)
        }
    </ul>
);