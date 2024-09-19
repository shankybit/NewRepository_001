import React,{useNavigate, useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const useInput = (initialValue) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);

        return{value, onChange};
    }
}

function NewPage() {

    const firstvalue = useInput('');
    const secondvalue = useInput('');
    const thirdvalue = useInput('');
    const fourthvalue = useInput('');
    const fifthvalue = useInput('');
    const sixthvalue = useInput('');

    const [datas, setDatas] = useState([]);

    const [item, setItem] = useState({
        id: 0,
        enteredValue: '',
        corefactors:'',
        effvolbycorevol:'',
        efflenbylenmagpath: '',
        effareabycrossarea: '',
        minareabycorearea:''
    })

    useEffect(() => {
        loadValues();
        handleSearch();
    },[])

    const loadValues = async() => {
        try{
            await axios.get(`http://localhost:8088/api/findallvalues`
            ).then((response) => {
                console.log(response.data);
                setDatas(response.data);
            })
        }catch(err){
            console.error(err);
        }
    }

    const handleSearch = async() => {
        let searchtxt = document.getElementById('searchtxt').value;
        try{
            await axios.get(`http://localhost:8088/api/findvalue`,
                {
                    params: {
                        enteredvalue: searchtxt
                    }
                }
            ).then((response) => {
                console.log(response.data);
                setDatas(response.data);
            })
        }catch(err){
            console.error(err);
        }
    }

    const deleteValues = async(idee) => {
        try{
            await axios.delete(`http://localhost:8088/api/${idee}`
            ).then((response) => {
                console.log(response.data);
            })
        }catch(err){
            console.error(err);
        }
    }

    const updatePrepare = (idee) => {
        const object = datas.filter(elm => elm.id === idee);

        let ideed = document.getElementById('ideed');
        let firstval = document.getElementById('firstval');
        let secondval = document.getElementById('secondval');
        let thirdval = document.getElementById('thirdval');
        let fourthval = document.getElementById('fourthval');
        let fifthval = document.getElementById('fifthval');
        let sixthval = document.getElementById('sixthval');

        ideed.innerHTML = object[0].id;
        firstval.value = object[0].enteredValue;
        secondval.value = object[0].corefactors;
        thirdval.value = object[0].effvolbycorevol;
        fourthval.value = object[0].efflenbylenmagpath;
        fifthval.value = object[0].effareabycrossarea;
        sixthval.value = object[0].minareabycorearea;

    }

    const updateValues = async() => {

        let idee = parseInt(document.getElementById('ideed').innerHTML);
        let firstval = document.getElementById('firstval').value;
        let secondval = parseFloat(document.getElementById('secondval').value);
        let thirdval = parseFloat(document.getElementById('thirdval').value);
        let fourthval = parseFloat(document.getElementById('fourthval').value);
        let fifthval = parseFloat(document.getElementById('fifthval').value);
        let sixthval = parseFloat(document.getElementById('sixthval').value);

        const userdta = {
            id: idee,
            enteredValue: firstval,
            corefactors: secondval,
            effvolbycorevol: thirdval,
            efflenbylenmagpath: fourthval,
            effareabycrossarea: fifthval,
            minareabycorearea: sixthval
        }

        try{
            await axios.put(`http://localhost:8088/api/findvalue/${idee}`,userdta
            ).then((response) => {
                console.log(response.data);
            })
        }catch(err){
            console.error(err);
        }

        firstval = "";
        secondval = "";
        thirdval = "";
        fourthval = "";
        fifthval = "";
        sixthval = "";

        loadValues();
    }
  return (
    <div>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={updateValues}>
            <div id='ideed' style={{display: 'none'}}></div>
            <input className='form-control my-2' type='text' placeholder='enter the chip value' id='firstval' required onChange={e => setItem({...item,[e.target.name]: e.target.value})} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the corefactor' id='secondval' required onChange={e => setItem({...item,[e.target.name]: e.target.value})} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the Ve' id='thirdval' required onChange={e => setItem({...item,[e.target.name]: e.target.value})} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the le' id='fourthval' required onChange={e => setItem({...item,[e.target.name]: e.target.value})} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the Ae' id='fifthval' required onChange={e => setItem({...item,[e.target.name]: e.target.value})} /><br />
            <input className='form-control my-2' type='text' placeholder='enter the An' id='sixthval' required onChange={e => setItem({...item,[e.target.name]: e.target.value})} /><br />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <button type="button" className="btn btn-secondary my-2" data-bs-dismiss="modal" >Close</button>
            <button type="submit" className="btn btn-primary my-2" value='submit' >Save changes</button>
        </div>
      </form>
    </div>
  </div>
</div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary text-white">
            <div className="container-fluid text-white">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                    <li className="nav-item">
                    <Link to="/add" >ADD DATA</Link>
                    </li>
                </ul>
                <form className="d-flex" onSubmit={handleSearch}>
                    <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" id='searchtxt' />
                    <button className="btn btn-outline-secondary" value='submit' type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                datas.map((elm) => (
                    <div className='card' key={elm.id} style={{minWidth: '330px'}}>
                        <div className='card-title'>{elm.enteredValue}</div>
                        <div className='card-text'>
                            <p>{elm.corefactors}</p>
                            <p>{elm.effvolbycorevol}</p>
                            <p>{elm.efflenbylenmagpath}</p>
                            <p>{elm.effareabycrossarea}</p>
                            <p>{elm.minareabycorearea}</p>
                            <div style={{height: '40px', display: 'flex', justifyContent: 'space-around'}}><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => updatePrepare(elm.id)}>
                                UPDATE
                            </button>
                            <button className='btn btn-danger my-2' onClick={() => deleteValues(elm.id)}>DELETE</button></div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default NewPage