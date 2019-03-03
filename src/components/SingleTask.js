import React from 'react';

export default ({ item, index, removeItem }) => (
    <li
    className="todo-app__list-element"
    key={item.id}
    aria-label="single task">
        <p> {item.text} {`${index+1}#`}</p>
        <span
            onClick={(e) => {
                removeItem(item)
            }}
            className="list__element-close"
            role="img"
            aria-label="close">&#10060;
        </span>
    </li>
);