import React, {useState, startTransition} from "react";
import {Box,Grid,useNavigate, Center, Icon, Input, Button} from "zmp-ui";

const Header_search: React.FunctionComponent = () => {
    const navigate = useNavigate();
    const [searchword, setSearchWord] = useState("")

    const searching = () =>{
        if(searchword.trim() !== ""){
            startTransition(() => navigate(`/search-results?query=${encodeURIComponent(searchword)}`))
        }
    }
    return(
        <Box className="header"
        >   <Center >
            <Grid columnSpace="1rem"
            style={{
                borderRadius: "8px",
                padding: "8px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}
            >
                <Box onClick={()=>navigate(-1)}><Icon icon="zi-arrow-left"></Icon></Box>
                
                <Box>
                    <Input.Search 
                        value={searchword}
                        placeholder="Tìm kiếm..."
                        clearable
                        onChange={(e) => setSearchWord(e.target.value)}
                    />
                </Box>
                
                <Button
                    onClick={searching}
                >
                    Tìm kiếm
                </Button>
            </Grid>
            </Center>
        </Box>
    )
};

export default Header_search;