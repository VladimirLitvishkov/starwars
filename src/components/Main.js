import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {Route, Switch} from "react-router-dom";
import luke from "../Images/main.jpg";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlInfo: 'https://swapi.dev/api/people/1/',
            hero: luke
        }
    }

    changeInfo = (url) => {
        this.setState({urlInfo: url});
    };

    changeHero = (hero) => {
        this.setState({hero: hero});
    };


    render() {
        const changeTitle = this.props.changeTitle;
        return (
            <Switch>
                <Route path={['/', '/home']} exact render={() => <Home hero={this.state.hero}
                                                                       name={this.props.name}//?
                                                                       changeTitle={changeTitle}
                                                                       changeInfo={this.changeInfo}
                                                                       changeHero={this.changeHero}/>}/>
                <Route path={['/about_me', '/about_me/:name']} exact render={(props) => <AboutMe match={props.match}
                                                                                           urlInfo={this.state.urlInfo}
                                                                                           changeTitle={changeTitle}
                                                                                           changeHero={this.changeHero}
                                                                                           name={this.props.name}/>}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/star_wars' exact component={StarWars}/>
                <Route render={() => <Home changeTitle={changeTitle}
                                           hero={this.state.hero}
                                           changeInfo={this.changeInfo}
                                           changeHero={this.changeHero}/>}/>
            </Switch>
        )
    }
}

export default Main;