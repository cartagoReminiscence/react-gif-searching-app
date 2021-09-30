import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('');

    const handleInpuntChange = (evento) => {
        setInputValue(evento.target.value)
    };

    const handleSubmit = (evento) => {
        //prevent refresh the page
        evento.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( catgs => [inputValue, ...catgs] );
        }
        setInputValue('');

        //console.log(evento.target);
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                value={ inputValue }
                onChange={ handleInpuntChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}