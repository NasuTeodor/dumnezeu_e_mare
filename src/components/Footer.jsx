import { useState } from 'react'
import './styles/Footer.css'

function Footer(){

    const[show, setShow] = useState(false);

    return(
        <div className='footer'>
            All of this nonesense is copyrighted by Dumnezeu si Biserica ROmana va rog tratatati caaatare.
            <br/>Nu stiu ce se bagfa in footer
            <button type='button' className='contact' onClick={(e)=>{setShow(!show)} }>Contact</button>
            {show?(
                <div className='box'>
                    in: @nasu.teodor<br/>
                    fb: Teodor Nasu<br/>
                    gm: nasu.teodor24@gmail.com
                </div>
            ):null}
        </div>
    )

}

export default Footer