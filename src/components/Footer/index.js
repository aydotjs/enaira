import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa'
import{FooterContainer, 
    FooterWrap,
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo, 
    WebsiteRights, 
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle>
                                    <FooterLink to="/signin">About Us</FooterLink>
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms of Services</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle>
                                    <FooterLink to="/signin">About Us</FooterLink>
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms of Services</FooterLink>
                            </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle>
                                    <FooterLink to="/signin">About Us</FooterLink>
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms of Services</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle>
                                    <FooterLink to="/signin">About Us</FooterLink>
                                    <FooterLink to="/signin">How it works</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Careers</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Terms of Services</FooterLink>
                            </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to='/'onClick={toggleHome}>Enaira</SocialLogo>
                    <WebsiteRights>Enaira &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/ayo" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
