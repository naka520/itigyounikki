import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.js';

const Daiary = (props) => {
  const [imageUrl, setImageUrl] = useState("")
  const [todayWeather, setTodayWeather] = useState("")
  var WeekChars = [ "日", "月", "火", "水", "木", "金", "土" ];
  var dObj = new Date(props.diaryDate);
  console.log(dObj)
  var wDay = dObj.getDay();
  console.log("今日は、" + WeekChars[wDay] + "です。");
  
  var datelist = props.diaryDate.split('-');
  var year = datelist[0]
  var month = datelist[1] === "12" ? "0" : datelist[1]
  var day = datelist[2]
  console.log(year)
  console.log(month)
  console.log(day)

  useEffect(() => {
    // if(dObj.getDate() === day && dObj.getFullYear() === year && dObj.getMonth() === month){
    //   setTodayWeather(props.weather)
    // }else {
    //   alert("実行されませんでした.")
    // }
    if(props.imageUrl !== "" || props.imageUrl != null){
      setImageUrl(props.imageUrl)
    }
  },[])

  const getImage = async() => {
    if(props.imageUrl === "" || props.imageUrl == null){
      const response = await axios.post("https://converttexttoimage.azurewebsites.net/api/HttpTrigger1?",{
        "content": props.content,
        "userId": props.userId,
        "diaryDate": props.diaryDate
      })
      const data = response.data
      console.log(data)
      setImageUrl(data)
    }else{
      alert("実行しません")
    }
  }

  const handleModal = () => {
    if((props.content == null || props.content === "") && !props.modal){
      props.setModal(true)
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

          <div 
            className="border-white border-2 p-2 w-5/6 underline boxcontent h-full"
            onClick={handleModal}
          >
            {props.content == null || props.content === "" ? "+" : props.content}
          </div>
      </div>

    </div>
  );
};

export default Daiary;