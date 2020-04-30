import React from "react";
import Navigation from "./Navigation";

class Header extends React.Component {
    render() {
        return (
            <header className="py-3 row align-items-center">
                <Navigation/>
                <h1 className="text-center py-4 col-6 offset-3">{this.props.title}</h1>
            </header>
        )
    }
}

export default Header;