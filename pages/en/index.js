import { Container, Row, Col } from 'react-bootstrap';
import ControlledCarousel from '@/components/Carousels';
import { Details } from '@/components/Details';
import PopularMenu from '@/components/PopularMenu';

export default function Home() {
    return (
        <>
            <ControlledCarousel />
            <Container fluid className='index-container'>
                <Container className='my-4'>
                    <Row>
                        <Col>
                            <Details />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className='my-4'>
                <Row>
                    <Col>
                        <PopularMenu />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

