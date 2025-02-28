import pic from '../../public/me.jpg'
import ImageGalllery from './ImageGalllery'

function ProductPanel() {
  return (
    <div className="w-full min-h-screen md:w-1/2">

      {/* Product Profile Card */}

      <div className="mx-2 rounded-md bg-white shadow-md">

        <div className="bg-headers rounded-t-md p-1 flex">
          <img src={pic} alt="Pic" className='h-12 rounded-full' />
          <div className='mx-2 text-white'>
            <p className='text-s,'>Abdul Ahad</p>
            <p className='text-sm'>Date</p>
          </div>
        </div>

        {/* Product Image */}

        <div className=''>
          <ImageGalllery />
        </div>


      </div>

    </div>
  )
}

export default ProductPanel