import { styled } from "@mui/material"
import Avatar from "../../../../assets/imgs/avatar.jpg"

const Hero = () => {
  
    const StyledHero = styled("div")(()=> ({

        backgroundColor: "black"

    }))

    const StyledAvatar = styled("img")(()=> ({
        width: "30%",
        borderRadius: "50%"
    }))

  return (
    <>

    <StyledHero>
    Olá, mundo!
      <StyledAvatar src={Avatar}/>
    </StyledHero>

    </>
  )
}

export default Hero
