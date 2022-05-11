import React from 'react';
import '../App.css';
import Start from './Start';
import Briefing from './Briefing';
import { connect } from 'react-redux';

const showStart = () => {
  if (window.location.pathname === '/') {
    return <Start/>;
  }
};

const showBriefing = () => {
  if (window.location.pathname === '/briefing') {
    return <Briefing/>;
  }
};

// function App() {
//   return (
//   <Start/>
//   );
// }


//   function mapStateToProps(state) {
//     console.log(state);
//     return state;
//   }

// export default connect(mapStateToProps)(App);

export default () => {
  return (
    <div>
      {showStart()}
      {showBriefing()}
    </div>
  )
}