import { Card } from "react-bootstrap";

export default function MenuCard({item}) {
    return (
        <>
            <Card className="menu-card shadow-sm">
                {item.img ? <Card.Img variant="top" src={item.img} /> : <Card.Img variant="top" src='https://placehold.co/400x300?text=NO+IMAGE' />}
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