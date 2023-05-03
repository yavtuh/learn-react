import './Main.css';
import {useState} from 'react';
import smile from '../Icons/smile.png';
import friendly from '../Icons/friendly.png';
import love from '../Icons/love.png';
import star from '../Icons/star.png';
import sun from '../Icons/sun.png';

const smiles = [
    {
        id:1,
        src:smile,
        count:0
    },
    {
        id:2,
        src:friendly,
        count:0
    },
    {
        id:3,
        src:love,
        count:0
    },
    {
        id:4,
        src:star,
        count:0
    },
    {
        id:5,
        src:sun,
        count:0
    }
];

export function Main() {

const listSmiles =  smiles.map((smile) => 
    <Smiles key={smile.id} value={smile} />
  );

return (
    <section className="home-section">
        <div className="home-content">
            <div className="text">DashBoard Sidebar</div>
            <div className='smile-list'>{listSmiles}</div>
            <ReusltButton/>
        </div>
    </section>
);
}

function Smiles(props){
    const [count, setCount] = useState(smiles);

  function handleClick() {
    setCount(count.map((item) => {
        if(item.id === props.value.id){
            props.value.count += 1;
        }
        return item;
    }))
  }

    
  return (
    <div  className='smile-item'>
        <img className="smile-img" onClick={handleClick}  src={props.value.src} alt='smile' />
        <button onClick={handleClick}>
                {props.value.count}
        </button>
    </div>
  );
}

function ReusltButton(){
    const [resulrSmile, setResult] = useState('');

    function handleClick(){
        const maxCount = Math.max(...smiles.map(e => e.count));
        const maxSmile = smiles.find(smile => smile.count === maxCount);
        setResult(maxSmile.src);
    }
    return(
        <div className='result-body'>
        <button className='result-button' onClick={handleClick}>Результат</button>
        {resulrSmile !== '' && <img src={resulrSmile} alt='smile'/>}
        </div>
    );
}
