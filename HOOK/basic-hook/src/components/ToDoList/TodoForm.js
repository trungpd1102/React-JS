import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSumit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {

    const { onSubmit } = props;
    const [value, setValue] = useState('')

    function handleValueChange(event) {
        console.log(event.target.value);
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        // prevent reloading browser
        event.preventDefault(); 
        if (!onSubmit) return;

        const formValue = {
            title: value
        };

        onSubmit(formValue)

        // reset form value
        setValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    value={value}
                    onChange={handleValueChange}
                />
            </form>
        </div>
    );
}

export default TodoForm;