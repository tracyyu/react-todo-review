import React from 'react';

class AddListEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : this.props.editTodo
        }

        this.handleInput = this.handleInput.bind(this);
        this.onSubmitChange = this.onSubmitChange.bind(this);
    }

    handleInput(e) {
        this.setState({
            text : e.target.value 
        });
    }

    onSubmitChange(e) {
        e.preventDefault();
        if(!this.props.isEditing) {
            this.props.addItem(this.state.text);
        } else {
            this.props.updateItem(this.state.text);
        }
    }

    render() {
        return(
            <form className="vertical" onSubmit={this.onSubmitChange}>
                <label>What to do???</label>
                <input type="text" onChange={this.handleInput} value={this.state.text} />
                <button>{this.props.isEditing ? 'Edit!!' : 'OKAY!!!'}</button>
            </form>
        );
    }
}

export default AddListEntry;