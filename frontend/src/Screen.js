import React, { Component } from 'react';
import Data from './Data';
import Form from './Form';
import * as apiCalls from './api';

class Screen extends Component {
    
    constructor(props) {
        super(props);
        this.state = { screen: [], data: 'Initial' };
        this.addScreenData = this.addScreenData.bind(this);
    }
    
    componentWillMount(){
        this.loadScreenData();
    }
    
    async loadScreenData(){
        let screen = await apiCalls.getScreenData();
        this.setState({screen});
    }
    
    async loadScreenDataAgain(){
        let screen = await apiCalls.getScreenData();
        return screen;
    }
    
    async addScreenData(val) {
        let newScreenData = await apiCalls.createScreenData(val);
        this.setState({screen: [...this.state.screen, newScreenData]});
    }
    
    render() {
        var screenData = this.state.screen.map((t) => (
                <Data 
                key = {t._id}
                {...t}
                />
            )
        );
        return (
            <div>
                <div>
                    <h1>Screen Data</h1>
                    <Form addScreenData={this.addScreenData}/>
                    <ul>
                        {screenData}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Screen;