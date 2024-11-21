import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserCard from './UserCard';
import './User.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard />
  </StrictMode>
);
