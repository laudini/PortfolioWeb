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
                <div className="header-image"><span className="header-image-text">laudini projects</span></div>
                <div className="header-menu">
                    <ul className="header-menu-list">
                        <li className="header-menu-list-elements">home & projects</li>
                        <li className="header-menu-list-elements">current plans</li>
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
                <Project image="image1" title="Software House Idle" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem blanditiis enim perspiciatis quasi qui saepe
    sint sunt tempora temporibus, unde, vero! Corporis id labore optio quis reiciendis sint vero" link="https://laudini.github.com"/>
                <Project image="image2" title="Minesweeper" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem blanditiis enim perspiciatis quasi qui saepe
    sint sunt tempora temporibus, unde, vero! Corporis id labore optio quis reiciendis sint vero" link="https://laudini.github.com"/>
                <Project image="image3" title="Sudoku" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem blanditiis enim perspiciatis quasi qui saepe
    sint sunt tempora temporibus, unde, vero! Corporis id labore optio quis reiciendis sint vero" link="https://laudini.github.com"/>
                <Project image="image4" title="To do List" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem blanditiis enim perspiciatis quasi qui saepe
    sint sunt tempora temporibus, unde, vero! Corporis id labore optio quis reiciendis sint vero" link="https://laudini.github.com"/>
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
                        <div>{this.props.image}</div>
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