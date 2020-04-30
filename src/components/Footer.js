import React from "react";
import style from '../css_modules/footer.module.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="row align-items-center">
                <div className="btn btn-danger col-2 offset-2 h-50 text-center my-1">
                    Send me an <span className={`${style.email} text-uppercase small`}>email</span>
                </div>
            </footer>
        )
    }
}

export default Footer;