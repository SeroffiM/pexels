import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavBar } from './NavBar/NavBar';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Header: React.FC = () => {
  

  return (
    <header className="header">
      <NavBar />
      
    </header>
  );
};
