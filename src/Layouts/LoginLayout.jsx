import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

export default function LoginLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
