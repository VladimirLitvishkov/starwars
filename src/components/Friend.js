import React from "react";
import style from '../css_modules/friend.module.css';
import {heroInfo} from "../utils/Const";
import {Link} from "react-router-dom";


class Friend extends React.Component {

    changeHeroHandler = () => {
        let index = heroInfo.map(i => i.img).indexOf(this.props.friend);
        this.props.changeTitle(heroInfo[index].name);
        this.props.changeInfo(heroInfo[index].url);
        this.props.changeHero(this.props.friend);
        this.setState({friend: this.props.hero});

    };

    render() {
        let friend;
        switch (this.props.index) {
            case 7:
                friend = <img onClick={this.changeHeroHandler}
                              className={`col-4 p-1 ${style.bottomLeft}`}
                              src={this.props.friend} alt=''/>;
                break;
            case 9:
                friend = <img onClick={this.changeHeroHandler}
                              className={`col-4 p-1 ${style.bottomRight}`}
                              src={this.props.friend} alt=''/>;
                break;
            default:
                friend = <img onClick={this.changeHeroHandler}
                              className='col-4 p-1' src={this.props.friend} alt=''/>;
        }
        return <Link to={`/home/${(heroInfo[heroInfo.map(i => i.img).indexOf(this.props.friend)].name)}`}>{friend}</Link>;
    }
}

export default Friend;