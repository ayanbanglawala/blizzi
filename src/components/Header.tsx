import React from 'react';
import styled from 'styled-components';
import { BlizziLogo } from './BlizziLogo';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
interface HeaderProps {
}

/**
 * 
 */
const Header = ({}: HeaderProps): JSX.Element => {
    return <header className="-mb-28 flex justify-center py-4">
        <BlizziLogo className='z-10 h-20 cursor-pointer text-sky-800' />
    </header>;
}
// #endregion

export default Header;