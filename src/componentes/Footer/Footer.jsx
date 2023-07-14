import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <>
            <Nav className="mt-4 color justify-content-center">
                    <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <p className="text-center mt-4 mb-4">© 2023 Mariano Toranzo, Inc. Reservados todos los derechos.</p>
        </>
    )
}

export default Footer