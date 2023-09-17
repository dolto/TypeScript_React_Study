import './App.css';
import './style.css'
import Template from './Template';

function App() {
  return (
    <>
      <header>
        <h1>
          <span className='aqua'>가자</span><span className='aquadark'>여행</span>
        </h1>
      </header>
        <Template/>
    <footer>
        <div className="maker">
            <span className="gray">홍도완 디자인</span>
        </div>
    </footer>
    </>
  );
}

export default App;
