import {CharListStyled} from "./CharListStyled";
import {Button} from "@mui/material";
import abyss from '../../resources/img/abyss.jpg';

const CharList = () => {
	return (
		<CharListStyled>
			<ul>
				<li>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
				<li className='selected'>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
				<li>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
				<li>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
				<li>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
				<li>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
				<li>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
				<li>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
				<li>
					<img src={abyss} alt="abyss"/>
					<p>Abyss</p>
				</li>
			</ul>
			<Button>Load More</Button>
		</CharListStyled>
	);
};

export default CharList;