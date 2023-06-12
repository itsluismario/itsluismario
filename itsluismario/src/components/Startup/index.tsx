import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const StartpContent = () => {
  return (
    <section className='flex flex-col items-center '>
    <Stack sx={{ color: 'grey.500' }} >
      <CircularProgress color="inherit" />
    </Stack>
    <p className='pt-4 text-gray-400'>Creating</p>
    </section>
  )
}

export default StartpContent