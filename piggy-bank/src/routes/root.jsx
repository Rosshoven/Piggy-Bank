import { Link, Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import one_gold_coin_piggy from '../images/one_gold_coin_piggy.jpeg';
import Pig_Logo from '../images/Pig_Logo.png';
import { BalanceContext } from "./balance-context";
import React, { useState } from "react";
import { Popover } from "bootstrap";

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
        
        <li className="nav-link">
          <NavLink to={'home'} onMouseEnter={() => setHomeShown(true)} onMouseLeave={() => setHomeShown(false)} className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Home</NavLink>
          {homeShown && (<div style={{fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center'}}>There's no place like home.</div>)}
        </li>

        <li className="nav-link">
         <NavLink to={'create-account'} onMouseEnter={() => setCAShown(true)} onMouseLeave={() => setCAShown(false)} className={({isActive}) => {
          return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Create Account</NavLink>
          {cAShown && (<div style={{fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center'}}>Create your Piggy Bank here!</div>)}
        </li>

        <li className="nav-link">
         <NavLink to={'deposit'} onMouseEnter={() => setDepShown(true)} onMouseLeave={() => setDepShown(false)} className={({isActive}) => {
          return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Deposit</NavLink>
          {depShown && (<div style={{fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center'}}>Feed the Piggy Bank!</div>)}
        </li>

        <li className="nav-link">
         <NavLink to={'withdraw'} onMouseEnter={() => setWithdrawShown(true)} onMouseLeave={() => setWithdrawShown(false)} className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Withdraw</NavLink>
          {withdrawShown && (<div style={{fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center'}}>Break the Piggy Bank!</div>)}
        </li>

        <li className="nav-link">
         <NavLink to={'all-data'} onMouseEnter={() => setAllDataShown(true)} onMouseLeave={() => setAllDataShown(false)} className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>All Data</NavLink>
          {allDataShown && (<div style={{fontSize: '1rem', color: 'black', backgroundColor: 'antiquewhite', marginTop: '3%', display: 'flex', justifyContent: 'center'}}>User's Piggy Bank info.</div>)}
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
