import { LinkField } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import React from 'react';
import styled from 'styled-components';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
interface ButtonProps {
    buttonLink : LinkField;
    buttonText : string | null;
    className
}

/**
 * 
 */
const Button = ({buttonLink, buttonText, className}: ButtonProps): JSX.Element => {
    return <PrismicNextLink field={buttonLink} className={className}>
                  {buttonText}
                </PrismicNextLink>;
}
// #endregion

export default Button;