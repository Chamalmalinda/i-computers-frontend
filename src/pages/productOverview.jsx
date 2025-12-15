import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../components/loader";
import axios from "axios";
import toast from "react-hot-toast";
import ImageSlider from "../components/imageSlider";
import { CgChevronRight } from "react-icons/cg";
import { addToCart } from "../utils/cart";

export default function ProductOverview() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); 

  useEffect(() => {
    if (status === "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/products/" + params.productID)
        .then((response) => {
          setProduct(response.data);
          setStatus("success");
        })
        .catch(() => {
          toast.error("Product Not Found");
          setStatus("error");
        });
    }
  }, []);

  return (
    <>
      {status === "loading" && <Loader />}

      {status === "error" && (
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-red-600">Error loading product.</h1>
        </div>
      )}

      {status === "success" && (
        <div className="w-full min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      
              <div className="order-1 lg:order-none">
                <div className="sticky top-4 lg:top-8">
                  <ImageSlider images={product.images} />
                </div>
              </div>

           
              <div className="flex flex-col justify-center space-y-8 order-2 lg:order-none">
           
                <h1 className="text-3xl sm:text-4xl lg:hidden font-black text-secondary tracking-tight">
                  {product.name}
                </h1>

             
                <h1 className="hidden lg:block text-4xl lg:text-5xl xl:text-6xl font-black text-secondary leading-tight">
                  {product.name}
                </h1>

             
                <p className="text-sm text-secondary/60 uppercase tracking-wider">
                  #{product.productID}
                </p>

             
                <div className="flex items-center text-lg text-secondary/80">
                  <CgChevronRight className="mr-2 text-accent" />
                  <span className="font-medium">{product.category}</span>
                </div>

              
                {product.altNames && product.altNames.length > 0 && (
                  <p className="text-md text-secondary/70 italic">
                    {product.altNames.join(" • ")}
                  </p>
                )}

            
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-secondary/10">
                  <p className="text-base lg:text-lg text-secondary/90 leading-relaxed">
                    {product.description}
                  </p>
                </div>

     
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                  {product.labelledPrice > product.price && (
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-secondary/60 line-through">
                        LKR {product.labelledPrice.toLocaleString()}
                      </span>
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {Math.round(((product.labelledPrice - product.price) / product.labelledPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                  <h2 className="text-4xl lg:text-5xl font-black text-accent">
                    LKR {product.price.toLocaleString()}
                  </h2>
                </div>

        
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    onClick={() => {
                      addToCart(product, 1);
                    }}
                    className="flex-1 bg-accent text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      navigate("/checkout", {
                        state: [
                          {
                            productID: product.productID,
                            name: product.name,
                            price: product.price,
                            labelledPrice: product.labelledPrice,
                            image: product.images[0],
                            quantity: 1,
                          },
                        ],
                      });
                    }}
                    className="flex-1 border-2 border-accent text-accent font-bold text-lg px-8 py-4 rounded-xl bg-white hover:bg-accent hover:text-white shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}