import { Container, Row, Col } from 'react-bootstrap';

export default function Location() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>住所</h1>
          <p>〒359-1111<br/>埼玉県所沢市緑町 1-17-5</p>
          <p>
            🚃新所沢駅から徒歩3分🚶‍♀️
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
            <h1>営業時間</h1>
            <h4>&#x3008;ランチ&#x3009;</h4>
            <p>11:00～14:00</p>
            <h4>&#x3008;ディナー&#x3009;</h4>
            <p>17:00～22:00</p>
            <br />
            <h1>定休日</h1>
            <p>火曜日、水曜日</p>
            <br />
            <h1>電話番号</h1>
            <p>04-2997-8118</p>
          </Col>
        </Row>

      </Row>
    </Container>
  );
}
