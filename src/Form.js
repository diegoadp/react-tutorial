import React, { Component } from 'react';


class Form extends Component {
    initialState = {
        name: '',
        job: '',

    }
    
    state = this.initialState;
    
    handleChange = (event) => {
        const { name, value } = event.target; // Study - Destructuring assignment

        this.setState({
            [name]: value, //Study - Computed property names
        });
    }

    submitForm = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }



    render() {
        const { name, job } = this.state; // Study - Destructuring assignment

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <button value="Submit" onClick={this.submitForm}>Submit</button>
            </form>
        );
    }
}

export default Form