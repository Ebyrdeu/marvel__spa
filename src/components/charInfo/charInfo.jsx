import {CharInfoStyled} from "./CharInfoStyled";
import thor from '../../resources/img/thor.jpeg';
import {Button} from "@mui/material";

const CharInfo = () => {
	return (
		<CharInfoStyled>
			<div>
				<img src={thor} alt="abyss"/>
				<div>
					<p>thor</p>
					<div>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a href='#'><Button>Homepage</Button></a>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a href="#"><Button className='second'>Wiki</Button></a>
					</div>
				</div>

			</div>
			<p>
				In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of
				Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the
				jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
				world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
				Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
				the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is
				referred to as the father of Váli in the Prose Edda.
			</p>
			<div>
				<span>Comics:</span>
				<ul>
					<li>All-Winners Squad: Band of Heroes (2011) #3</li>
					<li>Alpha Flight (1983) #50</li>
					<li>Amazing Spider-Man (1999) #503</li>
					<li>Amazing Spider-Man (1999) #504</li>
					<li>AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
					<li>Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
					<li>Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
					<li>Vengeance (2011) #4</li>
					<li>Avengers (1963) #1</li>
					<li>Avengers (1996) #1</li>
				</ul>
			</div>
		</CharInfoStyled>
	);
};

export default CharInfo;