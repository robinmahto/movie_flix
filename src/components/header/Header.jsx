import React, { useState, useEffect } from "react";
import "./style.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { SlInfo, SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";


const Header = () => {

    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const openSearch = ()=>{
      setMobileMenu(false)
      setShowSearch(true)
    }

    const openMobileMenu = ()=> {
      setMobileMenu(true)
      setShowSearch(false)
    }

    const searchQueryHandler = (event)=> {
      if(event.key === "Enter" && query.length > 0){
         navigate(`/search/${query}`);
         setTimeout(()=> setShowSearch(false), 1000);
      }
  }

    return (
        <header className={`header ${mobileMenu ? 'mobileView' : ''}`}>
          <ContentWrapper>
             <div className="logo">
               <img src={logo} alt="logo" />
             </div>
             <ul className="menuItems">
               <li className="menuItem" >Movies</li>
               <li className="menuItem">TV Shows</li>
               <li className="menuItem">
                <HiOutlineSearch onClick={openSearch}/>
               </li>
             </ul>

             <div className="mobileMenuItems">
              <HiOutlineSearch onClick={openSearch}/>
              {
                mobileMenu ? <VscChromeClose onClick={()=> setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu}/>
              }
             </div> 
          </ContentWrapper>
          {
            showSearch && (  <div className="searchBar">
            <ContentWrapper>
              <div className="searchInput">
                 <input 
                  type="text"
                  placeholder="Search for movie or tv show...."
                  onChange={(e)=> setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler} 
                 />
                 <VscChromeClose onClick={()=> setMobileMenu(false)} />
              </div>
            </ContentWrapper>
          </div>)
          }
        </header>
    );
};

export default Header;