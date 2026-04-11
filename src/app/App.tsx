import { Button } from '../design/atoms/button'

import '../index.css'

function hello() {

  const hola = "saaa"

  console.log(hola);
}

function App() {


  return (
    <>
      <Button name='agregar idea' style='m-8' onClick={hello} />
    </>
  )
}

export default App
