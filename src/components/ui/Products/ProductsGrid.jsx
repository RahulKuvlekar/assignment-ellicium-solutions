const ProductsGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 auto-rows-max gap-4 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:px-4 xl:grid-cols-4 2xl:grid-cols-5 justify-center">
      {children}
    </div>
  );
};

export default ProductsGrid;
