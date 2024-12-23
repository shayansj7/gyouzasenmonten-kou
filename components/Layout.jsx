import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

export default function Layout({ children }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const router = useRouter();
  const isEnglish = router.pathname.startsWith('/en');

  const navLinkClicked = () => {
    setIsExpanded(false);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    }
    else {
      setHidden(false);
    }
  });

  return (
    <>
      <Navbar expand="lg" sticky="top"
        className={`custom-navbar ${hidden ? "hidden" : ""}`}
        expanded={isExpanded} onToggle={(expanded) => setIsExpanded(expanded)}
      >
        <Container>
          <div>
            <Navbar.Brand as={Link} href={isEnglish ? '/en' : '/'}>
              <Image
                src={'/images/Logo.png'}
                width={120}
                height={120}
              />
            </Navbar.Brand>
          </div>

          <div className="d-flex align-items-center gap-3" id="btn-link">
            {!isExpanded && (
              <Link
                href={isEnglish ? '/' : '/en'} // Toggle between Japanese and English
                passHref
              >
                <Button variant="light" className='d-lg-none'>{isEnglish ? '日本語' : 'English'}</Button>
              </Link>
            )}
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='nav-menu'>
              <div className="d-flex align-items-center gap-3" id='btn-link'>
                <Link legacyBehavior href="https://gyouzakou.stores.jp/" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button variant="danger">{isEnglish ? 'Order Online' : 'お取り寄せ'}</Button>
                  </a>
                </Link>
                <Link href={isEnglish ? '/' : '/en'} passHref>
                  <Button variant="light">{isEnglish ? '日本語' : 'English'}</Button>
                </Link>
                <Link legacyBehavior href="https://www.instagram.com/gyouza_kou0501/" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: 'white', fontSize: '36px' }} />
                  </a>
                </Link>
              </div>
              <Nav className="me-auto">
                <Nav.Link as={Link} href={isEnglish ? '/en' : '/'} onClick={navLinkClicked}>{isEnglish ? 'Home' : 'ホーム'}</Nav.Link>
                <Nav.Link as={Link} href={isEnglish ? '/en/menu' : '/menu'} onClick={navLinkClicked}>{isEnglish ? 'Menu' : 'メニュー'}</Nav.Link>
                <Nav.Link as={Link} href={isEnglish ? '/en/takeOut' : '/takeOut'} onClick={navLinkClicked}>{isEnglish ? 'Take Out' : 'テイクアウト'}</Nav.Link>
                <Nav.Link as={Link} href={isEnglish ? '/en/news' : '/news'} onClick={navLinkClicked}>{isEnglish ? 'Our Activities' : '活動内容'}</Nav.Link>
                <Nav.Link as={Link} href={isEnglish ? '/en/location' : '/location'} onClick={navLinkClicked}>{isEnglish ? 'Location & Hours' : 'ロケーション & 営業時間'}</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>{children}</main>

      <footer className="bg-dark text-light py-4 mt-auto">
        <Container className="text-center">
          <p className="mb-2">📞<a href="tel:+81-04-29978118" className="text-light">04-29978118</a></p>
          <Link legacyBehavior href="https://www.instagram.com/gyouza_kou0501/" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ color: 'white', fontSize: '36px' }} />
            </a>
          </Link>
        </Container>
      </footer>
    </>
  );
}
