import React from 'react';
import SingleTask from './SingleTask';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
export default ({
    tasks,
    event
}) => (
    <ul
    className="todo-app__list"
    group="role"
    aria-labelledby="groupLabel">
    <TransitionGroup
    className="todo-app__list-container">
        {
            tasks.map((item, index) =>
            <CSSTransition
                key={item.id}
                timeout={500}
                classNames="fade"
              >

                    <SingleTask
                    index={index}
                    key={item.id}
                    item={item}
                    removeItem={event}
                />
            </CSSTransition>
        )}
    </TransitionGroup>
    </ul>
);