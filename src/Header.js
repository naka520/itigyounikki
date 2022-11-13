import Notebook from "./notebook.gif";
import './Header.css';

const Header = () => {

    return (
      <div className='p-10 flex  justify-between border-slate-400 border-dotted border-b-2'>
        
       <div className="flex items-center">
            <img className="headerimg" src={Notebook} alt="トップ画像"/>
            <div className="headertext ml-3 font-medium text-3xl">いちぎょうにっき</div>
        </div>

       <button  className = 'headertext bg-yellow-100 border-amber-900 border-8 drop-shadow-lg px-4 py-2 border-rounded'>
            <p className= 'drop-shadow-lg text-3xl'>ぎゃらりー</p>
        </button>
       
      </div>
    );
  };
  
  export default Header;