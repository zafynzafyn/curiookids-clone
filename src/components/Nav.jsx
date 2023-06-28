import 'bootstrap/dist/css/bootstrap.css';


const Nav = () => {
    return (
        <>
        <div className="container-fluid NavWrapper ">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid navList">
                    <div className='curiooLogo'>
                        <a className="navbar-brand" href="#"><img src="https://curiookids.in.th/inc/images/logo_white.png" alt="Bootstrap" width="30" height="24"/></a>
                    </div>  
                    <a className="navbar-brand" href="#">PARENT</a>
                    <a className="navbar-brand courses" href="#">COURSES</a>
                    <a className="navbar-brand" href="#">NEWS</a>
                    <a className="navbar-brand" href="#">FIND A STUDIO</a>
                    <a className="navbar-brand" href="#">CAREER</a>
                    <a className="navbar-brand" href="#">FRANCHISING</a> 
                    <div className='languages'>
                        <div className='thLanguage'>
                            <p>Th</p>
                        </div>
                        <div className='enLanguage'>
                            <p>En</p>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
        </>
    );
}

export default Nav;
