import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { Card, Button, Alert, Navbar,  Nav, NavDropdown } from "react-bootstrap"
function App() {
  return (<>
   <Navbar bg="light" expand="lg">
  <Container  className="d-flex  justify-content-between">
    <Navbar.Brand href="#home">
      
      AMIGO
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-5">
        <Nav.Link href="#home">For NGO</Nav.Link>
        <Nav.Link href="#link">For Therapists</Nav.Link>
        <NavDropdown title="About Us" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Media</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  </>)
}

export default App
