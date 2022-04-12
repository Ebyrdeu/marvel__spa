import {CharBlock, CharStatic, CharWrapper,} from "./CharBannerTopStyled";
import {Button} from "@mui/material";
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelAPI from "../../services/MarvelAPI";
import {useState} from "react";

const CharBannerTop = () => {

	const [charData, setCharData] = useState({
		char: {},
		loading: true
	})

	const marvelAPI = new MarvelAPI();
	const {char, loading} = charData;

	const onCharUpdate = (char) => {
		if (char.description.length === 0) char.description = `Could not find description of ${char.name}`;
		if (char.description.length > 150) char.description = `${char.description.substring(0, 150)}...`;
		setCharData({
			char,
			loading: false
		})
	}

	const updateChar = () => {
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

		marvelAPI.getMarvelCharById(id).then(onCharUpdate);
	}


	const {name, description, thumbnail, homepage, wiki} = char;
	return (
		<CharWrapper>
			<CharBlock>
				<img alt='Random Chararcter' src={`${thumbnail}`}/>
				<div>
					<div>
						<p>{name}</p>
						<p>{description}</p>
					</div>
					<div>
						<a href={homepage}><Button variant="contained">homepage</Button></a>
						<a href={wiki}><Button variant="contained" className='second'>Wiki</Button></a>
					</div>
				</div>
			</CharBlock>
			<CharStatic>
				<p>Random character for today!<br/>Do you want to get to know him better?</p>
				<p>Or choose another one</p>
				<Button variant="contained" onClick={updateChar}>try it</Button>
				<img src={mjolnir} alt="mjolnir"/>
			</CharStatic>
		</CharWrapper>
	);


}


export default CharBannerTop;