//import//
import Taylan from '../assets/Taylan.jpg'
import Alex from '../assets/Flamingo_800x800.png'

export const About: React.FC = () => {
  return (
    <div className="flex w-full h-screen">
        <div className="flex flex-col w-[50%] items-center pt-12 ml-12">
            <img src={Taylan} alt="taylan skull face" className='w-[35%] h-[45%] object-cover rounded-full'/>
            <h2 className='mt-4 text-2xl font-bold'>Taylan Dobbs, CEO</h2>
            <p className='w-[75%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere natus ad ut, numquam soluta voluptatem at deserunt voluptate doloremque mollitia laborum, quas delectus deleniti nesciunt? Saepe commodi a enim similique?</p>
            
        </div>
        <div className="flex flex-col w-[50%] items-center pt-12 mr-12">
            <img src={Alex} alt="alex flamingo shirt" className='w-[35%] h-[45%] object-cover rounded-full'/>
            <h2 className='mt-4 text-2xl font-bold'>Alex Clayton, CTO</h2>
            <p className='w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet sint saepe, nostrum voluptatibus vel voluptas alias ad pariatur enim id reiciendis quibusdam, odit, voluptates numquam voluptatem illum ratione nisi.</p>
            
        </div>
    </div>
  )
}
