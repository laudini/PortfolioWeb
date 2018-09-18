import React from 'react'
import ReactDOM from 'react-dom';
import styles from '../css/style.css'


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
                <Body/>
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
                        <li className="header-menu-list-elements">projects</li>
                        <li className="header-menu-list-elements">workshop</li>
                        <li className="header-menu-list-elements">user.info</li>
                        <li className="header-menu-list-elements">contact</li>
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
                <Project image="image1" title="Software House Idle" description="Software House Idle/Clicker is my first adventure in coding with React, done as a final project of Javascript Bootcamp by Coders Lab. You have to earn money and hire better and better employees to make your company grow huge. Can you get to a famous Gaben?" link="https://github.com/laudini/software-house-idle-game"/>
                <Project image="image2" title="Minesweeper" description="This is one of the project that I have done after finishing bootcamp. Here I practiced my logic thinking when coding the solving system for minesweeping. Feel free to check, test and comment." link="https://laudini.github.io/minesweeper-lite/dist/"/>
                <Project image="image3" title="Sudoku" description="Another React project thanks to which I practiced Fetch. Getting an incompleted board and checking it , both using fetch." link="https://laudini.github.io/sudoku-lite/dist/"/>
                <Project image="image4" title="To do List" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem blanditiis enim perspiciatis quasi qui saepe
    sint sunt tempora temporibus, unde, vero! Corporis id labore optio quis reiciendis sint vero" link="https://laudini.github.io/ToDoList/"/>
            </div>
        )
    }

}

class Project extends React.Component {
        constructor (props) {
            super(props);
        }

        render() {
            return (
                <section className="body-project">
                    <div className="body-project-image">
                        <div className={this.props.image}></div>
                    </div>
                    <div className="body-project-text">
                        <div>{this.props.title}</div>
                        <div>{this.props.description}</div>
                        <div>{this.props.link}</div>
                    </div>
                </section>
            )
        }

    }

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>FOOTER</div>
        )
    }

}


document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});