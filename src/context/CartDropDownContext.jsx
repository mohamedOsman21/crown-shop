import { createContext, useState } from "react";


export const CartDropDownContext = createContext({
    isCartOpen: true,
    setIsCartOpen: () => null,
})

export const CartDropDownProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(null);
    const value = {isCartOpen, setIsCartOpen};

    return <CartDropDownContext.Provider value={value} > {children} </CartDropDownContext.Provider>
}