import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return( 
            <ul className="vertical" id="list">
                {this.props.todos.map( (todo, index) => {
                    return( <ListEntry 
                                key={index} 
                                todo={todo} 
                                index={index} 
                                deleteItem={this.props.deleteItem}  
                                selectItemToUpdate={this.props.selectItemToUpdate}
                            /> );
                    })
                }
            </ul>
        );
    }
}

export default List;