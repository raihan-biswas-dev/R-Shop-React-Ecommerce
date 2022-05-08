import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav } from 'rsuite';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { GiScales } from 'react-icons/gi';
import axios from 'axios'


export default function MainMenu() {

    let [logo, setLogo] = useState({})

    useEffect(() => {
        let logoData = async () => {
            let data = await axios.get("http://localhost:8000/logo")
            setLogo(data.data.img)
        }

        logoData()

    }, [])



    return (
        <div>
            <Container className='container'>
                <Navbar className='menu'>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className='menu-item'>
                        <Nav.Item>Home</Nav.Item>
                        <Nav.Item>Pages</Nav.Item>
                        <Nav.Item>Blog</Nav.Item>
                        <Nav.Item>Contacts</Nav.Item>

                    </Nav>
                    <Nav pullRight>
                        <div className="nav-icon">
                            <FaRegUserCircle className='icon' />
                            <AiOutlineHeart className='icon' />
                            <GiScales className='icon' />
                            <span className='cart'>
                                <AiOutlineShoppingCart className='icon' />
                                <span className='round'>15</span>
                            </span>
                        </div>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}
