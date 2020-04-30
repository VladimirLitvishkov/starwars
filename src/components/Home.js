import React from "react";
import Friend from "./Friend";
import style from "../css_modules/main.module.css";
import {heroInfo} from "../utils/Const";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opening_crawl: ''
        };
    }

    componentDidMount() {
        let text = sessionStorage.getItem('opening_crawl');
        if (text) {
            this.setState({opening_crawl: text});
        } else {
            let episode = Math.floor(Math.random() * 7) + 1;
            fetch(`https://swapi.dev/api/films/${episode}/`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        opening_crawl: data.opening_crawl
                    });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
    }

    render() {
        let friends = heroInfo.map((i) => i.img);
        let index = friends.indexOf(this.props.hero);
        friends.splice(index, 1);
        return (
            <main className="clearfix mt-1">
                <section className="mr-1 float-left w-25 row">
                    <img className="col-12" src={this.props.hero} alt="Luke Skywalker"/>
                </section>
                <section className="ml-1 float-right row w-50 border border-light rounded-bottom no-gutters">
                    <h2 className="col-12 text-center">Dream team</h2>
                    <div>
                        {friends.map(friend => <Friend index={friends.indexOf(friend) + 1}
                                                       key={friend}
                                                       friend={friend}
                                                       hero={this.props.hero}
                                                       changeInfo={this.props.changeInfo}
                                                       changeTitle={this.props.changeTitle}
                                                       changeHero={this.props.changeHero}/>)}
                    </div>
                </section>
                <p className={`${style.farGalaxy}`}>{this.state.opening_crawl}</p>
            </main>
        )
    }
}

export default Home;