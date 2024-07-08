import Signupform from '../components/Signupform'
import Signuphero from '../components/Signuphero'


export default function(){
    return <>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <Signupform/>
            <Signuphero/>
        </div>
    </>
}