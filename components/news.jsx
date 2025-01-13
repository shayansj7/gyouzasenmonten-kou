import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

export default function News() {
  return (
    <>
    
      <div className="center-components">
        <h1>お知らせ</h1>
        <h4>
          2022年　5月28日：{" "}
          <span className="news-type">メディア紹介</span>
          {" "}
          <Link
            className="news-title"
            legacyBehavior
            href="https://www.ntv.co.jp/aozora/articles/19135rtyzfhm3owly0iy.html"
            passHref
          >
            <a className="news-title">
              日本テレビ【満天☆青空レストラン】に紹介されました。
            </a>
          </Link>
        </h4>
      </div>
    </>
  );
}
