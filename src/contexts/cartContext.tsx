import { createContext, useState } from "react"

type CartContext = {
    isCartOpen: boolean,
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const iCartState = {
    isCartOpen: false,
    setIsCartOpen: () => { }
}

export const CartContext = createContext<CartContext>(iCartState)

const CartProvider = ({children} : any) => {

    const [isCartOpen, setIsCartOpen] = useState(false)

    return ( 
    <CartContext.Provider value={{isCartOpen, setIsCartOpen}}>
        {children}
    </CartContext.Provider> 
    );
}
 
export default CartProvider;