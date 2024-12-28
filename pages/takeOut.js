import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuCard from '@/components/MenuCard';

export default function Menu() {
    const [takeOutItems, setTakeOutItems] = useState();

    useEffect(() => {
        fetch('/takeOut.json')
            .then((res) => res.json())
            .then((data) => {
                setTakeOutItems(data.takeOutItems);
            });
    }, []);

    if (!takeOutItems) return <p>ロード中...</p>;

    return (
        <Container className="my-5">
            <h1>テイクアウト</h1>
            <h4>店内と電話のどちらでも、ご注文いただけます。</h4>
            <h5>電話番号: 04-2997-8118</h5>
            {Object.entries(takeOutItems).map(([category, items]) => (
                <div key={category}>
                    <h2 className="mt-4"><strong>{category}</strong></h2>
                    <Row>
                        {items.map((item, index) => (
                            <Col sm={6} md={4} lg={3} className="mb-4" key={index}>
                                <MenuCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </Container>
    );
}
