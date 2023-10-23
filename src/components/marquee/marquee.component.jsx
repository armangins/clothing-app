import React from "react";
import Marquee from "react-fast-marquee";
import { MarqueeContainer } from "./marquee.styles";

const MarqueeComponent = ()=>{
    return(
        <MarqueeContainer>
        <Marquee  style={{position:'fixed',backgroundColor:'black'}}  autoFill="true" pauseOnHover="true">
            <p style={{padding:'10px', fontWeight:'bold',fontSize:'16px',}}>shop now get and exclusive disscount </p>
        </Marquee>
        </MarqueeContainer>
    )
}

export default MarqueeComponent