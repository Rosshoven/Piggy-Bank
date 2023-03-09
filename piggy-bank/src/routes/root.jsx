import { Link, Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import one_gold_coin_piggy from '../images/one_gold_coin_piggy.jpeg';
import Pig_Logo from '../images/Pig_Logo.png';

export default function Root() {


    return (
      <>
        <div>
         
         {/* Took out 'bg-body-secondary' from <nav className> Added 'navbar-dark bg-dark' ... took out 'bg-dark and replaced with 'pink'*/}
<nav style={{borderBottom: 'solid 1.5px green', position: 'fixed', width: '100%', backgroundColor: 'lightpink'}} className="nav nav-pills nav-justified navbar navbar-expand-lg navbar-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand " to={'home'}>
      <img style={{width:'70px', height: '70px', borderRadius: '50%'}} src={Pig_Logo} alt="Logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: "100px"}}>
        
        <li className="nav-link">
          <NavLink to={'home'} className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Home</NavLink>
        </li>

        <li className="nav-link">
         <NavLink to={'create-account'} className={({isActive}) => {
          return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Create Account</NavLink>
        </li>

        <li className="nav-link">
         <NavLink to={'deposit'} className={({isActive}) => {
          return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Deposit</NavLink>
        </li>

        <li className="nav-link">
         <NavLink to={'withdraw'} className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>Withdraw</NavLink>
        </li>

        <li className="nav-link">
         <NavLink to={'all-data'} className={({isActive}) => {
            return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
          }}>All Data</NavLink>
        </li>
    

      </ul> 
    </div>
  </div>
</nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }
