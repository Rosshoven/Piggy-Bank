// import pig_in_cash from '../images/pig_in_cash.jpeg';
import home_piggy from '../images/home_piggy.jpg';

export default function Home() {
    return (
        < div style={{backgroundColor: 'lightblue', padding: '2%'}}>
            <div className="card" style={{marginRight: 'auto', marginLeft: 'auto', marginTop: '10%', marginBottom: '10%', border: 'solid 4px green', width: '40%', fontFamily: 'Forum, cursive', fontSize: '1.4rem'}}>
            
            <h6 style={{padding: '1% 2%', backgroundColor: 'pink', marginBottom: '-1%'}}><u>Welcome to...</u></h6>
            <h1 style={{ backgroundColor: 'pink', width: '100%', display: 'flex', justifyContent: 'center', margin: '0% auto', padding: '.5%', fontFamily: 'Architects Daughter, cursive', fontSize: '5rem', color: 'lightblue', textShadow: '1.5px 3px 2px black'}}>PIGGY BANK</h1>
            <img style={{ borderTop: 'solid 2px green', borderBottom: 'solid 2px green', borderRadius: '0%'}} src={home_piggy} className="card-img-top" alt="..." />
            <div className="card-body" style={{ backgroundColor: 'pink' }}>
                <h5 className="card-title" style={{fontSize: '1.4rem'}}>Here at Piggy Bank you can feel safe and secure knowing that your money is protected. Only you can feed the piggy, and only you can break the piggy.</h5>
                {/* <p className="card-text">Here at Piggy Bank you can feel safe and secure that your money is protected. You can feed the piggy, or you can break the piggy.</p> */}
                <p className="card-text">Create an account to get started!</p>
            </div>
            {/* <ul className="list-group list-group-flush">
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div> */}
            </div>
        </div>
        
    );
}
