import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Pizza() {
  const [pizzaData, setPizzaData] = useState("");
  const params = useParams();

  const { addPizza } = useCartContext();

  const getPizza = async () => {
    const res = await fetch("/pizzas.json");
    const data = await res.json();
    const pizzaData = data.find((info) => info.id === params.id);

    setPizzaData(pizzaData);
    console.log(pizzaData);
  };
  useEffect(() => {
    getPizza();
  }, [params]);

  return (
    <div className="card mb-3 mt-5">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={pizzaData.img}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="fs-1">{pizzaData.name}</h5>
            <hr />
            <p className="card-text">{pizzaData.desc}</p>
            <p className="card-text">
              <h6>Ingredientes:</h6>
              <ul className="ing">
                {pizzaData.ingredients?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              </p>
              <div className="d-flex justify-content-between">
              <h5>
                <b>Precio: ${pizzaData.price}</b>
              </h5>
            
            <div
              className="btn btn-outline-primary"
              onClick={() => addPizza(pizzaData)}>
              Comprar
            </div>
                
              </div>
             
          </div>
        </div>
      </div>
    </div>
  );
}
