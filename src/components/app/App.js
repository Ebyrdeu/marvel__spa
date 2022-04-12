import {Container} from "@mui/material";
import AppHeader from "../appHeader/AppHeader";
import CharBannerTop from "../charBannerTop/charBannerTop";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/charInfo";
import styled from "styled-components";
import decoration from '../../resources/img/vision.png';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 670px 430px;
  column-gap: 50px;
  align-items: start;
  margin-top: 80px;
`
const ImgDec = styled.img`
  position: absolute;
  right: 350px;
  bottom: -230px;
  z-index: -1;
`
const AppWarp = styled.div`
	position: relative;
`
function App() {
	return (
		<AppWarp>
			<Container>
				<AppHeader/>
				<main>
					<CharBannerTop/>
					<Grid>
						<CharList/>
						<CharInfo/>
					</Grid>
					<ImgDec className="imgDec" src={decoration} alt="vision"/>
				</main>
			</Container>
		</AppWarp>
	);
}

export default App;
