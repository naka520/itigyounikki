import './Modal.css';
import{ useContext,useState,useRef, useEffect} from "react";
import axios from 'axios';
import { AppDiary } from './App'

const Modal = ({ show, close , setDiarys}) => {


//   const [text, setText] = useState({
//     whether: '',
//     date: '',
//     diary: '',
//     userId: "123456789",
// });

var date = new Date("yyyy-mm-dd");
const [diaryDate, setdiaryDate] = useState('2022-11-12');
const [content, setcontent] = useState('くそが！');
const [name, setname] = useState('hoge');
const [userId, setuserId] = useState('123456789');


async function postDiary(){
  console.log(diaryDate)
  console.log(content)
  console.log(name)
  console.log(userId)

  try {
    var response = await axios.post("https://func-itigyounikki.azurewebsites.net/api/TableClientOutput?code=z7VjRaBx-oiHZ7cQX9Fggkoe1PVUPr25m3VcXg8L-849AzFutXwpmA==", {
      "content": content,
      "name": name,
      "imageUrl": "",
      "userId": userId,
      "diaryDate": diaryDate
    });
  }catch{
    console.error(response)
  }

  console.log(response);
}

const handleSubmit = async() => {
  console.log(diaryDate);
  console.log(content);

  postDiary();
  const response = await axios.get('https://func-itigyounikki.azurewebsites.net/api/TableClientInput?code=KiZGn9g0HaPz8pyVCS2sHDtH8ua2_NnVGowx7dS2WVc6AzFudHv_xA==', {
    params: {
      // ここにクエリパラメータを指定する
      userId: "123456789"
    }
  });
  setDiarys(() => [...response.data])
}

    return (
      <div>
       {
       show ?
       
       <>
          <div className="modal">
              <button className="close" onClick={() => close()}>
               x close
              </button>
            <div onClick={(e) => e.stopPropagation()}>

            <div className ="list">
              <p>日付</p>
              <input className ="listmini" type="date" value={diaryDate}
              onChange={(event) => setdiaryDate(event.target.value)} />
              <p>{diaryDate}</p>
            </div>
            <div className ="list">
              <p>日記</p>
              <input className ="listmini"  value={content} 
              onChange={(event) => setcontent(event.target.value)} />
              <p>{content}</p>
              {/* <input type="text" ref={todoNameRef}/> */}
              
            </div>

            <footer>
              <button className="submit"  onClick={() => {
                close();
                handleSubmit()
                }}>追加</button>
            </footer>
          </div>
        </div>
      </>
      : null
      }
      </div>
    );
  };
  
  export default Modal;