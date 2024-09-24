import './Screen.css';
import Button from './buttons.jsx';
import { Calculator } from './calculator.js';


//Acts as a parent component for "Button" 
const Screen = () => {

    const {input,handleInput, handleClear, handleResult} = Calculator();

    return(

        <>
         <div className='items-center flex justify-center pt-10'>
                <div className='border-4 border-black w-3/4 h-20 rounded-lg text-3xl  text-right pt-3' >{input||0}</div>
        </div>

            {/* Pass the handlers to the Button component */}
                  <Button
                       handleInput={handleInput}
                        handleClear={handleClear}
                   handleResult={handleResult}
                    />
        </>
       

        

    );
}

export default Screen;