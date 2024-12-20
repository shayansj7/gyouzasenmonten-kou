import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Menu() {
    const [takeOutItems, setTakeOutItems] = useState();

    useEffect(() => {
        fetch('/takeOuten.json')
            .then((res) => res.json())
            .then((data) => {
                setTakeOutItems(data.takeOutItems);
            });
    }, []);

    if (!takeOutItems) return <p>Loading...</p>;

    return (
        <Container className="my-5">
            <h1>Take Out</h1>
            <h4>You can place your order in-store or by phone.</h4>
            <h5>Tel: 04-2997-8118</h5>
            {Object.entries(takeOutItems).map(([category, items]) => (
                <div key={category}>
                    <h2 className="mt-4"><strong>{category}</strong></h2>
                    <Row>
                        {items.map((item, index) => (
                            <Col sm={6} md={4} lg={3} className="mb-4" key={index}>
                                <Card className="shadow-sm">
                                    {item.img && <Card.Img variant="top" src={item.img} />}
                                    <Card.Body>
                                        <Card.Title>
                                            <strong>{item.name}</strong>
                                        </Card.Title>
                                        {item.description && <Card.Text>{item.description}</Card.Text>}
                                        {item.price && <Card.Text><strong>{item.price}</strong></Card.Text>}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </Container>
    );
}
