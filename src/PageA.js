import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageA extends Component {

    handleButtonClick = () => {
        this.props.history.push('/b')
    }

    render() {
        return (
            <div>
                <h1>Page-A</h1>
                <Link to="b">Page-B</Link>
                <br />
                <button onClick={this.handleButtonClick}>
                    Page-B
                </button>
            </div>
        );
    }
}

export default PageA;