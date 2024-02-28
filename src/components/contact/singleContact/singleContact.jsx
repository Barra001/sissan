import React from 'react';
import PropTypes from 'prop-types';
import theme from './singleContact.theme.module.scss';

function SingleContact({
  country, phone, email, address, flag,
}) {
  return (
    <div className={theme.mainContainer}>
      <div className={theme.titleRow}>
        <span>{country}</span>
        <img src={flag} alt="Paraguay" />
      </div>

      <div className={theme.contactRow}>
        <span className={`${theme.icon} material-symbols-outlined`}>call</span>
        <span className={theme.contactText}>{phone}</span>
      </div>

      <div className={theme.contactRow}>
        <span className={`${theme.icon} material-symbols-outlined`}>
          mail
        </span>
        <span className={theme.contactText}>{email}</span>
      </div>

      <div className={theme.contactRow}>
        <span className={`${theme.icon} material-symbols-outlined`}>
          location_on
        </span>
        <span className={theme.contactText}>
          {address}
        </span>
      </div>

    </div>
  );
}

SingleContact.propTypes = {
  country: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default SingleContact;
