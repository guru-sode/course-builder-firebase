import React, { Component } from 'react';

class ImageBody extends Component {
    render() { 
        return ( 
            <img src={require('/home/dell/mvp-course-builder/src/data/learning.jpg')} alt="learning"/>
        );
    }
}
 
export default ImageBody;