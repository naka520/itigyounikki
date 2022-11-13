import './App.js';

const Daiary = (props) => {

  return (
    <div className="boxDiv h-24 bg-white flex border-slate-300 border-2 rounded-md mx-auto">

      <div className = "boxDate bg-white border-5 border-slate-300 border-2 h-full drop-shadow-lg">
        {props.diaryDate}
      </div>
      
      <div className ="boxli1 bg-white border-2 h-full drop-shadow-lg">画像</div>
      
      
      <div className ="boxli2 bg-white border-2 flex h-full drop-shadow-lg">
          <div className='w-1/6'>
            <div className = "bg-white border-2 p-2 h-1/3 w-full drop-shadow-lg rounded-md"></div>
            <div className = "bg-white border-2 p-2 h-1/3 w-full drop-shadow-lg rounded-md"></div>
            <div className = "bg-white border-2 p-2 h-1/3 w-full drop-shadow-lg rounded-md"></div>
          </div>

          <div className="border-white border-4 p-2 w-5/6">

            {props.content}
            </div>
      </div>
      
      {/* <div className = "boxul bg-green-500 flex border-purple-500 border-4 h-full">
      


      </div> */}

    </div>
  );
};

export default Daiary;