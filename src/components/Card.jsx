import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Card({ info }) {
  const { addPizza } = useCartContext();

  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img src={info.img} className="card-img-top" alt="card description" />
        <div className="card-body">
          <h2>
            <b className="name">{info.name}</b>
          </h2>
          <hr />
          <h6>Ingredientes:</h6>
          <ul className="ing">
            {info.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <hr />
          <h4 className="text-center">
            <b>${info.price}</b>
          </h4>
          <div className="d-flex justify-content-evenly gap-2">
            <Link
              to="/cart"
              className="btn btn-outline-primary"
              onClick={() => addPizza(info)}
            >
              Comprar
            </Link>
            <Link to={`/pizzas/${info.id}`} className="btn btn-outline-danger">
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
