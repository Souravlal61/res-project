
import { Link } from "react-router-dom"
import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"
export default function Flownavbar(){
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
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button>
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={false}
    >

    <Link to="/home">
      Home
      </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/about">
      About
      </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/menu">
      Menu
      </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/reservations">
      Reservations
      </Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/gift">
      Gift card
      </Link>
      </Navbar.Link>
    <Navbar.Link>
    <Link to="/contact">
       Contact
      </Link>
    </Navbar.Link>


   

  </Navbar.Collapse>
</Navbar>
  )
}