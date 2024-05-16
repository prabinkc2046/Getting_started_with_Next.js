import React from 'react'

const ProductDetailLayout = ({children}: {
    children: React.ReactNode,
}) => {
    return(
        <>
        {children}
        <footer>
            <h3>footer specific to product detail page</h3>
        </footer>
        </>
    )
}

export default ProductDetailLayout;