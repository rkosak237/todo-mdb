import * as React from "react";
import Button from './Button';

export default ({
    removeLastTask,
    clearList,
    disableBtns
}) => (
    <div className="btn-container">
        <Button
            text={'- Remove last task'}
            event={removeLastTask}
            disabled={disableBtns}
            aria={'Remove tasks'}
        />

        <Button
            text={'Clear all'}
            event={clearList}
            disabled={disableBtns}
            aria={'Clear all tasks'}
        />
    </div>
);