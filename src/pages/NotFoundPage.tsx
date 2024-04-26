import { Link } from 'react-router-dom';
import Page from './Page';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <Page>
      <section id="error">
        <h1>404 - Not Found Page</h1>
        <p>
          Oops! The page you&apos;re looking for no longer exists. It may have
          been moved or may be temporarily unavailable. Check if you typed the
          address correctly or return to the home page.
        </p>
        <Link to="/">
          Go back to Home
        </Link>
      </section>
    </Page>
  );
}
