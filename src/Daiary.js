import './App.js';

const Daiary = (props) => {

  // const [weather, setWeather] = useState({});
  // const refFirstRef2 = useRef(true);

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

  // async function getWeather(){
  //   if (refFirstRef2.current) {
  //     refFirstRef2.current = false;
  //     return;
  //   }

  //   try {
  //     var response2 = await axios.get("https://weather.tsukumijima.net/api/forecast/city/400030");
  //     console.log(response2.data);

  //     setWeather(response2.data)
  //     console.log(weather)
      
  //   }catch{
  //     console.error("取れません～～＾＾")
  //   }
  // }

  // useLayoutEffect(() => {
  //   getWeather()
  // },[])

  return (
    <div className=" h-32 boxDiv mb-4  flex border-slate-300 rounded-md drop-shadow-lg mx-auto">

      <div className = "boxDate text-2xl items-center justify-center flex bg-white border-slate-300 border-r-2  h-full">
        <div className=''>{day +" / (" + WeekChars[wDay] + ")"}</div>
      </div>
      
      <img className ="boximg border-slate-300 h-full bg-green-300 mx-1"  src="https://replicate.delivery/pbxt/1WOzwsHHje0HAa97roZxncFG2SX8EB7JWFhnfXveREc9ue8fB/out-0.png" />
      
      
      <div className ="boxright bg-white flex border-slate-300 h-full">
          <div className='w-1/6'>
            <div className = "bg-white border-2 p-2 h-1/3 w-full rounded-md">{props.weather}</div>
            <div className = "bg-white border-2 p-2 h-1/3 w-full rounded-md"></div>
            <div className = "bg-white border-2 p-2 h-1/3 w-full rounded-md"></div>
          </div>

          <div className="border-white border-2 p-2 w-5/6 underline boxcontent h-full">
            おなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたいおなか痛い眠いコーヒー飲みたい
          </div>
      </div>

    </div>
  );
};

export default Daiary;