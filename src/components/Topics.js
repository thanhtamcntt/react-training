import React from "react";
import dataTopics from './data/topics'
import { Card } from 'react-bootstrap';

class Topics extends React.Component {
    render( ) {
        return (
            <div>
                <h2>Topics</h2>
                {dataTopics.map((data, index) => {
                    return <Card key={data.id}>
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.desc}
                            </Card.Text>
                            <button className="btn btn-primary">
                                Download
                            </button>
                        </Card.Body>
                    </Card>
                })}
            </div>
        );
    }
}
export default Topics;