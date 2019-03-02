import React from 'react';
import SingleTask from './SingleTask';


export default ({
    tasks
}) => (
    <section>
        <ul>
            {
            tasks.map((item, index) =>
                <SingleTask
                index={index}
                item={item}/>)
            }
        </ul>
    </section>
);