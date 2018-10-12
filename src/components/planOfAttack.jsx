import React, { Component } from 'react';
import CourseTitle from './courseTitle';
 
class PlanOfAttack extends Component {

    render() { 
        return (
            <div>
                <h3>Add Plan of attack</h3>
                <div className="container">
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <div className="form-group">
                            <label>Plan of attack:</label>
                            <textarea
                                type="plan"
                                className="form-control"
                                id="plan"
                                placeholder="Enter plan of attack"
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
 
export default PlanOfAttack;