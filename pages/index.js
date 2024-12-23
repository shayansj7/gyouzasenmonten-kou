import { Container, Row, Col } from 'react-bootstrap';
import ControlledCarousel from '@/components/Carousels';
import { About } from '@/components/about';

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
      <Container fluid className='frozen-gyoza'>
        <Container className='my-4'>
        <Row>
          <Col>
          <h2 className='frozen-title'>&#x3008;冷凍餃子　かんたん調理法&#x3009;</h2>
          </Col>
        </Row>
        </Container>
      </Container>
    </>
  );
}

