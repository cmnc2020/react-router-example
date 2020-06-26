import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PageC extends Component {

    handleButtonClick = () => {
        this.props.history.push('/b')
    }

    render() {
        return (
            <div>
                <h1>Welcome Page-C!</h1>

                <ul>
                    <li>
                        <Link to="/path/1">1</Link>
                    </li>
                    <li>
                        <Link to="/path/2">2</Link>
                    </li>
                    <li>
                        <Link to="/path/3">3</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PageC;