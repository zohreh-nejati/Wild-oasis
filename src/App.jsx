import { GlobalStyles } from "./styles/globalStyles";

import Button from "./ui/Button";
function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        Hello world!
        <Button>Check in</Button>
      </div>
    </>
  );
}

export default App;
