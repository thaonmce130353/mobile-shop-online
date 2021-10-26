import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    onSubmit: PropTypes.func,
};

Search.defaultProps = {
    onSubmit: null
}

function Search(props) {

    const { onSubmit } = props;
    const [keyword, setKeyWord] = useState('');
    const typingTimeOutRef = useRef(null);

    return (
        <div className="search_box">
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={keyword}
                    onChange={handleKeywordChange}
                />
                <button type="submit" ></button>
            </form>
        </div>
    );

    function handleKeywordChange(e) {
        const value = e.target.value;
        setKeyWord(value);
        if (!onSubmit) return;
        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }
        typingTimeOutRef.current = setTimeout(() => {
            const formValues = {
                keyword: value,
            }
            onSubmit(formValues);
        }, 300);
    }
}

export default Search;