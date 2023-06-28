import 'bootstrap/dist/css/bootstrap.css'; 


const Hero = () => {
    return (
        <>
            <div className='heroWrapper container-fluid'>
                <div className="hero">
                    <img src="https://curiookids.in.th/inc/images/index/index_banner.png" alt="Banner" style={{width: '100%', position: 'relative'}}/>
                    <div className='content-title'>
                        <img src="https://curiookids.in.th/inc/images/index/pc_title.png" alt="content-title" style={{width: '25%',position: 'absolute', top: 170, left:580}}/>
                    </div>
                    <div className='content-txt' 
                    style={{color: '#009ABF',
                            fontSize: '2rem',
                            lineHeight: '2.15rem',
                            textAlign: 'center',
                            margin: '0.1rem', 'auto': 0,
                            fontWeight: 'bold',
                            paddingTop: '0.4rem',
                            position: 'absolute', 
                            top: 330, 
                            left: 620}}>
                        <p>Exciting skills</p>
                        <p>to prepare children</p>
                        <p>for an awesome</p>
                        <p>future!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
