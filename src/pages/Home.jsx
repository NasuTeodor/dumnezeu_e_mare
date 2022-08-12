import React from 'react'
import FirstCards from '../components/FirstCards'
import './styles/Home.css'

function Home() {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const submit = (asd) => {
  //   console.log(name, email)

  //   new API().post("/index.php", {name, email}).then(res=>{
  //     console.log(res.data);
  //   });

  // }

  // useEffect(() => {
  //   console.log("am inceput")
  // }, [name])


  return (
    <>
      <div className='title-container'>
        <div className='title'>
          Something nice logo and phrase.
        </div>
      </div>
      <div className='content-container'>
        <FirstCards />
        <div>mai am de facut ho</div>
      </div>
    </>
  )
}

export default Home