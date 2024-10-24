import React from 'react';
import PropTypes, { object } from 'prop-types';
import styles from './styles.scss';

const NavbarItems = (props) => {
  const { menuData } = props;
  return (
    <div className={styles.navBarItemsContainer}>
      <div className={styles.navBarItems}>
        {menuData?.map(({ title = '' } = {}) => (
          <div className={styles.renderItem}>
            <span>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

NavbarItems.propTypes = {
  menuData: PropTypes.arrayOf(object),
};

NavbarItems.defaulProps = {
  menuData: [],
};

export default NavbarItems;
