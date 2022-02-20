import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm Jeremy <br />
        Welcome To My <br />
        Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm an aspiring Software developer. 
      </SectionText>
      <Button onClick= {() => window.location = 'https://www.google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;