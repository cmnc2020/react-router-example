import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageA extends Component {

    render() {
        return (
            <div>
                <h1>Page-A</h1>
                <Link to="b">Page-B</Link>
            </div>
        );
    }
}

export default PageA;