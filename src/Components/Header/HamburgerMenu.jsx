/* eslint-disable react/prop-types */
import React from "react";
import {
	Hamburger,
	Burger,
	BurgerItemsContainer,
	BurgerItems,
} from "./HeaderStyles";

function HamburgerMenu({
	toggleHamburger,
	hamburgerDisplay,
	navData,
	barColor,
}) {
	return hamburgerDisplay ? (
		<>
			<Hamburger onClick={toggleHamburger}>
				<Burger barColor={barColor} />
				<Burger barColor={barColor} />
				<Burger barColor={barColor} />
			</Hamburger>
			<BurgerItemsContainer>
				{navData?.map((d) => (
					<BurgerItems
						hamburgerDisplay={hamburgerDisplay}
						key={d.id}
					>
						{d.heading}
					</BurgerItems>
				))}
			</BurgerItemsContainer>
		</>
	) : (
		<Hamburger onClick={toggleHamburger}>
			<Burger barColor={barColor} />
			<Burger barColor={barColor} />
			<Burger barColor={barColor} />
		</Hamburger>
	);
}

export default HamburgerMenu;
