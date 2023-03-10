
import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"
import {useNavigate, Link } from "react-router-dom"
export default function Login(){
    let Navigate=useNavigate();
    return(
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="logo.jpg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Brew & Bites
    </span>

    <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>


  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button >
      <div onClick={()=>{Navigate("/Signup")}}> SIGN UP</div>
    </Button>

    <Button>
      Sign in
    </Button>


   

    <Navbar.Toggle />
  </div>

</Navbar>)}