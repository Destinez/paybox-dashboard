import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import {
  NotificationImportant,
  KeyboardArrowDown,
  FiberManualRecord,
} from "@mui/icons-material";
import avatar from "../assets/images/avatar.jpg"
import { NotificationBing, Notification } from "iconsax-react";

const NavbarComponent = () => {
  const notificationCount = 1; // You can set your notification count here

  // For the dropdown menu
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar expand="md">
      <NavbarBrand href="/" className="text-sm-light">Analytics Dashboard</NavbarBrand>
      <Nav className="ml-auto d-lg-flex align-items-center d-md-flex d-none" navbar>
        <NavItem className="notifications">
          <div className="d-flex position-relative">
            <NotificationBing className="text-primary" variant="Bulk" />
            {/* <div className="position-relative"> */}
              {notificationCount > 0 && (
                <FiberManualRecord className="notification-badge text-danger" />
              )}
            {/* </div> */}
          </div>
        </NavItem>
        <NavItem>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle className="d-flex text-dark align-items-lg-end">
              <img
                src={avatar} // Replace with your avatar image URL
                alt="Avatar"
                className="avatar"
              />
              <Row className="profile ps-3">
                <Col xs={12} className="d-flex justify-content-start">
                  <span className="fw-bolder">Dexter Olaniyi</span>
                </Col>
                <Col xs={12} className="d-flex justify-content-start">
                  <span>Dexterola@gmail.com</span>
                </Col>
              </Row>
              <KeyboardArrowDown className="caret" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>My Profile</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
        
      </Nav>
      <NavItem className="d-md-none d-block">
          <Button className="btn-light w-100 py-2 px-4 rounded-3">Menu</Button>
          
        </NavItem>
    </Navbar>
  );
};

export default NavbarComponent;
