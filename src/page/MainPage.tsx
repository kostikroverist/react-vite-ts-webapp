import { Link } from "react-router-dom"

const MainPage = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="">This is MainPage</h1>

            <Link to="/account" className="text-decoration-none text-white ">
                <p
                    style={{ width: '250px', borderRadius: '25px' }}
                    className="text-center text-uppercase fs-5 bg-primary p-3 rounded"
                >
                    Go to account Table
                </p>
            </Link>
        </div >
    )
}
export default MainPage
