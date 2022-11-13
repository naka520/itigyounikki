import TodoList from "./TodoList";
import{createContext,useState,useRef, useEffect, useLayoutEffect,View} from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import axios from 'axios';
import './App.css';
import Modal from './Modal';
import Daiary from './Daiary';
import Cat from "./Cat";


export const DiaryContext = createContext()

function App() {
  
  // const [diarys, setDiarys] = useState([{id: uuidv4(),name: "Todo1", completed: false }]);
  const [diarys, setDiarys] = useState([]);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const refFirstRef = useRef(true);
  const [weather, setWeather] = useState("");
  const refFirstRef2 = useRef(true);

  // async function getWeather(){
  //   if (refFirstRef2.current) {
  //     refFirstRef2.current = false;
  //     return;
  //   }

  //   try {
  //     await axios.get("https://weather.tsukumijima.net/api/forecast/city/400030")
  //     .then(res => setWeather(res.data.forcasts[0].telop))
  //     .catch(error => console.log(error));
      
  //     console.log(weather)
      
  //   }catch{
  //     console.error("取れません～～＾＾")
  //   }
  // }

  async function getDiary(){

    //2回表示を防いでいる。デプロイ時にエラー吐くかも～^^
    if (refFirstRef.current) {
      refFirstRef.current = false;
      return;
    }

    try {
      var response = await axios.get('https://azuretutorial20221105000814.azurewebsites.net/api/TableClientInput?code=mlstwRm607cu-B8qF7DrrEMBRmgs7oZ1zuItjISOoxfwAzFurTrkUQ==', {
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
  },[])

  useEffect(() => {
    async function getWeather(){
      if (refFirstRef2.current) {
        refFirstRef2.current = false;
        return;
      }
      try {
        await axios.get("https://weather.tsukumijima.net/api/forecast/city/400030")
        .then(res => setWeather(() => res.data.forcasts[0].telop))
        .catch(error => console.log(error));
        
        console.log(weather)
        
      }catch{
        console.error("取れません～～＾＾")
      }
    }
    getWeather()
  },[])

  const toggleTodo = (id) => {

    const newTodos = [...diarys];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setDiarys(newTodos);
    //idでチェックボックスの管理
    console.log("べんりだよー")
    //コンソールはF12の画面でデバッグできるよー
  };
 
  const todoNameRef = useRef();
  const handleAddTodo = (e) =>{

     const name = todoNameRef.current.value;
     if(name === "")return;
     setDiarys((prevTodos) => {

      return [...prevTodos,{id: uuidv4(),name: name, completed:false }];
      //...は三要素のオブジェクトが入る
         });

     todoNameRef.current.value = null;
  };

  const handleClear = () => {
    // const newTodos = diarys.filter((todo) => !todo.completed);
    // //既存の配列からしていされた条件に該当する要素を持つ配列を作成
    // setDiarys(newTodos);
  };

  return (
  
    <div className="App"> 

      {/* showが表示をつかさどる変数。コンポーネント内で書き換えを行っている。 */}
      <Modal show={modal} title="My Modal" close={Toggle} />

      <Cat />
       
       <div className="border-white border-4">
          {diarys.map((item, index) => {
            return (
                <Daiary key={index} weather={weather} diaryDate={item.diaryDate} content={item.content} />
                // <Daiary key={index} weather={weather.forecast[0].telop} diaryDate={item.diaryDate} content={item.content} />
            );
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
