import { Link } from "react-router-dom";

function HomeHooks() {

console.log("HomeHooks está cargando...");

    const hooks = [ 
        {
            hook: "useState",
            ruta:"/hooks/usestate",
            descripcion: "Sirve para manejar estados",
            categoria: "Estado"
        },
        {
            hook: "useNavigate",
            ruta: "/hooks/usenavigate",
            descripcion: "Su propósito es simplificar tareas como redirecciones, navegación y enrutamiento dinámico",
            categoria: "Router"
        },
        {
            hook: "useEffect",
            ruta: "/hooks/useeffect",
            descripcion: "Efectos secundarios: llamadas API, timers, listener",
            categoria: "Ciclo de vida"
        },

        {
            hook: "useContext",
            ruta: "/hooks/usecontext",
            descripcion: "Permite acceder a datos globales sin props",
            categoria: "Contexto"
        },

        {
            hook: "useRef",
            ruta: "/hooks/useref",
            descripcion: "Mantiene valores persistente sin re-renderizar",
            categoria: "Referencia"
        },

        {
            hook: "useMemo",
            ruta: "/hooks/usememo",
            descripcion: "Memoriza valores para evitar cálculos repetidos",
            categoria: "Performance"
        },

        {
            hook: "useCallback",
            ruta: "/hooks/usecallback",
            descripcion: "Memoriza funciones para evitar recrearlas",
            categoria: "Performance"
        },

        {
            hook: "useParams",
            ruta: "/hooks/useparams",
            descripcion: "Accede a los parámetros diámicos de la URL",
            categoria: "Router"
        },

        {
            hook: "useId",
            ruta: "/hooks/useid",
            descripcion: "Genera IDs únicos para inputs y formularios",
            categoria: "Utilidad"
        }
    ];

    return (

        <div className="container mt-4">
            <h2 className="mb-4">Tabla de Hooks</h2>

            <table className="table table-striped table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Hook</th>
                        <th>Ruta</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                    </tr>
                </thead>


                <tbody>
                    {hooks.map((item, index) => (
                        <tr key={index}>
                            <td>{item.hook}</td>
                            <td><Link to={item.ruta} className="btn btn-primary btn-sm">Ver Ejemplo</Link></td>

                            
                            <td>{item.descripcion}</td>
                            <td>{item.categoria}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>   
    );
}

export default HomeHooks;