import { Container, Row, Col } from 'react-bootstrap';
import ControlledCarousel from '@/components/Carousels';
import { About } from '@/components/About';
import PopularMenu from '@/components/PopularMenu';
import News from '@/components/news';

export default function Home() {
  return (
    <>
      <ControlledCarousel />
      <Container fluid className='index-container'>
        <Container className='my-4'>
          <Row>
            <Col>
              <About />
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
      {/* <Container className='my-4'>
        <News />
      </Container> */}
    </>
  );
}

