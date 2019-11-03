import React from 'react';
import ReactPlayer from 'react-player';

import './App.css';

class App extends React.Component {
  state = {
    open: false
  };
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
                  {this.state.open === false ? (
                    <a
                      href='https://jamiegoodnight.typeform.com/to/IPmtRL'
                      target='_blank'
                      onMouseEnter={this.contact}
                    >
                      <i class='fas fa-envelope'></i>
                    </a>
                  ) : (
                    <a
                      href='https://jamiegoodnight.typeform.com/to/IPmtRL'
                      target='_blank'
                      onMouseLeave={this.contact}
                    >
                      <i class='fas fa-envelope-open'></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='test-2'>
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
            <div className='test'>
              <ReactPlayer url='https://youtu.be/PL5Z00A73eo' className='vid' />
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
  contact = e => {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        ...this.state,
        open: true
      });
    } else {
      this.setState({
        ...this.state,
        open: false
      });
    }
  };
}

export default App;

// import React from 'react';
// import ReactPlayer from 'react-player';

// import './App.css';

// class App extends React.Component {
//   state = {
//     open: false
//   };
//   render() {
//     return (
//       <div className='App'>
//         <div className='image-wrapper'>
//           <div className='row'>
//             <div className={`${'one'} ${'no-overflow'}`}>
//               <div className={`${'item-one'} ${'zoom'}`}></div>
//             </div>
//             <div className={`${'two'} ${'no-overflow'}`}>
//               <div className={`${'item-two'}`}>
//                 <div className='nav-wrapper'>
//                   <a href='https://github.com/jamiegoodnight' target='_blank'>
//                     <i class='fab fa-github-square'></i>
//                   </a>
//                   <a
//                     href='https://www.linkedin.com/in/jamiegoodnight/'
//                     target='_blank'
//                   >
//                     <i class='fab fa-linkedin'></i>
//                   </a>
//                   {this.state.open === false ? (
//                     <a
//                       href='https://jamiegoodnight.typeform.com/to/IPmtRL'
//                       target='_blank'
//                       onMouseEnter={this.contact}
//                     >
//                       <i class='fas fa-envelope'></i>
//                     </a>
//                   ) : (
//                     <a
//                       href='https://jamiegoodnight.typeform.com/to/IPmtRL'
//                       target='_blank'
//                       onMouseLeave={this.contact}
//                     >
//                       <i class='fas fa-envelope-open'></i>
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className='row'>
//             <div className='test-2'>
//               <ReactPlayer url='https://youtu.be/TNtvKCUwNT4' className='vid' />
//             </div>
//             <div className={`${'four'} ${'no-overflow'}`}>
//               <div className={`${'item-four'} ${'zoom'}`}></div>
//             </div>
//             <div className={`${'five'} ${'no-overflow'}`}>
//               <div className={`${'item-five'} ${'zoom'}`}></div>
//             </div>
//           </div>
//           <div className='row'>
//             <div className={`${'six'} ${'no-overflow'}`}>
//               <div className={`${'item-six'} ${'zoom'}`}></div>
//             </div>
//             <div className='test'>
//               <ReactPlayer url='https://youtu.be/PL5Z00A73eo' className='vid' />
//             </div>
//           </div>
//           <div className='row'>
//             <div className={`${'eight'} ${'no-overflow'}`}>
//               <div className={`${'item-eight'} ${'zoom'}`}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   contact = e => {
//     e.preventDefault();
//     if (this.state.open === false) {
//       this.setState({
//         ...this.state,
//         open: true
//       });
//     } else {
//       this.setState({
//         ...this.state,
//         open: false
//       });
//     }
//   };
// }

// export default App;
