
import '../index.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

function NavBar() {

    return (
        <div className="Nav">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/Home">React Github Api </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/CardGit">Recherche Utilisateur Github</Nav.Link>
                        <Nav.Link href="/CardList">Liste des Evénements Git</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar