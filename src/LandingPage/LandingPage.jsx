import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import CardComp from 'Components/Card/CardComp';

const LandingPage = () => {
  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" style={{ fontWeight: 'bold' }}>
          Aplikasi Koperasi Sederhana
        </NavbarBrand>
      </Navbar>
      <CardComp />
    </>
  );
};

export default LandingPage;
