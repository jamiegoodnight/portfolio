import React from 'react';
import ReactPlayer from 'react-player';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='image-wrapper'>
          <div className='row'>
            <div className={`${'one'} ${'no-overflow'}`}>
              <a
                href='https://github.com/Lambda-School-Labs/key-conservation-mobile'
                target='_blank'
              >
                <div className={`${'item-one'} ${'zoom'}`}></div>
              </a>
            </div>
            <div className={`${'two'} ${'no-overflow'}`}>
              <div className={`${'item-two'}`}>
                <div className='nav-wrapper'>
                  <a href='https://github.com/jamiegoodnight' target='_blank'>
                    <i class='fab fa-github-square'></i>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/jamiegoodnight/'
                    target='_blank'
                  >
                    <i class='fab fa-linkedin'></i>
                  </a>
                  <a
                    href='https://jamiegoodnight.typeform.com/to/IPmtRL'
                    target='_blank'
                  >
                    <i class='fas fa-envelope'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='vid-wrapper'>
              <ReactPlayer url='https://youtu.be/TNtvKCUwNT4' className='vid' />
            </div>
            <div className={`${'four'} ${'no-overflow'}`}>
              <a
                href='https://github.com/jamiegoodnight/usemytech-be'
                target='_blank'
              >
                <div className={`${'item-four'} ${'zoom'}`}></div>
              </a>
            </div>
            <div className={`${'five'} ${'no-overflow'}`}>
              <a
                href='https://github.com/jamiegoodnight/dark-mode'
                target='_blank'
              >
                <div className={`${'item-five'} ${'zoom'}`}></div>
              </a>
            </div>
          </div>
          <div className='row'>
            <div className={`${'six'} ${'no-overflow'}`}>
              <a href='https://github.com/jamiegoodnight/guidr' target='_blank'>
                <div className={`${'item-six'} ${'zoom'}`}></div>
              </a>
            </div>
            <div className='vid-wrapper-two'>
              <ReactPlayer url='https://youtu.be/oJSmAoSdx8w' className='vid' />
            </div>
          </div>
          <div className='row'>
            <div className={`${'eight'} ${'no-overflow'}`}>
              <a
                href='https://github.com/Lambda-School-Labs/key-conservation-be'
                target='_blank'
              >
                <div className={`${'item-eight'} ${'zoom'}`}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
