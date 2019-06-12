import React from 'react';
import AddListEntry from './AddListEntry.jsx';
import List from './List.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : ['Travel to Asia', 'surfing in Australia', 'backpacking in London' ],
            isEditing: false,
            editTodo: ''
        }

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.selectItemToUpdate = this.selectItemToUpdate.bind(this);
    }

    addItem(item) {
        console.log('Attempting to add item', item);
        var currentTodos = [...this.state.todos];
        currentTodos.push(item);
        this.setState({ 
            todos : currentTodos
        })
    }

    deleteItem(index) {
        console.log('Attempting to delete');
        var currentTodos = [...this.state.todos];
        currentTodos.splice(index,1);
        this.setState({ 
            todos: currentTodos
        });
    }

    updateItem(item) {
        var currentTodos = [...this.state.todos];
        var findItemIndex = currentTodos.indexOf(this.state.editTodo);
        currentTodos.splice(findItemIndex, 1, item);
        this.setState({ editTodo: '', isEditing: false , todos: currentTodos});
    }

    selectItemToUpdate(item){
        console.log('Attempting to update');
        this.setState( { isEditing : true } );
        this.setState({ editTodo : item });
    }

    render() {
        return(
            <div id="mainApp" className="center vertical">
                <div className="title">Hello Where would you like to travel??</div>
                <AddListEntry 
                    key={this.state.editTodo} 
                    addItem={this.addItem} 
                    isEditing={this.state.isEditing} 
                    editTodo={this.state.editTodo} 
                    updateItem={this.updateItem} />
                <List 
                    todos={this.state.todos} 
                    deleteItem={this.deleteItem} 
                    selectItemToUpdate={this.selectItemToUpdate} />
            </div> 
        );
    }
}

export default App;