import React from 'react';
import { SidebarContainer,
     Icon, CloseIcon,
      SidebarWrapper,
      SidebarMenu,
      SidebarLink,
      SideBtnWrap,
      SidebarRoute  } from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}> 
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true}
                             exact="true">About</SidebarLink>
                    <SidebarLink to="discover" onClick={toggle} smooth={true} duration={500} spy={true}
                             exact="true" >Discover</SidebarLink>
                    <SidebarLink to="services" onClick={toggle} smooth={true} duration={500} spy={true}
                             exact="true" >Services</SidebarLink>
                    <SidebarLink to="signup" onClick={toggle} smooth={true} duration={500} spy={true}
                             exact="true" >Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
