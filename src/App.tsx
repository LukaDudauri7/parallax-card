import CardContainer from "./components/CardContainer";
import CardBody from "./components/CardBody";
import CardItem from "./components/CardItem";

import product from "./data/data.json"

function App() {
  return <div className="h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ba78bd] to-[#613177] ">
    <CardContainer className="inet-var">
      <CardBody className="group/card flex flex-col gap-5 rounded-x1 bg-[radial-gradient(circle_at_center,_var
      (--tw-gradient-stops))] from-[#ba78bd] to-[#613177] p-6 hover:shadow-lg">
        <CardItem className="mt-4 w-full">
          <img src={product.product.src} alt={product.product.title} />
        </CardItem>
      </CardBody>
    </CardContainer>
  </div>
}

export default App;
