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

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter()

  return (
    <footer className={`header md ${props.customClass}`}>
      <div className="container-fluid">
        <div className="row">
                  <div className="col-lg-12 no__padding">
                    <Navbar  expand="lg" >
                        <a href="https://werepair.org/" target="_BLANK">
                          <img className="bottom__logo" src={props.masterElements.acf.footer_logo} alt="Powered by Repair The World"/>
                        </a>                

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
                                <NavLink href={menuItem.url}>{menuItem.title}</NavLink>
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
                                <NavLink href={menuItem.url}>{menuItem.title}</NavLink>
                              </NavItem>
                              )
                            :""
                          }
                          </>
                        }
                        </Nav>

                        <NavItem>
                          <NavLink href={props.masterElements.acf.header_button_link}>
                              <button className={`btn main-btn bottom`}><strong>{props.masterElements.acf.header_button_text}</strong></button>
                          </NavLink>
                        </NavItem>

                    </Navbar>
                  </div>
              </div>
        {
        props.customClass === "bottom"
        ?
        <>
            <div className="container bottom__menu">
                <div className="row">
                    <div className="col-lg-12">
                        <ul>
                        {
                          router.pathname === '/landing'
                          ?
                          <>
                          {
                            props.landingMenu
                            ? props.landingMenu.items.map((menuItem, index) => 
                              <a href={menuItem.url} key={index}>
                               <li>{menuItem.title}</li>
                              </a>
                              )
                            :""
                          }
                          </>
                          :
                          <>
                          {
                            props.menuItems
                            ? props.menuItems.items.map((menuItem, index) => 
                              <a href={menuItem.url} key={index}>
                              <li>{menuItem.title}</li>
                              </a>
                              )
                            :""
                          }
                          </>
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </>
        :" "
        }
      </div>
    </footer>
  );
}

export default Footer;