import './App.js';

const Daiary = (props) => {

  return (
    <div className="boxDiv h-24 bg-white flex border-slate-300 border-2 rounded-md">

      <div className = "boxDate bg-white border-5 border-slate-300 border-2 h-full drop-shadow-lg">
        {props.diaryDate}
      </div>
      
      <div className ="boxli1 bg-white border-2 h-full drop-shadow-lg">画像</div>
      
      
      <div className ="boxli2 bg-white border-2 flex h-fulldrop-shadow-lg">
          <div>
            <div className = "boxli3 bg-white border-2 p-2 h-1/3"></div>
            <div className = "boxli3 bg-white border-2 p-2 h-1/3"></div>
            <div className = "boxli3 bg-white border-2 p-2 h-1/3"></div>
          </div>

          <div className="border-white border-4 p-2 w-full">

            {props.content}
            </div>
      </div>
      
      {/* <div className = "boxul bg-green-500 flex border-purple-500 border-4 h-full">
      


      </div> */}

    </div>
  );
};

export default Daiary;