import Products from './Products.jsx';

function ProductsGrid({ products, loadCart }) {

    

    return (
        <div className="products-grid">
            {products.map((product) => {
                return (
                    <Products product={product} loadCart={loadCart} />
                );
            })}
        </div >
    );
}

export default ProductsGrid;