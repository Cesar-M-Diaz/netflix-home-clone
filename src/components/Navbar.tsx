import { useState } from 'react';
import userLogo from '../assets/img/userLogo.jpg';
import netflixLogo from '../assets/img/netflixLogo.png';
import { FaSearch } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import '../assets/styles/components/Navbar.scss';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  window.onscroll = () => {
    if (window.scrollY > 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    return () => (window.onscroll = null);
  };

  const toggleSearch = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={
        isScrolled ? 'navbar__container scrolled' : 'navbar__container'
      }
    >
      <div className="navbar__generes-container">
        <img className="netflix__logo" src={netflixLogo} alt="netfix logo" />
        <p>Home</p>
        <p>TV Shows</p>
        <p>Movies</p>
        <p>New & Popular</p>
        <p>My List</p>
        <p>Watch Again</p>
      </div>
      <div
        className={isOpen ? 'navbar__search-bar open' : 'navbar__search-bar'}
      >
        <FaSearch className="navbar__search-icon" onClick={toggleSearch} />
        <input
          className="navbar__search-input"
          type="text"
          placeholder="Titles, people, genres"
        />
      </div>
      <div className={`navbar__search-container `}>
        <p>Kids</p>
        <p>DVD</p>
        <BsFillBellFill className="navbar__icon" />
        <div className="navbar__user-container">
          <img className="user__logo" src={userLogo} alt="user logo" />
          <MdOutlineArrowDropDown className="navbar__user-arrow" />
          <div className="navbar__hidden-hover">
            <MdOutlineArrowDropDown className="navbar__hidden-hover-arrow" />
            <p>Manage Profiles</p>
            <div></div>
            <p>Account</p>
            <p>Help Center</p>
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
