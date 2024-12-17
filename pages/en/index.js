import { Container, Row, Col } from 'react-bootstrap';
import ControlledCarousel from '@/components/Carousels'

export default function Home() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <ControlledCarousel/>
          <h1>Welcome to Our Restaurant</h1>
          <p>
            Experience the finest cuisine in town with a tradition of excellence. 
            Since 1995, we've been serving delicious meals made with love and fresh ingredients.
          </p>
          <p>
            Come and enjoy a warm, inviting atmosphere with exceptional service!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

