import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuCard from '@/components/MenuCard';
import DrinkCard from '@/components/DrinkCard';

export default function Menu() {
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        fetch('/menuen.json')
            .then((res) => res.json())
            .then((data) => {
                setMenuItems(data.menuItems);
            });
    }, []);

    if (!menuItems) return <p>Loading...</p>;

    return (
        <Container className="my-5">
            <h1>Menu</h1>
            {Object.entries(menuItems).map(([category, items]) => (
                <div key={category}>
                    <h2 className="mt-4"><strong>{category}</strong></h2>
                    {typeof items === 'object' && !Array.isArray(items) ? (
                        Object.entries(items).map(([subCategory, subItems]) => (
                            <div key={subCategory}>
                                <h3 className="mt-3">{subCategory}</h3>
                                <Row>
                                    {subItems.map((item, index) => (
                                        <Col sm={6} md={4} lg={3} className="mb-4" key={index}>
                                            <DrinkCard item={item} />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ))
                    ) : (
                        <Row>
                            {items.map((item, index) => (
                                <Col sm={6} md={4} lg={3} className="mb-4" key={index}>
                                    <MenuCard item={item} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </div>
            ))}
        </Container>
    );
}
