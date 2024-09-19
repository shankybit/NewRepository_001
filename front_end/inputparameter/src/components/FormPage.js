import React,{ useState} from 'react'
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

const useInput = (initialValue) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }
    return {value, onChange}

}

function FormPage() {

    const navigate = useNavigate();

    const firstvalue = useInput('');
    const secondvalue = useInput('');
    const thirdvalue = useInput('');
    const fourvalue = useInput('');
    const fivevalue = useInput('');
    const sixvalue = useInput('');

    const submitHandle = async(e) => {
        e.preventDefault();
        let paramone = document.getElementById('paramone').value;
        let paramtwo = parseFloat(document.getElementById('paramtwo').value);
        let paramthree = parseFloat(document.getElementById('paramthree').value);
        let paramfour = parseFloat(document.getElementById('paramfour').value);
        let paramfive = parseFloat(document.getElementById('paramfive').value);
        let paramsix = parseFloat(document.getElementById('paramsix').value);

        const dataSend = {
            enteredValue: paramone,
            corefactors: paramtwo,
            effvolbycorevol: paramthree,
            efflenbylenmagpath: paramfour,
            effareabycrossarea: paramfive,
            minareabycorearea: paramsix
        }
        try{
            await axios.post(`http://localhost:8088/api/entervalue`,dataSend
            ).then((response) => {
                console.log(response.data);
                navigate('/');
            })
        }catch(err){
            console.error(err);
        }
    }
  return (
    <div className='px-3 my-3 bg-light' style={{borderRadius: '8px', marginTop: '15%', minWidth: '350px', width: '60vw'}}>
        <Link to="/" >ALL DATA</Link>
        <form className='form' onSubmit={submitHandle}>
            <input className='form-control my-2' type='text' placeholder='enter the chip value' id='paramone' required value={firstvalue.value} onChange={firstvalue.onChange} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the corefactor' id='paramtwo' required value={secondvalue.value} onChange={secondvalue.onChange} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the Ve' id='paramthree' required value={thirdvalue.value} onChange={thirdvalue.onChange} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the le' id='paramfour' required value={fourvalue.value} onChange={fourvalue.onChange} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the Ae' id='paramfive' required value={fivevalue.value} onChange={fivevalue.onChange} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the An' id='paramsix' required value={sixvalue.value} onChange={sixvalue.onChange} /><br />
            <button className='btn btn-primary my-2' type='submit' value='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default FormPage