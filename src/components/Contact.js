import React from "react";
import '../css_modules/contacts.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: []
        };
    }

    componentDidMount() {
        let info = localStorage.getItem('dataPlanets');
        let url = 'https://swapi.dev/api/planets';
        const dateNow = new Date();
        if (info && dateNow < (new Date(info.expDate))) {
            this.setState({planets: JSON.parse(info.planets)});
        } else {
            (async () => {
                let planets = [];
                for await (const planet of fetchRequest(url)) {
                    planets.push(planet.name);
                }
                this.setState({planets: this.state.planets.concat(planets)});
                let date = new Date();
                date.setDate(date.getDate() + 30);
                localStorage.setItem('dataPlanets', JSON.stringify({
                    planets: this.state.planets,
                    expDate: date
                }))
            })();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Contact form");
                }}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label htmlFor="planet">Planet</label>
                    <select id="planet" name="planet">{
                        this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
                    }
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."/>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

async function* fetchRequest(url) {

    while (url) {
        const response = await fetch(url);
        const data = await response.json();
        url = data.next;
        let planets = data.results;

        for (let planet of planets) {
            yield planet;
        }
    }
}

export default Contact;