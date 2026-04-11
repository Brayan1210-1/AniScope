import { Button } from '../design/atoms/button'
/*import { Input } from '../design/atoms/input'; */
import { Skeleton } from '../design/atoms/skeleton';

import '../index.css'

function hello() {

  const hola = "saaa"

  console.log(hola);
}

function App() {


  return (
    <>
      { /*<Input name='probando mi input ' placeHolder='ingrese tristeza' key={1} />*/}
      <Button name='agregar idea' style='m-8' onClick={hello} />

      <Skeleton />
    </>
  )
}

export default App
