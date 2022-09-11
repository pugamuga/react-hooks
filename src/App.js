import AdvancedPart from "./components/AdvancedPart";
import Context from "./components/useReducer/Context";
import NewLesson from "./components/NewLesson";
import TernaryOperator from "./components/TernaryOperator";
import BookStore from "./components/useContext/BookStore";

function App() {
  return (
    <div>
      {/* <TernaryOperator/> */}
      {/* <NewLesson/> */}
      {/* <Context/> */}
      <BookStore />
    </div>
  );
}

export default App;
