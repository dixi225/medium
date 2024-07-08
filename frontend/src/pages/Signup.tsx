import Signupform from '../Components/Signupform'
import Signuphero from '../Components/Signuphero'


export default function(){
    return <>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <Signupform/>
            <Signuphero/>
        </div>
    </>
}