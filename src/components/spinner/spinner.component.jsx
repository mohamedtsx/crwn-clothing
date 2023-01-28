import './spinner.style.css';

const Spinner = ({...props}) => {
    return(
        <div className="spinner-overlay" {...props}>
            <div className="spinner-container" {...props}></div>
        </div>
    )
}

export default Spinner;