import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserData(){
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token != null){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/users/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response)=>{
                setUser(response.data);
            }).catch(()=>{
                setUser(null);
            })
        }
    },[])
    const [selectedOption, setSelectedOption] = useState("user");

    return (
        <>
            {
                user?
                <div className="w-[150px] flex flex-row">
                    <img src={user.image} referrerpolicy="no-referrer" className="w-[50px] rounded-full h-[50px]"/>
                    <select className="bg-transparent outline-none ml-2 mt- text-white" value={selectedOption}
                     onChange={
                        (e)=>{
                            
                            if(e.target.value == "logout"){
                                localStorage.removeItem("token");
                                window.location.href = "/login";
                            }else if(e.target.value == "my-orders"){
                                window.location.href = "/orders";
                            }
                            setSelectedOption("user")
                        }
                    }>
                        <option className="bg-accent" value={"user"}>{user.firstName}</option>
                        <option className="bg-accent" value={"logout"}>Logout</option>
                        <option className="bg-accent" value={"my-orders"}>My Orders</option>
                    </select>
                </div>:
                <div className="w-auto sm:w-[150px] flex flex-col sm:flex-row items-center">
    <Link to="/login" className="mx-2 my-1 sm:my-0 px-4 py-2 bg-white text-accent rounded-full">Login</Link> 
    <span className="hidden sm:inline">/</span>
    <Link to="/register" className="mx-2 my-1 sm:my-0 px-4 py-2 bg-white text-accent rounded-full">Register</Link>
</div>
            }
        </>
    )


}