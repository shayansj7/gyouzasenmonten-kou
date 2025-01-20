import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function Custom404() {
  return (
    <div className="center-components mb-4">
      <h1 className="errorCode">404</h1>
      <h2 className= "errorMessage">Oops! Page not found.</h2>
      <p className="errorDescription">
        Sorry, the page you`&apos;re looking for doesn`&apos;t exist. It might have been moved or deleted.
      </p>
      <Link href="/">
        <Button variant='dark'>Go back to the homepage</Button>
      </Link>
    </div>
  );
}
