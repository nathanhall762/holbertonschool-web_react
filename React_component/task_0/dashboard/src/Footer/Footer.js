import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../Utils/utils';

export default function Footer() {
  return (
    <footer className='App-footer'>
      <p>
        <i>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </i>
      </p>
    </footer>
  );
}
