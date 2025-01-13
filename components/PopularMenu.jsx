import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import MenuCard from "./MenuCard";
import { Container, Row, Col } from "react-bootstrap";

export default function PopularMenu() {
    const [popularMenu, setPopularMenu] = useState([]);

    const router = useRouter();
    const isEnglish = router.pathname.startsWith('/en');

    useEffect(() => {
        const menuFile = isEnglish ? '/menuen.json' : '/menu.json';
        const specificItems = isEnglish 
            ? ['Premium Gyoza 4pcs (with or without garlic)', 'Hatake no Satoimo Gyoza(6pcs)', 'Healthy Oba・Daikon(2pcs each)']
            : ['プレミアム餃子 4個 （ニンニク あり・なし）', 'はたけの里芋餃子（6個）', 'ヘルシー大葉・大根 (2個ずつ)'];

        fetch(menuFile)
            .then((res) => res.json())
            .then((data) => {
                const selectedItems = Object.values(data.menuItems)
                    .flat()
                    .filter((item) => specificItems.includes(item.name));
                setPopularMenu(selectedItems);
            });
    }, [isEnglish]);

    return (
        <Container className="my-5 center-components">
            <h1>{isEnglish ? "Popular Menu" : "人気メニュー"}</h1>
            <Row>
                {popularMenu.map((item, index) => (
                    <Col sm={6} md={4} className="mb-4" key={index}>
                        <MenuCard item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}