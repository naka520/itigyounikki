import{createContext,useState,useRef, useLayoutEffect } from "react";
import React from "react";
import axios from 'axios';
import './App.css';
import Modal from './Modal';
import Daiary from './Daiary';


export const DiaryContext = createContext()

function App() {
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
      const response = await axios.get('https://azuretutorial20221105000814.azurewebsites.net/api/TableClientInput?code=mlstwRm607cu-B8qF7DrrEMBRmgs7oZ1zuItjISOoxfwAzFurTrkUQ==', {
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

  return (
    <div className="App"> 

      {/* showが表示をつかさどる変数。コンポーネント内で書き換えを行っている。 */}
      <Modal show={modal} title="My Modal" close={Toggle} />       
       <div className="border-white border-4">
          {diarys.map((item, index) => {
            return (
                <Daiary key={index} weather={weather} imageUrl={item.imageUrl} diaryDate={item.diaryDate} userId={item.userId} content={item.content} />);
          })}
        </div>
       
        {/* <ul className="todos">
          {diarys.map((item, index ) => {
            return (
              <li key={index}>{item.content}</li>
            );
          })}
        </ul> */}

        {/* 前までの知識で書いた実装↓ */}
        {/* <div className="white">
           <li className="whi2">
          <TodoList diarys = {diarys} toggleTodo ={toggleTodo}/>
          </li>
          <li className="whi2">
          <input type="text" ref={todoNameRef}/>
          </li>
            <li className="whi2">
              <button onClick={handleAddTodo}>タスクを追加</button>
            </li>
            <li className="whi2">
            <button onClick={handleClear}>完了したタスクの削除</button>
            </li>
            <li className="whi2">
              残りのタスク:{diarys.filter((todo) => !todo.completed).length} 
            </li> 
        </div> */}
   </div>
   
    );  
}

export default App;
