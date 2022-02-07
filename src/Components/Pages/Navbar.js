import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return(
            <>
              <nav className={'container'}>
                <ul>
                    <li>
                        <Link className={'text'} to={'/'}>
                            Main
                        </Link>
                        <Link className={'text'} to={'/categories'}>
                            Categories
                        </Link>
                        <Link className={'text'} to={'/contact'}>
                            Contact
                        </Link>
                    </li>
                </ul>
              </nav>
            </>
        )
    }
}

export default Navbar;