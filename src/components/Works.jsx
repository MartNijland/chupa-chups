import styled from 'styled-components'
import React from 'react'
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
  
  @media screen and (max-width: 1500px) {
    width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    width: 800px;
}

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
  padding-left: 15%;

  @media screen and (max-width: 1500px) {
    width: 120%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
    padding-right: 10%;
    padding-bottom: 20%;
  }
  
  @media screen and (max-width: 375px) {
    padding-top: -10%;
  }
`

const Heading = styled.h1`
  font-size: 100px;
  font-weight: 600;
  line-height: 1.1;
  text-shadow: 1px 0.5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1500px) {
    font-size: 80px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 60px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 55%;
    padding-left: 8%;
    padding-right: 8%;
    font-size: 30px;
    text-align: center;
    color: #fff;
  }

  @media screen and (max-width: 375px) {
    padding-top: 90%;
  }
`

const Text = styled.p`
  padding-top: 30px;
  font-size: 20px;
  text-shadow: 1px 0.5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

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
const AnimatedLeft = motion(Left);
const AnimatedRight = motion(Right);

function Works() {
  return (
    <Section>
      <Container>
        <AnimatedLeft
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        >
        <Heading>Je bent een echte <Roze>avonturier</Roze>!</Heading>
          <Text>Gefeliciteerd! Je hebt onze QR-code gevonden. Je bent  nu een echte avonturier! Als je nog niet genoeg hebt van het ontdekken, kijk dan snel verder! Er zijn nog veel meer verschillende smaken te vinden.</Text>
        </AnimatedLeft>
        <AnimatedRight
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
        <Poppetje src='./img/chuppie-roll.png'/>
        </AnimatedRight>
      </Container>
    </Section>
  )
}


export default Works