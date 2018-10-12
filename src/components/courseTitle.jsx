import React, { Component } from 'react';

class COurseTitle extends Component {

    addSubmit(event){
        event.preventDefault();
        const formElement = document.getElementById('addForm');
        const values = [];
        for (let i = 0; i < formElement.length; i++) {
            values.push(formElement[i].value);
        }
        const add = {
            name: values[0],
            description: values[1] 
        };
        console.log(add);
    }
    render() { 
        return ( 
            <div>
                <h3>Add Course</h3>
                <div className="container">
                    <form onSubmit={this.handleSubmit} id="addForm">
                        <div className="form-group">
                            <label>Title of the course:</label>
                            <input
                                type="title"
                                className="form-control"
                                id="title"
                                placeholder="Enter Title"
                                name="title"
                            />
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <textarea type="text area"
                                type="description"
                                className="form-control"
                                id="description"
                                placeholder="Enter Description"
                                name="description"
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
 
export default COurseTitle;