import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoXing } from 'react-icons/io';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
        <LinkTitle>Phone</LinkTitle>
        <LinkItem href="tel:+49 176 255 36 503">+49 176 255 36 503</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto: litvinhh@gmail.com">litvinhh@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://xing.com" >
        <IoLogoXing size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
