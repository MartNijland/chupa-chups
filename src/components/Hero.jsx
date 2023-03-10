import styled from 'styled-components'
import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`
const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Poppetje = styled.img`
  width: 130%;

  @media screen and (max-width: 767px) {
    width: 90%;
    padding-right: 10%;
    padding-bottom: 20%;
  }
`

const Heading = styled.h1`
  font-size: 100px;
  line-height: 1.1;
  font-weight: 600;
  text-shadow: 1px 0.5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 767px) {
    padding-top: 55%;
    padding-left: 8%;
    padding-right: 8%;
    font-size: 30px;
    text-align: center;
    color: #fff;
  }
`

const Text = styled.p`
  padding-top: 30px;
  font-size: 20px;
  text-shadow: 1px 0.5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 767px) {
    padding-left: 8%;
    padding-right: 8%;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
`
const Roze = styled.span`
  color: #E670A4;
  font-weight: 700;
`
const Groen = styled.span`
  color: #68E66C;
  font-weight: 700;

`

const AnimatedLeft = motion(Left)
const AnimatedRight = motion(Right)

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <AnimatedLeft
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Heading>Ontdek onze <Roze>suikervrije</Roze> en <Groen>vegan</Groen> lollies!</Heading>
          <Text>Onze veganistische en suikervrije lolly's zijn niet alleen lekker, maar ook gezond. We willen graag de perceptie van snoep veranderen en laten zien dat het mogelijk is om te genieten van zoete lekkernijen zonder je schuldig te voelen.</Text>
        </AnimatedLeft>
        <AnimatedRight
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Poppetje src='./img/chuppie.png'/>
        </AnimatedRight>
      </Container>
    </Section>
  )
}

export default Hero
