import { Card } from "react-bootstrap";

export default function DrinkCard({item}) {
    return (
        <>
            <Card className="drink-card shadow-sm">
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