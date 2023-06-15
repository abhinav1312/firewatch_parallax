
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';
import './index.css';
import Textblock from './Textblock';

function App() {
  const ref = useRef();
  return (
    <Parallax pages={2} ref={ref} className='animation' style={{backgroundColor: "black"}}>

      <ParallaxLayer offset={0} speed={-0.25}>
        <div className="animation-layer parallax" id="artback"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation-layer parallax" id="mountain"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-1}>
        <div className="animation-layer parallax" id="logoland"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation-layer parallax" id="jungle1"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.35}>
        <div className="animation-layer parallax" id="jungle2"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.5}>
        <div className="animation-layer parallax" id="jungle3"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.8}>
        <div className="animation-layer parallax" id="jungle4"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.4}>
        <div className="animation-layer parallax" id="manonmountain"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1}>
        <div className="animation-layer parallax" id="jungle5"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.2} speed={0.8} >
        <div className='hide-layer' ></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.8} speed={1} sticky={{start: 1}} >
        <Textblock />
      </ParallaxLayer>
    </Parallax>
    // <div id="jungle5"></div>
  );
}

export default App;
