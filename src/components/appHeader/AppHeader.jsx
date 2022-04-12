import {AppHeaderStyled} from "./AppHeaderStyled";

const AppHeader = () => {
	return (
		<AppHeaderStyled>
			<h1>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a href="#">
					<span>Marvel</span> information portal
				</a>
			</h1>
			<nav>
				<ul>
					<li><a href="#">Characters</a></li>
					<span>/</span>
					<li><a href="#">Comics</a></li>
				</ul>
			</nav>
		</AppHeaderStyled>
	);
};

export default AppHeader;