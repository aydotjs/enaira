import React, {useState} from 'react';
import { ButtonR } from '../ButtonElementsRouter';
import Video from '../../videos/video.mp4';
import { HeroContainer,
         HeroBg,
         VideoBg, HeroContent,
         HeroH1, HeroBtnWrapper,
         HeroP, ArrowForward,
         ArrowRight} from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Mobile Banking made easy</HeroH1>
                <HeroP>Sign Up for a new account today to get you going</HeroP>
                <HeroBtnWrapper>
                    <ButtonR to="/signin" smooth={true} onMouseEnter={onHover} primary="true" dark="true" onMouseLeave={onHover}>
                     Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </ButtonR>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
