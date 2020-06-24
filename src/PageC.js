import React, { Component } from 'react';

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