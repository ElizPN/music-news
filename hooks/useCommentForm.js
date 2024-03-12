import React from 'react';
import { getPostsDataService } from '../services/postsDataService'; 

export function useCommentForm(postId) {
    const [values, setValues] = React.useState({ name: '', email: '', body: '' });
    const onSubmit = async (values) => {

        await getPostsDataService().postComment(postId, values);

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
