import {useForm} from "react-hook-form";

function Form(){
    const {register, handleSubmit} = userForm();
}

    return(
        <>
        <form>
        <div>
            <label htmlFor="first"> Name :           
            </label>
            <input id="first" {...register('name')}></input>
        </div>


         <div>
            <label htmlFor="second"> Age :           
            </label>
            <input id="second" {...register('age')}></input>
        </div>



         <div>
            <label htmlFor="third"> Name :           
            </label>
            <input id="third" {...register('third')}></input>
        </div>
        </form>
        
        </>
    )



export default From;