import React, {
	useState,
	useEffect,
} from "react";
import NavDropdown from "./NavDropdown";
import {
	HeaderContainer,
	LogoContainer,
	NavContainer,
	NavList,
	Nav,
} from "./HeaderStyles";

function Header() {
	const [navData, setNavData] = useState([]);
	const [navDis, setNavDis] = useState(false);

	const changeNavBackground = () => {
		if (window.scrollY >= 60) {
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
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/navcontent"
		)
			.then((response) => response.json())
			.then((data) => setNavData(data));
	}, []);
	return (
		<HeaderContainer backGroundColor={navDis}>
			<LogoContainer>
				<h2>Insurance</h2>
			</LogoContainer>
			<NavContainer>
				<NavList>
					{navData.map((d) => (
						<Nav>
							{d.heading}
							<NavDropdown data={d.list} />
						</Nav>
					))}
				</NavList>
			</NavContainer>
		</HeaderContainer>
	);
}

export default Header;
