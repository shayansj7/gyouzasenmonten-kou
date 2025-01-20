import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function News() {
  const router = useRouter();
  const isEnglish = router.pathname.startsWith("/en");

  return (
    <div className="center-components news">
      <h1 className="text-center mb-4">{isEnglish ? "News" : "お知らせ"}</h1>

      {isEnglish ? (
        <p className="news-content mb-4">
          Starting in February 2025, the operating style will change, and{" "}
          <strong className="important">
            lunch service will be available only on weekends!
          </strong>
        </p>
      ) : (
        <p className="news-content mb-4">
          2025年2月から営業形態が変わり、
          <strong className="important">ランチの営業は土日のみ</strong>
          となります!
        </p>
      )}

      <div className="text-center">
        <Link
          legacyBehavior
          href="https://www.instagram.com/reel/DE3ZtbZzFAR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <Button variant="dark" className="btn-lg">
              {isEnglish? "More details here" : "詳しくはこちら"}
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
