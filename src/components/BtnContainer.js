import * as React from "react";
import Button from './Button';

export default ({
    removeLastTask,
    clearList,
    disableBtns
}) => (
    <section className="btn-container">
        <Button
            text={'- Remove last task'}
            event={removeLastTask}
            disabled={disableBtns}
        />

        <Button
            text={'Clear all'}
            event={clearList}
            disabled={disableBtns}
        />
    </section>
);