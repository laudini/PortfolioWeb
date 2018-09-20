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
    }

    render() {
        return (
            <div className="main-container">
                <Header/>
                <Footer/>
            </div>
        )
    }

}

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                hi
            </div>
        )
    }

}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
    };

    render() {
        return (
            <HashRouter>
                <div className="header">
                    <div className="header-image"><span className="header-image-text">myWebsite</span></div>
                    <div className="header-menu">
                        <ul className="header-menu-list">
                            <li onClick={this.handleClick} className="header-menu-list-elements"><Link to="/">projects</Link></li>
                            <li className="header-menu-list-elements"><Link to="/workshop">workshop</Link></li>
                            <li className="header-menu-list-elements"><Link to="/user.info">user.info</Link></li>
                            <li className="header-menu-list-elements"><Link to="/contact">contact</Link></li>
                        </ul>
                    </div>
                    <Route exact path='/' component={Body}/>
                    <Route path='/workshop' component={Test}/>
                    <Route path='/user.info' component={UserInfo}/>
                    <Route path='/contact' component={Contact}/>
                </div>
            </HashRouter>
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
                <div className="separator">About me :)</div>
                <UserInfo/>
                <Contact/>
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
            infoMail : '',
            infoPhone : ''
        }
    }

    handleMailClick = () => {
        this.setState({
            mail: this.state.mail == 'contact-tile mail-clicked' ? 'contact-tile mail' : 'contact-tile mail-clicked',
            myMail: this.state.myMail == '' ? 'krzeminski.yt.kamil\n@gmail.com' : '',
            infoMail : this.state.infoMail == '' ? 'I did CTRL+C that for you' : ''
        });
    };

    handlePhoneClick = () => {
        this.setState({
            phone: this.state.phone == 'contact-tile phone-clicked' ? 'contact-tile phone' : 'contact-tile phone-clicked',
            myPhone: this.state.myPhone == '' ? '+48 531 190 637' : '',
            infoPhone: this.state.infoPhone == '' ? 'I did CTRL+C that for you' : ''
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
                    <div className="photo">Photo</div>
                    <div className="profile">Profile</div>
                </div>
                <div>
                    <div className="skills">Skills</div>
                </div>
                <div>
                    <div className="hobbies">Hobbies</div>
                </div>
            </div>
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