

/** 
 * types of buttons 
 * primary
 * secondary 
 * google
*/

import './button.styles.scss';

const Button_Type_Class = {
    google: 'google-sign-in',
    secondary: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`${Button_Type_Class[buttonType]} button-container`} {...otherProps}>{children}</button>
    )
    
}

export default Button