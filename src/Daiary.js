import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.js';

const Daiary = (props) => {
  const [imageUrl, setImageUrl] = useState("")
  var WeekChars = [ "日", "月", "火", "水", "木", "金", "土" ];
  var dObj = new Date(props.diaryDate);
  var wDay = dObj.getDay();
  console.log("今日は、" + WeekChars[wDay] + "です。");
  
  var datelist = props.diaryDate.split('-');
  var year = datelist[0]
  var month = datelist[1]
  var day = datelist[2]
  console.log(year)
  console.log(month)
  console.log(day)

  useEffect(() => {
    if(props.imageUrl !== "" || props.imageUrl != null){
      setImageUrl(props.imageUrl)
    }
  },[])
  
  const getImage = async() => {
    if(props.imageUrl === "" || props.imageUrl == null){
      // const response = axios.post("https://converttexttoimage.azurewebsites.net/api/HttpTrigger1?",{
      //   "content": props.content,
      //   "userId": props.userId,
      //   "diaryDate": "2022-11-12"
      // })
      // const data = response.data
      // console.log(data)
      // setImageUrl(data)
      alert("実行されたよ")
    }else {
      alert("実行されなかったよ")
    }
    
  }
  
  return (
    <div className=" h-32 boxDiv mb-4  flex border-slate-300 rounded-md drop-shadow-lg mx-auto">

      <div className = "boxDate text-2xl items-center justify-center flex bg-white border-slate-300 border-r-2  h-full">
        <div className=''>{day +" / (" + WeekChars[wDay] + ")"}</div>
      </div>
      
      <img 
        alt={props.imageUrl}
        className ="boximg border-slate-300 h-full bg-green-300 mx-1"  
        src={props.imageUrl === "" || props.imageUrl == null ? `${process.env.PUBLIC_URL}/plus.jpg` : imageUrl} 
        onClick={getImage}
      />
      
      
      <div className ="boxright bg-white flex border-slate-300 h-full">
          <div className='w-1/6'>
            <div className = "bg-white border-2 p-2 h-1/3 w-full rounded-md">{props.weather}</div>
            <div className = "bg-white border-2 p-2 h-1/3 w-full rounded-md"></div>
            <div className = "bg-white border-2 p-2 h-1/3 w-full rounded-md"></div>
          </div>

          <div className="border-white border-2 p-2 w-5/6 underline boxcontent h-full">
            {props.content}
          </div>
      </div>

    </div>
  );
};

export default Daiary;