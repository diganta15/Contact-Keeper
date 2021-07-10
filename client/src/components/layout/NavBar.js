import React from 'react';
import PropTypes from 'prop-types'


export const NavBar = ({title,icon}) => {
    return (
        <div className="bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </div>
    )
}

NavBar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string,
}

NavBar.defaultProps = {
    title:'Contact Keeper',
    icon:'fas fa-id-card-alt'
}