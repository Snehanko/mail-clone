import Mail from "./Component/Mail";
import Login from "./Component/Login";


function App() {
  return (
    <div>
        <Mail />
        <div>
          <h3>Click here to login</h3>
            <Login />
          </div>
    </div>
  );
}

export default App;
