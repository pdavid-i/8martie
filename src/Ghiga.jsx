import { useRef } from 'react';
import sun from './sun.png';
import land from './two_smart.png';
import cat from './cat.gif';
import mland from './mobile_land.png'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();
  const isMobile = window.innerWidth < 1200;

  return (
    <div>
      <Parallax pages={4.5} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${sun})`,
            backgroundSize: isMobile? 'contain' : 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: true? `url(${mland})` : `url(${land})`,
            backgroundSize: 'cover'
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.6, end: 3.7 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>La multi ani de 8 martie Mariuc!!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
        <h2 class={isMobile? "m100" : ""}> Ani plini de zambete </h2>
        <h2 class={isMobile? "m100" : "m100"}>si de flori</h2>
        <h2 class={isMobile? "m300" : "m100"}>si de lumini</h2>
        <h2 class={isMobile? "m500" : "m300"}>si de ghiguti :)</h2>
        <h2 class={isMobile? "m500" : "m300"}>O primavara minunata!</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;