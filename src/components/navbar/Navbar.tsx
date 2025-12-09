import { DropdownLanguage } from './DropdownLanguage';
import { ImgProfile } from './ImgProfile';
import { LogoApp } from './LogoApp';
import { NavbarToggler } from './NavbarToggler';

import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
      <DropdownLanguage />
      <LogoApp />
      <ImgProfile />
      <NavbarToggler />
    </nav>
  );
};
