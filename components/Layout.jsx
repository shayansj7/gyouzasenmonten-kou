import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useScroll, useMotionValueEvent, color } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';


export default function Layout({ children }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  const navLinkClicked = () => {
    setIsExpanded(false);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
      console.log(hidden, scrollY);
    }
    else {
      setHidden(false);
    }
  })


  return (
    <>
      <Navbar expand="lg" sticky="top"
        className={`custom-navbar ${hidden ? "hidden" : ""}`}
        expanded={isExpanded} on onToggle={(expanded) => setIsExpanded(expanded)}
      >
        <Container>
          <div>
            <Navbar.Brand as={Link} href="/">
              <Image
                src={'/images/Logo.png'}
                width={120}
                height={120}
              />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='nav-menu'>
              <div className="d-flex align-items-center gap-3" id='btn-link'>
                <a href="https://gyouzakou.stores.jp/" target="_blank" rel="noopener noreferrer" onClick={navLinkClicked}>
                  <Button variant="danger">お取り寄せ</Button>
                </a>
                <a href="https://www.instagram.com/gyouza_kou0501/" target="_blank" rel="noopener noreferrer" onClick={navLinkClicked}>
                  <FaInstagram style={{ color: 'white', fontSize: '36px' }} />
                </a>
              </div>
              <Nav className="me-auto">
                <Nav.Link as={Link} href="/" onClick={navLinkClicked}>ホーム</Nav.Link>
                <Nav.Link as={Link} href="/menu" onClick={navLinkClicked}>メニュー</Nav.Link>
                <Nav.Link as={Link} href="/news" onClick={navLinkClicked}>活動内容</Nav.Link>
                <Nav.Link as={Link} href="/location" onClick={navLinkClicked}>ロケーション & 営業時間</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>{children}</main>

      <footer className="bg-dark text-light py-4 mt-auto">
        <Container className="text-center">
          <p className="mb-2">📞<a href="tel:+81-04-29978118" className="text-light">04-29978118</a></p>
          <p className="mb-0">
            <a href="https://www.instagram.com/gyouza_kou0501/" target="_blank" rel="noopener noreferrer" className="text-light">@gyouza_kou0501</a>
          </p>
        </Container>
      </footer>
    </>
  );
}
