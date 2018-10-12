import React, { Component } from 'react';

class AddDeliverables extends Component {
    render() { 
        return (
            <div>
                <h3>Add Deliverables</h3>
                <div className="container">
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <div className="form-group">
                            <label>Deliverables:</label>
                            <textarea
                                type="plan"
                                className="form-control"
                                id="plan"
                                placeholder="Enter deliverables"
                                name="plan"
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
 
export default AddDeliverables;