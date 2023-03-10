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
  width: 130%;

  @media screen and (max-width: 767px) {
    padding-top: 40%;
    width: 80%;
  }
`

const Heading = styled.h1`
  font-size: 100px;
  font-weight: 600;
  line-height: 1;
  text-shadow: 1px 0.5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 767px) {
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
const Groen = styled.span`
  color: #68E66C;
  font-weight: 700;
`

const AnimatedLeft = motion(Left)
const AnimatedRight = motion(Right)

function Who() {
  return (
    <Section>
      <Container>
      <AnimatedRight
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Poppetje src='./img/chuppie-kaart.png'/>
        </AnimatedRight>
        <AnimatedRight
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
        <Heading>Waarom zijn onze lollies zo <Groen>gezond</Groen>?</Heading>
          <Text>Onze veganistische en suikervrije lolly's van ChupaChups zijn een gezonder alternatief voor traditionele lolly's, omdat ze geen toegevoegde suikers bevatten en veganistisch zijn. In plaats daarvan worden natuurlijke zoetstoffen zoals stevia gebruikt. Hierdoor zijn ze een goede keuze voor mensen die een gezonde levensstijl nastreven en toch af en toe van een lekker snoepje willen genieten.</Text>
        </AnimatedRight>
      </Container>
    </Section>
  )
}

export default Who