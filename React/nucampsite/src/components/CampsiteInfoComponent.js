import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {
  
    renderCampsite(campsite){
        
            if (campsite){
                return(
                    <div className= "col-md-5 m-1">
                        <Card>
                            <CardImg top src = {campsite.image} alt= {campsite.name} />
                            <CardBody>
                                <CardTitle>{campsite.name}</CardTitle>
                                <CardText>{campsite.description}</CardText>
                            </CardBody> 
                        </Card>
                    </div>
                )
                    
            }
            return <div />
    }
    
    render() {
        return (
            <div className = "col">
                {this.renderCampsite(this.props.campsite)};
            </div>
        )
    }
}

export default CampsiteInfo;