import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from '../../../assets/imperium-icon-black.svg';
import './navigation.styles.scss';
import { signOutAuthUser } from "../../../utils/firebase/firebase.utils";
import { UserContext } from '../../../contexts/user.context';

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    console.log(currentUser);


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
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;