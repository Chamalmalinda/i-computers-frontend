import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "../components/loader";
import ProductCard from "../components/productCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/products")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
          setLoaded(true);
        });
    }
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-gray-50">
      {!loaded ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-col items-center px-4 py-6">
          {/* Search Bar - Sticky & Responsive */}
          <div className="w-full max-w-4xl sticky top-0 bg-white flex justify-center items-center py-4 mb-6 shadow-md z-10 rounded-lg">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-md px-5 py-3 border border-secondary/30 rounded-full outline-none text-base focus:border-accent transition"
              onChange={async (e) => {
                if (e.target.value === "") {
                  setLoaded(false);
                  await axios
                    .get(import.meta.env.VITE_BACKEND_URL + "/products")
                    .then((response) => {
                      console.log(response.data);
                      setProducts(response.data);
                      setLoaded(true);
                    });
                  setLoaded(true);
                } else {
                  await axios
                    .get(
                      import.meta.env.VITE_BACKEND_URL +
                        "/products/search/" +
                        e.target.value
                    )
                    .then((response) => {
                      console.log(response.data);
                      setProducts(response.data);
                    });
                  setLoaded(true);
                }
              }}
            />
          </div>

          {/* Products Grid - Fully Responsive */}
          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {products.map((item) => {
              return <ProductCard key={item.productID} product={item} />;
            })}
          </div>

          {/* No Results Message */}
          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-secondary/70">No products found matching your search.</p>
              <p className="text-sm text-secondary/50 mt-2">Try different keywords or browse all products.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}