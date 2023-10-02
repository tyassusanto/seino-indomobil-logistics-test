import React from 'react'

const FooterComponent = () => {
  const style = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100vw',
    textAlign: 'center'

  };

  return (
    <div style={style} className='bg-body-tertiary py-2'>
      Footer
    </div>
  )
}

export default FooterComponent
