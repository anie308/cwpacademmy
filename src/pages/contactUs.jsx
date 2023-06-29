import Layout from "../layout"
import login from "../assets/login.jpg";
function ContactUs() {
  return (
    <Layout>
      <div className="h-[600px] p-[20px] lg:p-[40px] bg-gray-100 flex items-center justify-center w-full">
      <div className="grid lg:grid-cols-2  gap-[50px] ">
        <div className=" hidden lg:flex relative  items-center justify-start">
        <div className="absolute top-0  bg-gray-900 opacity-40 w-full h-full"></div>
        <div className="absolute top-[30%] px-[20px]">
          <p className="text-white font-poppins text-[50px] font-[600] leading-[50px]">Contact Us</p>
          <p className="text-white font-poppins mt-[10px] w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam veniam, expedita natus mollitia obcaecati eum nulla id rerum labore repudiandae iste molestiae placeat eveniet distinctio amet est perspiciatis numquam odio?</p>
        </div>

          <img src={login} alt="" className="h-full" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-[30px] lg:text-[50px] leading-[35px] lg:leading-[60px] font-poppins font-[600]">We are glad you <br className="hidden lg:block" />
reached out!</p>
<p className="font-poppins text-[14px] mt-[5px]">You would get a reply from us as soon as we get your message.</p>
          <div className="w-full mt-[20px]">
          <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="h-[40px] border w-full lg:w-[70%] px-[10px] outline-none font-poppins font-[12px] rounded-[5px]"
            />
          </div>
          <div className="w-full mt-[20px]">
          <input
              type="text"
              name=""
              id=""
              placeholder="Your Email"
              className="h-[40px] border w-full lg:w-[70%] px-[10px] outline-none font-poppins font-[12px] rounded-[5px]"
            />
          </div>
          <div className="w-full mt-[20px]">
          <textarea
              type="text"
              name=""
              id=""
              placeholder="Your Email"
              className="h-[150px] border w-full lg:w-[70%] p-[10px] outline-none font-poppins font-[12px] rounded-[5px]"
            />
          </div>
          <div className="w-full mt-[20px]">
          <button
              className="h-[40px] border w-full lg:w-[70%] px-[10px] bg-primary text-white font-poppins font-[12px] rounded-[5px]"
            >Submit</button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default ContactUs