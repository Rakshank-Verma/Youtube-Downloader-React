import React from 'react'

const Downloader = (props) => {

  return (
    <div className='flex flex-col justify-center items-center relative'>

      <div className='font-semibold text-xl hidden my-10' id='notify'>Please wait...</div>

      {props.error ? <div className='font-semibold text-xl my-10 text-red-600' id='isError'>Invalid url...Please enter valid url</div> : null}

      {!props.error ? <ul className='my-10 flex flex-col md:flex-row' id='formatList'>{props.list}</ul> : null}


      <div>
        <div className='text-2xl text-center font-bold mb-5 ml-6 self-start xs:self-center'>How to Download?</div>
        <ul className='list-outside list-decimal px-3 marker:font-semibold ml-4 leading-loose'>
          <li>Copy the url of youtube video from url bar.</li>
          <li>Paste the copied url above and click on 'GET LINKS' button.</li>
          <li>Click on your preferred qualityLabel.</li>
          <li>A video will popup, then in bottom-right corner click on three dots.</li>
          <li>And at last, click on 'Download'.</li>
        </ul>
      </div>

    </div>
  )
}

export default Downloader;