import React from 'react';

import { Section, SectionSmallText, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Alexander!
      </SectionTitle>
      <SectionText>
        Computer science student at TU Hamburg.<br/> 
        I enjoy creating UI designs, working with data and solving complex problems. <br/>
        </SectionText>
      <SectionSmallText>UI Design - Programming in C# - Data Analysis - Web Development</SectionSmallText>
      <Button onClick={() => window.location = 'https://google.com'}>Contact</Button>
    </LeftSection>
  </Section>
);  

export default Hero;