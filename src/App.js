import{createContext,useState,useRef, useLayoutEffect, useEffect } from "react";
import React from "react";
import axios from 'axios';
import './App.css';
import Modal from './Modal';
import Daiary from './Daiary';


export const DiaryContext = createContext()

function App() {
  const [urls, setUrls] = useState([])
  const [diarys, setDiarys] = useState([]);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const refFirstRef = useRef(true);
  const [weather, setWeather] = useState("");
  const refFirstRef2 = useRef(true);

  async function getWeather(){
    if (refFirstRef2.current) {
      refFirstRef2.current = false;
      return;
    }

    try {
      const response = await axios.get("https://weather.tsukumijima.net/api/forecast/city/400030")
      const data = response.data
      setWeather(() => data["forecasts"][0]["telop"])
      console.log(weather)
    }catch{
      console.error("取れません～～＾＾")
    }
  }

  async function getDiary(){

    //2回表示を防いでいる。デプロイ時にエラー吐くかも～^^
    if (refFirstRef.current) {
      refFirstRef.current = false;
      return;
    }

    try {
      const response = await axios.get('https://func-itigyounikki.azurewebsites.net/api/TableClientInput?code=KiZGn9g0HaPz8pyVCS2sHDtH8ua2_NnVGowx7dS2WVc6AzFudHv_xA==', {
        params: {
          // ここにクエリパラメータを指定する
          userId: "123456789"
        }
      });
      console.log(response.data);
      setDiarys(()=>[...response.data])
    }catch{
      console.error("取れません～～＾＾")
    }
  }
  
  useLayoutEffect(() => {
    getDiary()
    getWeather()
  },[])

  const toGarally = () => {
    for(let i = 0; i < diarys.length ; i++) {
      localStorage.setItem(`imageUrl${i}`,diarys[i].imageUrl)
    }
    window.location.href = "/garally"
  }

  return (
    <div className="App"> 

      {/* showが表示をつかさどる変数。コンポーネント内で書き換えを行っている。 */}
      <Modal show={modal} title="My Modal" close={Toggle} setDiarys={setDiarys}/>       
       <div className="border-white border-4 ">
          {diarys.map((item, index) => {
            return (
                <Daiary 
                  key={index} 
                  weather={weather} 
                  imageUrl={item.imageUrl} 
                  diaryDate={item.diaryDate} 
                  userId={item.userId} 
                  content={item.content} 
                  modal={modal}
                  setModal={setModal}
                  setDiarys={setDiarys}
                />);
          })}
        </div>
      <button className="add-btn" onClick={() => setModal(true)}>日記を追加</button>
      <button className="add-btn" onClick={toGarally}>ギャラリーへ</button>
   </div>
   
    );  
}

export default App;
