import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media screen and (max-width: 1400px) {
        width: 1000px;
    }

    @media screen and (max-width: 1024px) {
        width: 800px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        justify-content: center;
    }
`
const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`
const Logo = styled.img`
    width: 80px;
    @media screen and (max-width: 768px) {
        width: 100px;
    }

`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`
const ListItem = styled.li`
    cursor: pointer;
`
const Button = styled.a`
    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    background: #FA4B98;
    text-align: center;
    text-decoration: none;
`

const LinksAnimated = motion(Links);
const IconsAnimated = motion(Icons);
const ButtonAnimated = motion(Button);
const LogoAnimated = motion(Logo);

const Navbar = () => {
  return (
    <Section>
        <Container>
            <LinksAnimated
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <LogoAnimated 
                 whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                src='./img/logo.png'/>
                <List>
                </List>
            </LinksAnimated>
            <IconsAnimated
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <ButtonAnimated 
                              whileHover={{
                                scale: 1.1,
                              }}
                              transition={{
                                duration: 0.1,
                              }}
                href="https://www.chupachups.nl/" target="_blank" rel="noopener noreferrer">Meer informatie</ButtonAnimated>
            </IconsAnimated>
        </Container>
    </Section>
  )
}

export default Navbar
