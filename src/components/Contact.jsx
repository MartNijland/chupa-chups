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

  @media screen and (max-width: 767px) {
    flex-direction: column;
    display: inline-block;
    width: 100%;
  }
`
const Left = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Poppetje = styled.img`
  width: 50%;

  @media screen and (max-width: 767px) {
    padding-top: 15%;
    width: 100%;
  }
`

const Heading = styled.h1`
  font-size: 100px;
  font-weight: 600;
  line-height: 1;
  text-shadow: 1px 0.5px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  padding-top: 10%;

  @media screen and (max-width: 767px) {
    padding-left: 8%;
    padding-right: 8%;
    font-size: 30px;
    text-align: center;
    color: #fff;
    padding-top: 55%;
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
const Groen = styled.span`
  color: #68E66C;
  font-weight: 700;
`
const Roze = styled.span`
  color: #E670A4;
  font-weight: 700;
`

const AnimatedLeft = motion(Left)
const AnimatedRight = motion(Right)

function Contact() {
  return (
    <Section>
      <Container>
      <AnimatedRight
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heading>Veel plezier met <Groen>ontdekken</Groen> van onze <Roze>smaken</Roze>!</Heading>
          <Poppetje src='./img/chuppie-kaart.png'/>
        </AnimatedRight>
      </Container>
    </Section>
  )
}

export default Contact