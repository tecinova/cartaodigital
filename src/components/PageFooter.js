import React from 'react';
import config from '../../config';

export default function PageFooter() {
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; {config.authorName}</li>
        <li>
          Tema: <a href="">Anubhav</a> {' '}
          <a href="">Srivastava</a>
        </li>
      </ul>
    </footer>
  );
}
