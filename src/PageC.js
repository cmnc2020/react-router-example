import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageC extends Component {

    handleButtonClick = () => {
        this.props.history.push('/b')
    }

    render() {
        return (
            <div>
                <h1>Welcome Page-C!</h1>
            </div>
        );
    }
}

export default PageC;