import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

export const NavBar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);
    const { isAuthenticated, logout, user, clearErrors } = authContext;
	const {clearContacts} = contactContext;
    const onLogout = () =>{
        logout();   
		clearContacts();
        clearErrors();
    }
	const authLinks = (
		<Fragment>
			<ul>
				{" "}
				<li>Hello {user && user.name}</li>
				<li>
					<a onClick={onLogout} href='#!'>
						<i className='fas fa-sign-out-alt'></i>{" "}
						<span className='hide-sm'>Logout</span>
					</a>
				</li>
			</ul>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<ul>
				<li>
					<Link to='/register'>Register</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
		</Fragment>
	);
	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>{isAuthenticated ? authLinks : guestLinks}</li>
			</ul>
		</div>
	);
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

NavBar.defaultProps = {
	title: "Contact Keeper",
	icon: "fas fa-id-card-alt",
};
