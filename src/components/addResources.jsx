import React, { Component } from 'react';

class AddResources extends Component {
    render() {
        return (
            <div>
                <h3>Add Resources</h3>
                <div className="container">
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <div className="form-group">
                            <label>Enter the video link:</label>
                            <input
                                type="video"
                                className="form-control"
                                id="video"
                                placeholder="Enter URL for video"
                                name="video"
                            />
                        </div>
                        <button
                            type=""
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

export default AddResources;
