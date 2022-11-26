import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import Tooltip from '@mui/material/Tooltip';
import getDownloadLinks from '../Funtions/fetchFunction';
import Downloader from './Downloader';

const Header = () => {
  const [url, setUrl] = useState('')
  const [videoId, setVid] = useState(null);
  const [list, setList] = useState(null);
  const [isError, setisError] = useState(false);

  const handleOnchangeInput = (event) => {
    setUrl(event.target.value);
    const myURL = new URL(event.target.value);
    setVid(myURL.searchParams.get('v'));
  }

  const handelVideoPoppup = async () => {
    setisError(false);
    setList(null);
    let notify = document.getElementById('notify');
    notify.classList.remove('hidden');
    const response = await getDownloadLinks(videoId);
    notify.classList.add('hidden');
    if (response.status === 'OK') {

      setList(response.formats.map((element) =>
        <li key={element.qualityLabel} className='my-3 w-[40vw] md:w-36 md:mx-3 text-center px-5 py-3 bg-indigo-500 rounded-md shadow-xl shadow-indigo-500/50'>
          <a 
            href={element.url}
            className='text-white text-xl font-bold cursor-pointer'>
              {element.qualityLabel}
          </a>
        </li>
      ));

    }
    else if (response.status === 'fail') {
      setisError(true);
    };
  }

  function handleClear() {
    setUrl('');
    setisError(null);
    setList(null);
    setVid(null);
  }

  return (
    <>
      <div
        className=' flex flex-col items-center justify-center bg-purple-900 '>

        <div className='my-20 text-5xl text-center text-white font-bold lg:text-7xl text-transparent bg-gradient-to-r from-red-600 to-white bg-clip-text'>
          Youtube Video Downloader
        </div>

        <span className='relative'>
          <TextField className='mb-6 py-0 w-80 md:w-[50vw]' value={url} InputLabelProps={{ style: { top: -10, color: 'white' } }} InputProps={{ style: { backgroundColor: 'white' } }} autoFocus='true' label="Paste url here" variant="outlined" onChange={handleOnchangeInput} />

          <Button variant='contained' className='font-bold absolute top-2 right-2 bg-red-600' onClick={handelVideoPoppup} endIcon={<DownloadIcon />} >Get Links</Button>


          <Tooltip title="Refresh">
            <RefreshIcon sx={{ color: 'white' }} className='cursor-pointer absolute top-4 right-[-27px]' onClick={handleClear} />
          </Tooltip>
        </span>

      </div>

      <Downloader list={list} error={isError} />
    </>
  )
}

export default Header;
