import React from 'react';
import { FaSignInAlt, FaHome, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/asd">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
