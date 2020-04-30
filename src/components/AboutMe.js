import React from 'react';
import {periodWeek} from "../utils/Const";
import styles from "../css_modules/aboutMe.module.css";
import {heroInfo} from "../utils/Const";

class AboutMe extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            person: null
        }
    }

    request = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let person = {
                    "name": data.name,
                    "height": data.height,
                    "mass": data.mass,
                    "hair_color": data.hair_color,
                    "skin_color": data.skin_color,
                    "eye_color": data.eye_color,
                    "birth_year": data.birth_year,
                    "gender": data.gender
                };
                let hero = {
                    person: person,
                    time: Date.now()
                };
                this.setState({person: hero.person});
                localStorage.setItem('hero', JSON.stringify(hero));
            });
    };

    componentDidMount() {
        if (this.props.match.params.name) {
            let index = heroInfo.map((i) => i.name).indexOf(this.props.match.params.name);
            if (index >= 0){
                this.request(heroInfo[index].url);
                this.props.changeTitle(this.props.match.params.name);
                this.props.changeHero(heroInfo[index].img);
                return;
            }
        }
        let hero = JSON.parse(localStorage.getItem('hero'));
        if(hero == null || hero.person.name !== this.props.name || (Date.now() - hero.time) > periodWeek) {
            this.request(this.props.urlInfo);
        }else{
            this.setState({person: hero.person});
        }
    }

    componentWillUnmount() {
        console.log("Hero unmounted");
    }

    render() {
        return (
            <div>
                {(this.state.person) &&
                <div className={`farGalaxy ${styles.hero_box}`}>
                    <p><span className={styles.hero_titles}>name:</span> {this.state.person.name}</p>
                    <p><span className={styles.hero_titles}>height:</span> {this.state.person.height}</p>
                    <p><span className={styles.hero_titles}>birth year:</span> {this.state.person.birth_year}</p>
                    <p><span className={styles.hero_titles}>gender:</span> {this.state.person.gender}</p>
                    <p><span className={styles.hero_titles}>mass:</span> {this.state.person.mass}</p>
                    <p><span className={styles.hero_titles}>hair color:</span> {this.state.person.hair_color}</p>
                    <p><span className={styles.hero_titles}>skin color:</span> {this.state.person.skin_color}</p>
                    <p><span className={styles.hero_titles}>eye color:</span> {this.state.person.eye_color}</p>
                </div>
                }
            </div>
        )

    }
}

export default AboutMe;