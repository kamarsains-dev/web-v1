import { NavbarItem } from "../navbar-item";

const Nav = () => {
    return (
        <div className="flex gap-x-5 md:gap-x-8 justify-around items-center">
            <NavbarItem label="Home" href="/home" iconSrc="/home.svg"/>
            <NavbarItem label="Courses" href="/courses" iconSrc="/cards-blank.svg"/>
            <NavbarItem label="Shop" href="/shop" iconSrc="/key-hole.svg"/>
            {/* <NavbarItem label="Leaderboard" href="/leaderboard" iconSrc="/crown.svg"/> */}
            <NavbarItem label="Analytic" href="/analytic" iconSrc="/analytic.svg"/>
        </div>   
    );
};

export default Nav;