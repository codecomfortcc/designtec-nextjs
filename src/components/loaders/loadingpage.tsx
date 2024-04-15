const LoadingPage = () => {
  return (
   <div className='w-full h-screen bg-primary'>
      <div className='flex items-center justify-center h-full'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-4xl text-white'>Loading...</h1>
          <div className='w-20 h-20 border-4 border-white border-solid rounded-full animate-spin'></div>
        </div>
      </div>
   </div>
  )
}

export default LoadingPage
