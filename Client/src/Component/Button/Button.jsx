import { Link } from "react-router-dom";
import "./Button.css"

const Button = ({name}) => {
    return (
        <div>
            <Link  >
                <button className="btn-main btn-2 hover-slide-right">
                    <span>{name}</span>
                </button>
            </Link>
        </div>
    );
};

export default Button;