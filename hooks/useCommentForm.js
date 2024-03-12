import React from 'react';

export function useCommentForm() {
    const [values, setValues] = React.useState({ name: '', email: '', body: '' });
    const onSubmit = (values) => {
        // Handle submission logic here, such as sending the new comment to an API
        console.log('New comment:', values);
        // Clear the form after submission
        setValues({ name: '', email: '', body: '' });
    };

    function handleChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(values);
    }

    return {
        values,
        handleChange,
        handleSubmit,
    };
}
