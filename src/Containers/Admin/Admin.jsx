import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import TitleButton from "../../Components/TitleButton/TitleButton";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import monkey from "../../assets/monkey.svg"
import logo from "../../assets/logo.svg"
import {Sidebar,SidebarItem} from "../../../node_modules/react-responsive-sidebar/index"
import "./admin.css"
import Tables from "../../Components/Table/Table";
import InventoryTable from "../../Components/Table/InventoryTable";



const Admin = () => {
    const navigate = useNavigate();
    let logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        navigate("/signup");
    };
    
    const [openlogout, setOpenlogout] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsActive((current) => !current);
    };
    const defaultClick = (e) => {
        e.preventDefault();
        setIsActive(false);
    };
    const items = [
        <SidebarItem>
            <div className="">
                <div>
                    <NavLink to="/" style={{ textDecoration: 'none' }}><img className="logo-size" src={logo} /></NavLink>

                </div>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-top">
                <NavLink to="/users" style={{ textDecoration: 'none' }}><Button widthv={120} name="users" /></NavLink>
            </div>
        </SidebarItem>,
        <SidebarItem>
            <div className="sidebar-btn mar-mid-top mt-3">
                <NavLink to="/inventory" style={{ textDecoration: 'none' }}><Button widthv={120} name="inventory" /></NavLink>
            </div>
        </SidebarItem>,
    ];
    return (
        <>
            <div>
                <Sidebar
                    className="side-bar z-s-i-css"
                    content={items}
                    width={200}
                    background={"#FFF"}
                    toggleIconColor={"#7B61FF"}
                    color={"#000000"}
                    activeHightlight={"#FFF"}
                    hoverHighlight={"#FFF"}
                    textAlign={"center"}
                >
                    <div className="fix-nav ">
                        <div className="container">
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-6 til-mob-css">
                                    <TitleButton name="search customer" />
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2 logo-top">
                                    <div className={openlogout ? "dropdown-monkey monkey-click" : "dropdown-monkey"}>
                                        <button className="monkey-btn-css" onClick={() => { setOpenlogout(current => !current) }}><img className="logo-top-size " src={monkey} /></button>
                                        <div className={openlogout ? "dropdown-content-monkey monkey-click" : "dropdown-content-monkey"}>
                                            <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/company/zionn/" target="__blank"><Button name="contact" /></a>
                                            <button
                                                onPointerLeave={defaultClick}
                                                onPointerDown={handleClick}
                                                onPointerUp={handleClick}
                                                onClick={logOut}
                                                className={isActive ? "butt butt-ac logout-btn-css" : "butt logout-btn-css"}
                                            >
                                                logout&nbsp;
                                                <i class="bi bi-arrow-up-right"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-1"></div>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => setOpenlogout(false)} className="container con-abs">
                        <div className="row ">
                            <div className="container mb-5">
                            <Tables heading1="users"/>
                            <InventoryTable heading1="inventory"/>
                            </div>
                        </div>
                    </div>
                </Sidebar>
            </div>
        </>
    );
};

export default Admin;
