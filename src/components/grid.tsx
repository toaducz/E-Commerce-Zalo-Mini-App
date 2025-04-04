import React, {useState} from "react";
import {Grid, Icon, Center, ZBox} from "zmp-ui"

const Grids: React.FunctionComponent = () =>{
    
    return(
        <Center intrinsic = {true}>
            <ZBox padding="1rem" borderWidth="1px">
                <div className= "grid-container">
                    <Grid rowSpace="1rem" columnSpace = "3rem" columnCount={4}>
                        <Icon icon = "zi-home"></Icon>
                        <Icon icon = "zi-home"></Icon>
                        <Icon icon = "zi-home"></Icon>
                        <Icon icon = "zi-home"></Icon>

                        <Icon icon = "zi-home"></Icon>
                        <Icon icon = "zi-home"></Icon>
                        <Icon icon = "zi-home"></Icon>
                        <Icon icon = "zi-home"></Icon>
                    </Grid>
                </div>
            </ZBox>
        </Center>
    );
}
export default Grids;