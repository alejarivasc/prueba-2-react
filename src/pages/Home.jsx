import pizzas from "../assets/img/pizzas.jpg";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center">¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que puedes encontrar!</p>
      <img className="img" src={pizzas} />
    </div>
  );
}
