import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#F5F5F5] p-[30px_20px] lg:px-[50px] mt-[50px]'>
      <div className=' lg:py-[100px]  grid lg:grid-cols-3 gap-[40px]'>
      <div>
      <Link to='/' className="outline-none font-poppins font-[700] text-[20px] lg:text-[25px] text-primary"> CWP Academy</Link>
      <p className='font-poppins'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam perferendis nostrum voluptas ab,  necessitatibus laboriosam molestias minima.</p>

      </div>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam perferendis nostrum voluptas ab, ducimus ullam velit deserunt nemo debitis reiciendis obcaecati harum ea vero natus, necessitatibus laboriosam molestias minima.
      </div>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam perferendis nostrum voluptas ab, ducimus ullam velit deserunt nemo debitis reiciendis obcaecati harum ea vero natus, necessitatibus laboriosam molestias minima.
      </div>
    </div>
    <div className='mt-[40px] lg:m-0 py-[30px] flex flex-col lg:flex-row w-full items-center justify-center lg:justify-between font-poppins border-t-[2px]'>
      <p className='text-[12px] lg:text-[16px]'>© 2023 CWP-Academy. All rights reserved.</p>
      <div className='flex  items-center space-x-[20px] mt-[20px] lg:m-0'>
        <div className='h-[30px] w-[30px] bg-primary rounded-full'></div>
        <div className='h-[30px] w-[30px] bg-primary rounded-full'></div>
        <div className='h-[30px] w-[30px] bg-primary rounded-full'></div>
        <div className='h-[30px] w-[30px] bg-primary rounded-full'></div>
      </div>
    </div>
    </div>
  )
}

export default Footer