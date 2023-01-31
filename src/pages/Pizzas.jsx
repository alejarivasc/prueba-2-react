import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  const getData = async () => {
    const res = await fetch("pizzas.json");
    const data = await res.json();
    setPizzas(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} info={pizza} />
        ))}
      </div>
    </div>
  );
}
