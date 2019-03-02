import * as React from "react";

const initialData = {
    btnClass: 'btn',
    text: 'Pass text to props',
    type: 'button'
}

export default ({
    styling = initialData.btnClass,
    text = initialData.text,
    type = initialData.type,
    event,
    form
}) => (
        <button
        type={type}
        onClick={event}
        className={styling}
        form={form}>
            {text}
        </button>
    );