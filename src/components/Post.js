import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import {connect, useDispatch} from "react-redux";

import {
    deletePost
} from "../redux/actions";

import { PencilSquare, Trash } from 'react-bootstrap-icons';

const Post = ({post, history} ) => {

    const dispatch = useDispatch()

    return (
        <CardDeck>
            <Card className="mb-2">
                <Card.Header as="h5">
                    <div className="d-flex justify-content-between align-items-center">
                        {post.title}
                       <div className="d-flex justify-content-between align-items-center">
                           <Button
                               variant="outline-warning"
                               onClick={() => dispatch(deletePost(post.id))}
                               className="mr-2"
                           >
                               <Trash color= "red"/>
                           </Button>
                           <Button
                               variant="outline-primary"
                               className="mr-2"
                               onClick={() => history.push(`/edit/${post.id}`)}
                           >
                               <PencilSquare color= "blue" />
                           </Button>
                       </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {post.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>

    )
}

const mapStateToProps = state => ({
    alert: state.appReducer
})

export default connect(mapStateToProps, null)(Post)