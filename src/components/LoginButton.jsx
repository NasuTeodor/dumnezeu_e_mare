import React, { useEffect, useState } from 'react';
import { API } from '../utils/API';
import './styles/LoginButton.css';

function LoginButton() {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const cleanGresit = () => {
        document.getElementById('lognameid').style.backgroundColor = "whitesmoke";
        document.getElementById('logpassid').style.backgroundColor = "whitesmoke";
        document.getElementById('lognameid').style.removeProperty("color");
        document.getElementById('logpassid').style.removeProperty("color");
    }

    const gresit = () => {
        document.getElementById('lognameid').style.backgroundColor = "#8d7171";
        document.getElementById('logpassid').style.backgroundColor = "#8d7171";
        document.getElementById('lognameid').style.color = "black";
        document.getElementById('logpassid').style.color = "black";
    }

    const handleGresit = () => {
        gresit();
        //SETTIMEOUT ESTE ASYNC??
        setTimeout(() => {
            cleanGresit();
        }, 100);
    }

    //de ce .value returneaza undefined
    //pentru un motiv merge doar daca folosesc ById nu ByClassName
    const hasCreds = () => {
        if (document.getElementById('lognameid').value === '' ||
            document.getElementById('logpassid').value === '')
            return false;
        else return true;
    }


    //SCHEMA FLAPPY PASARE iar face 20 de requesturi per click
    // const control = (e) =>{
    //   if(e.key === 'Enter')
    //     handleSubmit();
    // }

    // const handleSubmit = () =>{
    //     console.log("trebuie trimise datele");
    //     setPass('');
    //     setUser('');
    //   };

    // document.addEventListener("keyup", control);



    //SCHEMA ULTRA COSMIN asta trebuie oprita cand fac hold enter nush daca e posibil
    // const handleSubmit = () =>{
    //   if(document.getElementsByClassName('logname').value !== '' && document.getElementsByClassName('logpass') !== ''){
    //   console.log("trebuie trimise datele");
    //   setPass('');
    //   setUser('');}
    // };

    // useEffect ( () => {
    //     window.onkeydown = handleKey;
    // } );

    // const handleKey = (e) => {
    //   if(e.key === 'Enter'){
    //     handleSubmit();
    //   }
    // }



    // SCHEMA BAD PRACTICE acum am vazut si consola si regret si mai tare
    // const handleSubmit = () =>{
    //   console.log("trebuie trimise datele");
    //   setPass('');
    //   setUser('');
    // };

    // useEffect(() => {
    //   const listener = event => {
    //     if (event.code === "Enter" || event.code === "NumpadEnter") {
    //       console.log("Enter key was pressed. Run your function.");
    //       event.preventDefault();
    //       handleSubmit();
    //     }
    //   };
    //   document.addEventListener("keydown", listener);
    //   return () => {
    //     document.removeEventListener("keydown", listener);
    //   };
    // }, []);


    //MAI INCERCAM O DATA
    const submit = (e) => {
        setPass('');
        setUser('');

        new API().post("/index.php", { user, pass }).then(resp => {

            if (resp.data === false)
                handleGresit();
            else {
                setShow(!show);
                console.log('te-ai conectat dar nu stiu ce sa fac');
            }
        })
    }

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" && hasCreds()) {
                event.preventDefault();
                submit(event);
            }
        };

        document.addEventListener("keyup", listener);

        return () => {
            document.removeEventListener("keyup", listener);
        };
    });



    return (
        <>
            <button className='loginBtn' type='button' onClick={(e) => {
                setShow(!show);
            }}>Sign in</button>
            {
                show ? (
                    <div className='loginForm'>
                        <input type={"text"} className="logname" id="lognameid" placeholder='  Username' value={user} onChange={event => setUser(event.target.value)} /><br />
                        <input type={"password"} className="logpass" id="logpassid" placeholder='  Password' value={pass} onChange={event => setPass(event.target.value)} />
                        <button type='submit' className='logsub' />
                    </div>
                ) : null}
        </>
    )

};

export default LoginButton;