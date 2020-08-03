import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router'

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
const router = useRouter()


return (
  <div className={`header md ${props.customClass}`}>
    <div className="container-fluid">
        <div className="container no__padding">
            <div className="row">
                <div className="col-lg-12 no__padding">
                  <Navbar  expand="lg" >
                      <NavbarBrand href="/" className="nav__brand" tabIndex="0">
                        <img loading="lazy" tabIndex="0" className="top__logo" src={props.masterElements.acf.header_logo} alt="Serve The Moment"/>
                      </NavbarBrand>

                      <NavbarToggler onClick={toggle} />

                      <Nav className="mr-auto main__nav" navbar>
                        {
                          router.pathname === '/landing'
                          ?
                          <>
                          {
                            props.landingMenu
                            ? props.landingMenu.items.map(menuItem => 
                              <NavItem key={menuItem.ID}>
                                <NavLink href={`/`+menuItem.url.split("/")[3]} tabIndex="0">{menuItem.title}</NavLink>
                              </NavItem>
                              )
                            :""
                          }
                          </>
                          :
                          <>
                          {
                            props.menuItems
                            ? props.menuItems.items.map(menuItem => 
                              <NavItem key={menuItem.ID}>
                                <NavLink href={`/`+menuItem.url.split("/")[3]} tabIndex="0">{menuItem.title}</NavLink>
                              </NavItem>
                              )
                            :""
                          }
                          </>
                        }
                      </Nav>
                      <NavItem>
                          <NavLink href={props.masterElements.acf.header_button_link}>
                              <button className={`btn main-btn teal`} tabIndex="0" ><strong>{props.masterElements.acf.header_button_text}</strong></button>
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