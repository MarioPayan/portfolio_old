import React from 'react'
import Particles from 'react-tsparticles'
import {Box} from '@mui/material'
import {tsParticlesOptions} from '../utils/utils'

const LandingBackground = () => {
  return (
    <Box sx={{position: 'absolute', width: '100%', zIndex: -10}}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '40vh',
          backgroundColor: 'black',
          boxShadow: '0 10vh 5vh 5vh black',
        }}>
        <Particles id="tsparticles" options={tsParticlesOptions} />
      </Box>
    </Box>
  )
}

export default LandingBackground
