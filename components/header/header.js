import React, { useState, useEffect} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return (
  <div className={`header md ${props.customClass}`}>
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 no__padding">
                  <Navbar  expand="lg" >
                      <NavbarBrand href="/" className="nav__brand">
                        <img className="top__logo" src={props.masterElements.acf.header_logo} alt="Serve The Moment"/>
                      </NavbarBrand>

                      <NavbarToggler onClick={toggle} />

                      <Nav className="mr-auto main__nav" navbar>
                        {
                          props.menuItems
                            ? props.menuItems.items.map(menuItem => 
                              <NavItem key={menuItem.ID}>
                                <NavLink href={menuItem.url}>{menuItem.title}</NavLink>
                              </NavItem>
                              )
                            :""
                        }
                      </Nav>
                      <NavItem>
                          <NavLink href={props.masterElements.acf.header_button_link}>
                              <button className={`btn main-btn teal`}><strong>{props.masterElements.acf.header_button_text}</strong></button>
                          </NavLink>
                      </NavItem>
                  </Navbar>
                </div>
            </div>
        </div>

    </div>
  </div>
  );
}

export default Header;