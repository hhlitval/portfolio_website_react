import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiVisualstudio, DiReact } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import { IoLogoXing } from 'react-icons/io';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", allignItems: "center", color: 'white', padding: '0.5rem'}}>
          <DiVisualstudio size="3rem"/><Span>Alexander Litvin</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>          
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://xing.com" >
        <IoLogoXing size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
