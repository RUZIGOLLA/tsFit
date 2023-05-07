import React from 'react'
import Container from '../atom/Container'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'

export function Layout() {
    return <Container width={'lg'} height={'lg'} color={'primary'} flexDirection='column' display={'flex'} gap={'sm'}>
        <Navbar />
        <Container width={'lg'} height={'lg'} color={'primary'} flexDirection='column' display={'flex'} gap={'sm'}>

            <Outlet />
        </Container>
        <Footer />
    </Container>
}
function Navbar({ }) {
    return (
        <Container alignItems='center' justifyContent='center' display='flex' height='xs' width='lg' color='primary' gap={'sm'}>
            <Container alignItems='center' justifyContent='start' display='flex' height='lg' width='sm' color='primary'>
                <h3>TsFIT</h3>
            </Container>
            <Container alignItems='center' justifyContent='space-between' display='flex' height='lg' width='sm' color='primary'>
                <Link to="/">Acceuil</Link>
                <Link to="Courses">Cours</Link>
                <Link to="Planning">Planning</Link>
            </Container>
            <Container alignItems='center' justifyContent='end' display='flex' height='lg' width='sm' color='primary'>
                <Link to="Cart">Panier</Link>
                <Link to="profile">Profil</Link>
            </Container>
        </Container>
    )
}

export default Navbar