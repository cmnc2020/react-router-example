import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Child from './Child';

class PageX extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Route path="/:path/:id" children={<Child />} />
            </div>
        );
    }
}

export default PageX;