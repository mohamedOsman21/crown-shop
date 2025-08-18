

/** 
 * types of buttons 
 * primary
 * secondary 
 * google
*/

import './button.styles.scss';

export const Button_Type_Class = {
    google: 'google-sign-in',
    secondary: 'inverted'
}

const Button = ({children, isLoading,  buttonType, ...otherProps}) => {
    return (
        <button disabled={isLoading} className={`${Button_Type_Class[buttonType]} button-container`} {...otherProps}>
            {isLoading? <span className="button-spinner"></span> : children}
            </button>
    )
    
}

export default Button