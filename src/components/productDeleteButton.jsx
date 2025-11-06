import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

export default function ProductDeleteButton(props){

    const productID = props.productID;
    const reload= props.reload;
    const[isMessageopen, setIsMessageopen] = useState(false);
    const[isDeleting, setIsDeleting] = useState(false)

    async function handleDelete(){
        setIsDeleting(true);
                     const token = localStorage.getItem("token");
                      axios
                        .delete(
                          import.meta.env.VITE_BACKEND_URL + "/products/" + productID,
                          {
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                          }
                        )
                        .then(() => {
                          toast.success("Product Deleted Successfully");
                          setIsDeleting(false);
                          setIsMessageopen(false);
                          reload();
                        }).catch(()=>{
                            toast.error("Failed to delete the product");
                            setIsDeleting(false)
                        });

        
    }
    return(
        <>
                            <button onClick={()=>{setIsMessageopen(true)}}className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
                            title="Delete Product"
                          >
                            <BiTrash className="text-xl" />
                          </button>
                          {isMessageopen&&<div className="w-[100vw] h-screen fixed z-[9999] top-0 left-0 bg-black/55 flex justify-center items-center"> 
                            <div className="w-[600px] h-[400px] bg-primary rounded-2xl relative flex flex-col items-center justify-center">
                            <button onClick={()=>{setIsMessageopen(false)}} className="w-[40px] h-[40px] bg-red-500 rounded-full text-white text-xl font-bold cursor-pointer hover:bg-red-800 absolute right-[-32px] top-[-32px]">
                             x
                            </button>
                            

                            <h1 className="text-2xl mb-6 text-center">Are you shure you want to delete the product {productID}</h1>
                            <div className="flex justify-center gap-4 mt-6">
                            <button
                            disabled={isDeleting}
                            onClick={handleDelete} 
                            className="p-2 rounded-full bg-red-100 text-red-600 px-4 py-2 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-sm cursor-pointer">
                              Delete
                            </button>
                            <button onClick={() => setIsMessageopen(false)}className="p-2 rounded-full bg-gray-100 text-gray-600 px-4 py-2 hover:bg-gray-600 hover:text-white transition-all duration-200 shadow-sm cursor-pointer">
                              Cancel
                            </button>
                            </div>


                          </div>
                          </div>}

                          </>
    )
}

                //   <button
                //     onClick={() => {
                //       const token = localStorage.getItem("token");
                //       axios
                //         .delete(
                //           `${import.meta.env.VITE_BACKEND_URL}/products/${item.productID}`,
                //           {
                //             headers: {
                //               Authorization: `Bearer ${token}`,
                //             },
                //           }
                //         )
                //         .then(() => {
                //           toast.success("Product Deleted Successfully");
                //           setLoaded(false)
                //         });
                //     }}
                //     className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
                //     title="Delete Product"
                //   >
                //     <BiTrash className="text-xl" />
                //   </button>