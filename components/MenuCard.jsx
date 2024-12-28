import { Card } from "react-bootstrap";

export default function MenuCard({item}) {
    return (
        <>
            <Card className="shadow-sm">
                {item.img && <Card.Img variant="top" src={item.img} />}
                {console.log(item)}
                <Card.Body>
                    <Card.Title>
                        <strong>{item.name}</strong>
                    </Card.Title>
                    {item.description && <Card.Text>{item.description}</Card.Text>}
                    {item.price && <Card.Text><strong>{item.price}</strong></Card.Text>}
                </Card.Body>
            </Card>
        </>
    )
}