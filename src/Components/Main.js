import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall'; 
import AddPhoto from './AddPhoto'; 
import {Route} from 'react-router-dom'; 
import Single from './Single.js'; 
import {Link} from 'react-router-dom' ; 

class Main extends Component {
    
    constructor() {
        super(); 
    }

    render() {
        return (
            <div>
                <h1>
                    <Link to="/"> Photowall </Link>
                </h1>
                <Route exact path="/" render={(params)=> (
                    <div>
                        <PhotoWall {...this.props } {...params}/>
                    </div>

                )} /> 
                    
                <Route path="/AddPhoto" render = {(params) => (
                    <AddPhoto {...this.props} {...params}/>
                )} />

                <Route path="/single/:id" render={(params) => (
                    <Single {...this.props} {...params} /> 
                )} /> 
               
            </div>
        )
    }
}

export default Main;