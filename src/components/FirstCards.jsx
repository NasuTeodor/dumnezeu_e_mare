import './styles/FirstCards.css'

function FirstCards() {

    return (
        <div className='cards'>
            <div className='card'>
                <div className='first'>
                {/* nu folosi imaginea cu codul real */}
                <img src={require('./media/code.png')} alt='' />
                <div className='hover-me'>HOVER ME</div>
                    <div className='tit-sub'>
                        <div className='title'>
                            Running Project
                        </div>
                        <div className='subtitle'>
                            The Catalog
                        </div>
                    </div>
                    <div className='detail'>
                        The Catalog project was created with the intent of obtaining an extensive db of my choise.
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='second'>
                    <img src={require('./media/cards.png')} alt='' />
                    <div className='hover-me'>HOVER ME</div>
                    <div className='tit-sub'>
                        <div className='title'>
                            Show Off
                        </div>
                        <div className='subtitle'>
                            These Cards
                        </div>
                        <div className='detail'>
                            They were created as an example by combining animations and styling to generate a quick presentation.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FirstCards