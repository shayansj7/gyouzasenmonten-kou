import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import MenuCard from "./MenuCard";
import { Container, Row, Col } from "react-bootstrap";

export default function PopularMenu() {
    const [popularMenu, setPopularMenu] = useState([]);

    const router = useRouter();
    const isEnglish = router.pathname.startsWith('/en');

    {!isEnglish ?
        useEffect(() => {
            fetch('/menu.json')
                .then((res) => res.json())
                .then((data) => {
                    // Define specific items to display by their names (or other attributes)
                    const specificItems = ['プレミアム餃子 4個 （ニンニク あり・なし）', 'はたけの里芋餃子（6個）', 'ヘルシー大葉・大根 (2個ずつ)'];
                    const selectedItems = Object.values(data.menuItems)
                        .flat() // Flatten all categories into one array
                        .filter((item) => specificItems.includes(item.name)); // Filter by name
                    setPopularMenu(selectedItems);
                });
        }, [])
        :
        useEffect(() => {
            fetch('/menuen.json')
                .then((res) => res.json())
                .then((data) => {
                    // Define specific items to display by their names (or other attributes)
                    const specificItems = ['Premium Gyoza 4pcs (with or without garlic)', 'Hatake no Satoimo Gyoza(6pcs)', 'Healthy Oba・Daikon(2pcs each)'];
                    const selectedItems = Object.values(data.menuItems)
                        .flat() // Flatten all categories into one array
                        .filter((item) => specificItems.includes(item.name)); // Filter by name
                    setPopularMenu(selectedItems);
                });
        }, []);
    }

    return (
        <Container className="my-5">
            <h1>{isEnglish ? "Popular Menu" : "人気のメニュー"}</h1>
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