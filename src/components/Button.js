import * as React from "react";

const initialData = {
    btnClass: 'btn',
    text: 'Pass text to props',
    type: 'button',
    disabled: false,
}

export default ({
    styling = initialData.btnClass,
    text = initialData.text,
    type = initialData.type,
    event,
    form,
    disabled = initialData.disabled
}) => (
        <button
            type={type}
            onClick={event}
            className={styling}
            form={form}
            disabled={disabled}>
            {text}
        </button>
    );