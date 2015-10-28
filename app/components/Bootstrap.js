import React from 'react';

var tabs = [
    'Home', 'Profile', 'Messages', 'Settings'
];

class Bootstrap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <NewTab></NewTab>
        );
    }
}

class NewTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 'Home'
        }
    }
    _handleNavClick = (show) => {
        this.setState({
            show: show
        });
    }
    _getActiveClass = (tab) => {
        return this.state.show == tab ? 'active' : '';
    }
    render() {
        var tabNodes = tabs.map( (tab, index) => {
            return (
                <TabNav 
                    activeClass={this._getActiveClass(tab)} 
                    tab={tab} 
                    key={index} 
                    navClick={this._handleNavClick}
                ></TabNav>
            );
        } );
        var tabContents = tabs.map( (tab, index) => {
            var activeClass = this.state.show == tab ? 'active' : '';
            return (
                <TabContent 
                    activeClass={this._getActiveClass(tab)} 
                    tab={tab} 
                    key={index}
                ></TabContent>
            );
        } );
        return (
            <div>
                <ul className="nav nav-tabs">
                    {tabNodes}
                </ul>
                <div className="tab-content">
                    {tabContents}
                </div>
            </div>
        );
    }
}

class TabNav extends React.Component {
    constructor(props) {
        super(props);
    }
    _handleClick = (e) => {
        e.preventDefault();
        this.props.navClick( e.target.text );
    }
    render() {
        return (
            <li className={this.props.activeClass}>
                <a href="#" onClick={this._handleClick} ref="nav">{this.props.tab}</a>
            </li>
        );
    }
}

class TabContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var style = {
            backgroundColor: '#DDD',
            height: '100px',
            padding: '10px 20px'
        };
        return (
            <div style={style} className={"tab-pane " + this.props.activeClass} ref="content">
                {this.props.tab}
            </div>
        );
    }
}

export default Bootstrap;
