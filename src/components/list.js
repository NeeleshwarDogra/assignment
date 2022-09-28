import React, { useState, memo } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({ index, text }) => {

    const [isSelected, setIsSelected] = useState(true);

    const onClickHandler = () => {
        setIsSelected(!isSelected);}

    return (
        <li
            style={{ backgroundColor: isSelected ? "green" : "red" }}
            onClick={()=> onClickHandler()}
        >
            {text}
        </li>
    );
};

WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
    return (
        <ul style={{ textAlign: "left" }}>
            {items.map((item, index) => (
                <SingleListItem
                    key={index}
                    text={item.text}
                    index={index}
                />
            ))}
        </ul>
    );
};

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
        })  
    ),
};

WrappedListComponent.defaultProps = {
    items: null,
};

const List = memo(WrappedListComponent);

export default List;
