import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };   
    }

    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }

    


    render () {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                    <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo campsite={this.state.selectedCampsite} />
            </div>
        );
    }
}



//how to pass state data from component A to component B
//class ExampleParentComponent extends Component {
    //constructor(props) {
        //super(props);
        //this.state = {
            //number: 333
        //}
   // }
    //render() {
        //return <ExampleChildComponent number={this.state.number} greeting="Hello World" />
        //}
//}
//now create another class component to receive that data
//this is how you access the state data from the parent component {this.props.number}

//class ExampleChildComponent extends Component {
    //render() {
        //return <div>{this.props.number} {this.props.greeting}</div>
    //};
//}

//and add <ExampleParentComponent /> to the Directory class in the second return in the render method 
//ex:
//return (
    //<div className="container">
        //<div className="row">
            //{directory}
        //</div>
        //<ExampleParentComponent />
    //</div>
//);

export default Directory;