import "./App.css";
import Container from "./components/Container";
import { CityProvider } from "./context/CityContext";

function App() {
  // const [city, setCity] = useState("İzmir");
  return (
    <CityProvider>
      <Container />
    </CityProvider>
  );
}

export default App;
