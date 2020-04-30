import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Luke Skywalker'
        }
    }

    changeTitle = (name) => {
        this.setState({title:name});
    };


    render() {
        return (
            <div className='container-fluid'>
                <Header title={this.state.title}/>
                <Main name={this.state.title}
                      changeTitle={this.changeTitle}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
