import React, { Component } from 'react';

class Duration extends Component {
    render() { 
        return (
            <div>
                <h3>Add Completion Duration</h3>
                <div className="container">
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <div className="form-group">
                            <label>Duration:</label>
                            <input
                                type="duration"
                                className="form-control"
                                id="duration"
                                placeholder="Enter duration"
                                name="duration"
                            />
                        </div>
                        <button
                            className="btn btn-success"
                            onClick={this.addSubmit}
                        >
          Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Duration;