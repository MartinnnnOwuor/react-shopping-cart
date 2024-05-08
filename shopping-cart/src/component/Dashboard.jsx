import React from 'react';

function Dashboard() {
  return (
    <div className='container'>
      <h5 className='text-center mt-3'>We deal with products of various varieties &#128515;</h5>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <p className='text-center text-primary'>Tablets</p>
          <img className='img-fluid' src='https://images.unsplash.com/photo-1557825835-b4527f242af7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D' alt='tab' />
        </div>
        <div className='col-md-6'>
          <p className='text-center text-primary'>Phones</p>
          <img className='img-fluid' src='https://images.unsplash.com/photo-1605170439002-90845e8c0137?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D' alt='src2' />
        </div>
      </div>
      <div className='row justify-content-center mt-3'>
        <div className='col-md-6'>
          <img className='img-fluid' src='https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhYmxldHxlbnwwfHwwfHx8MA%3D%3D' alt='src' />
        </div>
        <div className='col-md-6'>
          <img className='img-fluid' src='https://images.unsplash.com/photo-1609252925148-b0f1b515e111?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D' alt='src3' />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
