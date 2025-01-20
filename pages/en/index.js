import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import ControlledCarousel from "@/components/Carousels";
import { Details } from "@/components/Details";
import PopularMenu from "@/components/PopularMenu";
import News from "@/components/News";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gyoza Senmonten Kou</title>
        <meta
          name="description"
          content="餃（KOU）は、埼玉県所沢市の餃子専門店です。
                    餃子愛溢れるスタッフが、毎日の仕入れ、仕込みを行っています。是非ご賞味ください。
                    餃（KOU）の餃子はお持ち帰り・全国発送も承っています。
                    お土産にも最適です。"
        />
      </Head>
      <ControlledCarousel />
      <Container fluid className="index-container">
        <Container className="my-4">
          <Row>
            <Col>
              <Details />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="my-4">
        <Row>
          <Col>
            <PopularMenu />
          </Col>
        </Row>
      </Container>
      <Container className="my-4">
        <News />
      </Container>
    </>
  );
}
