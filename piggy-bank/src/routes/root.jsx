import { Link, Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Pig_Logo from '../images/Pig_Logo.png';
import { BalanceContext } from "./balance-context";
import React, { useState } from "react";
// import { AccountContext } from "./account-context";
// import { Popover } from "bootstrap";

export default function Root() {
  const [balance, setBalance] = useState(0);
  const [homeShown, setHomeShown] = useState(false);
  const [cAShown, setCAShown] = useState(false);
  const [depShown, setDepShown] = useState(false);
  const [withdrawShown, setWithdrawShown] = useState(false);
  const [allDataShown, setAllDataShown] = useState(false);
  

    return (
      <>
      <BalanceContext.Provider value={{balance, setBalance}}>
        <div>

         {/* Took out 'bg-body-secondary' from <nav className> Added 'navbar-dark bg-dark' ... took out 'bg-dark and replaced with 'pink'*/}
<nav style={{borderBottom: 'solid 1.5px green', position: 'fixed', width: '100%', backgroundColor: '#ffc4cd', fontFamily: 'Forum, cursive', fontSize: '1.5rem'}} className="nav nav-pills nav-justified navbar navbar-expand-lg navbar-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand " to={'home'} style={{fontFamily: 'Architects Daughter, cursive', fontSize: '2rem', color: 'lightblue', textShadow: '1.5px 1.5px black', display: 'flex', flexDirection: 'column', alignitems: 'center' }}>
      <h1>PIGGY BANK</h1>
      <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid .5px black', alignSelf: 'center'}} src={Pig_Logo} alt="Logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarScroll" style={{ marginLeft: '1%'}}>
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: "100px"}}>
        
        <li className="nav-link" onMouseEnter={() => setHomeShown(true)} onMouseLeave={() => setHomeShown(false)}>
          <NavLink to={'home'}  className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Home</NavLink>
          {homeShown && (<div style={{borderRadius: '5px', fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center', padding: '2%'}}>Oink Oink! Welcome to the sty!</div>)}
        </li>
        
        <li className="nav-link" onMouseEnter={() => setCAShown(true)} onMouseLeave={() => setCAShown(false)}>
         <NavLink to={'create-account'}  className={({isActive}) => {
          return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Create Account</NavLink>
          {cAShown && (<div style={{borderRadius: '5px', fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center', padding: '2%'}}>Create your Piggy Bank here!</div>)}
        </li>
        
        <li className="nav-link" onMouseEnter={() => setDepShown(true)} onMouseLeave={() => setDepShown(false)}>
         <NavLink to={'deposit'}  className={({isActive}) => {
          return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Deposit</NavLink>
          {depShown && (<div style={{borderRadius: '5px', fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center', padding: '2%'}}>Feed the Piggy!</div>)}
        </li>

        <li className="nav-link" onMouseEnter={() => setWithdrawShown(true)} onMouseLeave={() => setWithdrawShown(false)}>
         <NavLink to={'withdraw'}  className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Withdraw</NavLink>
          {withdrawShown && (<div style={{borderRadius: '5px', fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center', padding: '2%'}}>Break the Piggy!</div>)}
        </li>

        <li className="nav-link" onMouseEnter={() => setAllDataShown(true)} onMouseLeave={() => setAllDataShown(false)}>
         <NavLink to={'all-data'}  className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>All Data</NavLink>
          {allDataShown && (<div style={{borderRadius: '5px', fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center', padding: '2%'}}>User's Piggy Bank info.</div>)}
        </li>
    

            </ul> 
          </div>
        </div>
      </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </BalanceContext.Provider>
      </>
    );
  }
