import React from 'react';
import SingleTask from './SingleTask';


export default ({
    tasks,
    event
}) => (
    <ul
    className="todo-app__list"
    group="role"
    aria-labelledby="groupLabel">
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