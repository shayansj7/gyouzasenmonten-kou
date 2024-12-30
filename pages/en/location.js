import { Container, Row, Col } from 'react-bootstrap';

export default function Location() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Address</h1>
          <p>
            1 Chome-17-5 Midoricho, Tokorozawa, Saitama 359-1111
          </p>
          <p>
            🚃3 minutes walking from Shintokorozawa Station🚶‍♀️
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d404.46831553925955!2d139.4534519!3d35.8061556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018dfe38edef911%3A0x51dd6f6f6d026d1c!2z6aSDIGtvdQ!5e0!3m2!1sen!2sca!4v1733526140744!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Col>
        <Row>
          <Col className='storeDetails'>
            <h1>Business hours</h1>
            <h4>&#x3008;Lunch&#x3009;</h4>
            <p>11:00～14:00</p>
            <h4>&#x3008;Dinner&#x3009;</h4>
            <p>17:00〜22:00</p>
            <br />
            <h1>Closed Day</h1>
            <p> Tuesday, Wednesday</p>
            <h1>Telephone Number</h1>
            <p>04-2997-8118</p>

          </Col>
        </Row>
      </Row>
    </Container>
  );
}
