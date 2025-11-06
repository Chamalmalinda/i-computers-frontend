import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import uploadFile from "../utils/mediaUpload";

const url= "https://vlbcoqjcylqnnxrbjjsj.supabase.co";

const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsYmNvcWpjeWxxbm54cmJqanNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTMyNTAsImV4cCI6MjA3NzkyOTI1MH0.P4s7Pkh-AJAY_7ccGvYYZbnocK8SiT8YkWHiByk1Voo";

const superbase = createClient(url, key)


export default function TestPage() {

const[file, setFile]=useState(null);
async function handleUpload(){

  const url= await uploadFile(file)
  console.log(url);

}

  return (
    <div className="w-full h-full flex justify-center items-center">
      <input type="file" onChange={(e)=>{

        setFile(e.target.files[0]);

      }}/>

      <button onClick={handleUpload}className="bg-red-500 p-2 text-white rounded-3xl">Upload</button>

    </div>
  );
}
