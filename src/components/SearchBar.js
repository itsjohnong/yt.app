import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    // This was refactored to make the code cleaner since it's short to the onChange handle
    //const onInputChange = event => {
        //setTerm(event.target.value);
    //};

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search For A Video</label>
                    <input 
                    type="text" 
                    value={term} 
                    onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
        );
};

export default SearchBar;