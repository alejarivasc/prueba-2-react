import { Link  } from "react-router-dom";
export default function Card ({info}) {

  
  return (


    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img
          src={info.img}
          className="card-img-top"
          alt="card description"
        />
        <div className="card-body">
          <h2>
            <b>{info.name}</b>
          </h2>
          <h6>Ingrediente</h6>
          <ul>
            {info.ingredients.map((item) => (
             <li key={item}>{item}</li>
           ))} 
          </ul>
          <h5>
            <b>{info.price}</b>
          </h5>
          <div className="d-flex gap-2">
            <Link to="/cart"
              className="btn btn-outline-primary"
            >
              Comprar
            </Link>
            <Link to= {`/pizzas/${info.id}`}
              className="btn btn-outline-danger"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
