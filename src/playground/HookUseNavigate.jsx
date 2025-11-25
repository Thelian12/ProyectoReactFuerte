import { Link, useNavigate }  from "react-router-dom";


function HookUseNavigate() {

    const var_navigate = useNavigate();

    const function_navigate = () => {
        var_navigate("/hooks");
    };

    return(
         <div className="container text-center">
            <a href="/hooks"> Ir a HomeHooks</a>
            <Link to="/hooks"> Ir a HomeHooks</Link>
         </div>
    )

}

export default HookUseNavigate;