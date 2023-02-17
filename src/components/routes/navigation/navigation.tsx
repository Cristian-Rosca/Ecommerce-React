import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from '../../../assets/imperium-icon-black.svg';
import './navigation.styles.scss';
import { signOutAuthUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser)

    const  isCartOpen = useSelector(selectIsCartOpen)


    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <div>
                        <Logo className="logo" />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    { currentUser ?
                        <span className="nav-link" onClick={signOutAuthUser}>Sign Out</span>
                        :
                        <Link className="nav-link" to='/auth'>
                            Sign In
                        </Link>
                    }
                    <CartIcon />
                </div>
               { isCartOpen ? <CartDropdown /> : ""}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;