import React from 'react';

const ListEntry = (props) => {
    return (
        <li className="item">
            <span>{props.todo}</span>
            <div className="buttons">
                <button className="button" type="button" onClick={ () => {props.deleteItem(props.index)} }>Remove</button>
                <button className="button" type="button" onClick={ () => {props.selectItemToUpdate(props.todo)} }>Update</button>
            </div>
            
        </li>
    );
};

export default ListEntry;