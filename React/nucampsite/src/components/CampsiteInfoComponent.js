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

    renderComments(comments){
        let comment;
        if(comments){
            console.log('kevin comments',comments);
            comment = this.props.comments.map((comment) => {
                return (
                    <div>
                        {comment.text}
                    </div>
                )        
            })

            console.log("kevin comment", comment);
            return(
                <div className= "col-5-md m-1">
                    <h4>Comments</h4>
                    
                    {/* {this.comments.map(comment => {
                        return(
                            <div key={comment.id}>
                               { comment.text }
                               { comment.author }
                            </div>
                        )
                    })} */}
                    
                    {comments[0]}
                </div>
                // <div />
            )
        }

        return <div className= "col-5-md m-1">
                    <h2> No Comments</h2>
                </div> 

    }
    
    render() {
        return (
            <div className = "container">
                <div className = "row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite)}
                </div>
            </div>
        )
    }
}

export default CampsiteInfo;