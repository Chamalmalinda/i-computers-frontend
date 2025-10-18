import "./App.css";

function App() {
  return(

    <div  className="border w-[600px] h-[600px] bg-gray-400">
      
      <div className="w-[500px] h-[500px] bg-yellow-200 flex flex-col items-center justify-center">

        <div className="w-[100px] h-[100px] bg-blue-300">

        </div>

        <div className="w-[100px] h-[100px] bg-red-300 fixed left-[550px] top-[550px]">

        </div>

        <div className="w-[100px] h-[100px] absolute left-[500px] bottom-[500px] bg-green-300">

        </div>

        <div className="w-[100px] h-[100px] bg-orange-300">

        </div>

      </div>

    </div>
    
  );
}

export default App;