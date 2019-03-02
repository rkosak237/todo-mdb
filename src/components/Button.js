import * as React from "react";

const initialData = {
    btnClass: 'btn',
    text: 'Pass text to props',
    type: 'button'
}

export default ({
    classname = initialData.btnClass,
    text = initialData.text,
    type = initialData.type,
    event
}) => (
        <button type={type} onClick={event} className={classname}>
            {text}
        </button>
    );