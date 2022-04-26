import React, {
	useState,
	useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import NavDropdown from "./NavDropdown";
import {
	HeaderContainer,
	LogoContainer,
	NavContainer,
	NavList,
	Nav,
} from "./HeaderStyles";

function Header({ displayHeader }) {
	const [navData, setNavData] = useState([]);
	const [navDis, setNavDis] = useState(false);
	const navigate = useNavigate();
	const changeBackGroundProp = displayHeader;

	const changeNavBackground = () => {
		if (
			window.scrollY >= 60 ||
			changeBackGroundProp
		) {
			setNavDis(true);
		} else {
			setNavDis(false);
		}
	};

	window.addEventListener(
		"scroll",
		changeNavBackground
	);

	useEffect(() => {
		const controller = new AbortController();
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/navcontent"
		)
			.then((response) => response.json())
			.then((data) => setNavData(data));
		return () => controller.abort();
	}, []);
	return (
		<HeaderContainer backGroundColor={navDis}>
			<LogoContainer
				onClick={() => {
					navigate(`/`);
				}}
			>
				<h2>Insurance</h2>
			</LogoContainer>
			<NavContainer>
				<NavList>
					{navData.map((d) => (
						<Nav key={d.id}>
							{d.heading}
							<NavDropdown data={d.list} />
						</Nav>
					))}
				</NavList>
			</NavContainer>
		</HeaderContainer>
	);
}

Header.defaultProps = {
	displayHeader: false,
};

Header.propTypes = {
	displayHeader: PropTypes.bool,
};
export default Header;
