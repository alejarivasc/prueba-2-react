import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export default function Pizza() {
  const [pizzaData , setPizzaData] = useState("");
  const {id} = useParams();
  console.log(id)


  const getPizza = async () => {

    
      const res = await fetch(`/pizzas/${id}`);
      const data = await res.json();
      const pizzaData = data.findIndex ((item) => item.id === id.id)
      setPizzaData(pizzaData);
      console.log(data);
    
  };
    useEffect(() => {
      getPizza();
    }, [id]);

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
            <p className="card-text">
            {pizzaData.desc}
            </p>
            <p className="card-text">
              {/* <small className="text-muted">
                mozzarella, tomates, jamón y orégano
              </small> */}
            </p>
            <div className="btn btn-outline-primary">Comprar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
