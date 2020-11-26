import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import {connect, useDispatch} from "react-redux";

import {
    deletePost
} from "../redux/actions";

const Post = ({post}) => {
    const dispatch = useDispatch()

    return (
        <CardDeck>
            <Card className="mb-2">
                <Card.Header as="h5">
                    <div className="d-flex justify-content-between align-items-center">
                        {post.title}
                        <Button
                            variant="danger"
                            onClick={() => dispatch(deletePost(post.id))}
                        >
                            Удалить
                        </Button>
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
    alert: state.app.alert
})

export default connect(mapStateToProps, null)(Post)