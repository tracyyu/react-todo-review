import React from 'react';
import List from './List.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first : '',
            last: '',
            actualFirstName : 'Tracy',
            actualLastName : 'Yu',
            show: false
        }
    }

    render() {
        return( 
            <div>
                <div>Hello from Component</div>
            </div> 
        );
    }
}

export default App;