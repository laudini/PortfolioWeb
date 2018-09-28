import React from 'react'
import ReactDOM from 'react-dom';
import Footer from './footer.jsx';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import styles from '../css/style.css';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container/>
        )
    }

}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.projectRef = React.createRef();
        this.userInfoRef = React.createRef();
        this.workshopRef = React.createRef();
        this.contactRef = React.createRef();
    }

    handleClick = (e) => {
        let node = ReactDOM.findDOMNode(this.projectRef.current);
        switch (e.currentTarget.id) {

            case "menuOptionOne":
                node = ReactDOM.findDOMNode(this.projectRef.current);
                node.scrollIntoView({behavior: "smooth"});
                break;

            case "menuOptionTwo" :
                node = ReactDOM.findDOMNode(this.workshopRef.current);
                node.scrollIntoView({behavior: "smooth"});
                break;

            case "menuOptionThree" :
                node = ReactDOM.findDOMNode(this.userInfoRef.current);
                node.scrollIntoView({behavior: "smooth"});
                break;

            case "menuOptionFour" :
                node = ReactDOM.findDOMNode(this.contactRef.current);
                node.scrollIntoView({behavior: "smooth"});
                break;
        }
    };

    render() {
        return (
            <div className="main-container">
                <Header handleClick={this.handleClick}/>
                <Body projectRef={this.projectRef} userInfoRef={this.userInfoRef} workshopRef={this.workshopRef}
                      contactRef={this.contactRef}/>
                <Footer/>
            </div>
        )
    }

}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="header-image"><span className="header-image-text">myWebsite</span></div>
                <div className="header-menu">
                    <ul className="header-menu-list">
                        <li onClick={this.props.handleClick} className="header-menu-list-elements"
                            id="menuOptionOne">home
                        </li>
                        <li onClick={this.props.handleClick} className="header-menu-list-elements"
                            id="menuOptionTwo">workshop
                        </li>
                        <li onClick={this.props.handleClick} className="header-menu-list-elements"
                            id="menuOptionThree">user.info
                        </li>
                        <li onClick={this.props.handleClick} className="header-menu-list-elements"
                            id="menuOptionFour">contact
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}


class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body">
                <div ref={this.props.projectRef} className="separator">Projects</div>
                <div className="projects">
                    <Project image="image1" title="Software House Idle"
                             description="Software House Idle/Clicker is my first adventure in coding with React, done as a final project of Javascript Bootcamp by Coders Lab. You have to earn money and hire better and better employees to make your company grow huge. Can you get to a famous Gaben?"
                             link="https://github.com/laudini/software-house-idle-game"/>
                    <Project image="image2" title="Minesweeper"
                             description="This is one of the project that I have done after finishing bootcamp. Here I practiced my logic thinking when coding the solving system for minesweeping. Feel free to check, test and comment."
                             link="https://laudini.github.io/minesweeper-lite/dist/"/>
                    <Project image="image3" title="Sudoku"
                             description="Another React project thanks to which I practiced Fetch. Getting an incompleted board and checking it , both using fetch."
                             link="https://laudini.github.io/sudoku-lite/dist/"/>
                    <Project image="image4" title="To do List"
                             description="This toDoList is an effect of our group effort as an optional project related to JavaScript course by Coders Lab , that all of us attended and completed."
                             link="https://laudini.github.io/ToDoList/"/>
                </div>
                <div ref={this.props.userInfoRef} className="separator">About me :)</div>
                <UserInfo/>
                <div className="workshop-section">
                    <div ref={this.props.workshopRef} className="separator">Workshop</div>
                    <Workshop/>
                </div>
                <div className="contact-section">
                    <div ref={this.props.contactRef} className="separator">Contact</div>
                    <Contact/>
                </div>
            </div>
        )
    }

}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: 'contact-tile mail',
            phone: 'contact-tile phone',
            myMail: '',
            myPhone: '',
            infoMail: '',
            infoPhone: ''
        }
    }

    handleMailClick = () => {
        this.setState({
            mail: this.state.mail == 'contact-tile mail-clicked' ? 'contact-tile mail' : 'contact-tile mail-clicked',
            myMail: this.state.myMail == '' ? 'krzeminski.yt.kamil\n@gmail.com' : '',
            infoMail: this.state.infoMail == '' ? 'Copied to Clipboard' : ''
        });
    };

    handlePhoneClick = () => {
        this.setState({
            phone: this.state.phone == 'contact-tile phone-clicked' ? 'contact-tile phone' : 'contact-tile phone-clicked',
            myPhone: this.state.myPhone == '' ? '+48 531 190 637' : '',
            infoPhone: this.state.infoPhone == '' ? 'Copied to Clipboard' : ''
        })
    };

    handleLinkedClick = () => {
        window.open("https://www.linkedin.com/in/krzeminskikamil/", '_blank');
    };

    handleFbClick = () => {
        window.open("https://www.facebook.com/krzeminskiikamil/", '_blank');
    };

    render() {
        return (
            <div className="contact-main">
                <CopyToClipboard text="krzeminski.yt.kamil@gmail.com">
                    <div onClick={this.handleMailClick} className={this.state.mail}>
                        <div>{this.state.myMail}</div>
                        <div className="tip">{this.state.infoMail}</div>
                    </div>
                </CopyToClipboard>
                <CopyToClipboard text="+48 531 190 637">
                    <div onClick={this.handlePhoneClick} className={this.state.phone}>
                        <div>{this.state.myPhone}</div>
                        <div className='tip'>{this.state.infoPhone}</div>
                    </div>
                </CopyToClipboard>
                <div onClick={this.handleLinkedClick} className="contact-tile linkedin">
                </div>
                <div onClick={this.handleFbClick} className="contact-tile facebook">
                </div>
            </div>
        )
    }

}

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-info-main">
                <div>
                    <div className="photo"></div>
                    <div className="profile">Hey! I am 26 yo right now and few months ago I began my journey with frontend programming using React framework. I finished 320 hours long bootcamp by Coders Lab and I am looking for my first job in IT as junior front-end developer. This is the first website I have created. You can find my non-commercial ( so far ) projects here, which I used to practice what I learned. Feel free to browse my github if you want to know more. Or.. just contact me using one of the tabs in Contact section.</div>
                </div>
                <div>
                    <div className="skills"></div>
                </div>
                <div>
                    <div className="hobbies"></div>
                </div>
            </div>
        )
    }

}

class Workshop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>WORKSZOP ANDRZEJU WEJT</div>
        )
    }

}

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="body-project">
                <div>
                    <div className="body-project-image">
                        <div className={this.props.image}></div>
                    </div>
                    <div className="body-project-text">
                        <div>{this.props.title}</div>
                        <div>{this.props.description}</div>
                        <div>{this.props.link}</div>
                    </div>
                </div>
                <hr className="project-hr"/>
            </section>
        )
    }

}


document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});