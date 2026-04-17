import { Input } from '@/design/atoms/input';
import { Button } from '../design/atoms/button'
import { Skeleton } from '../design/atoms/skeleton';

import '../index.css'
import { useState } from 'react';

function hello() {

  const hola = "saaa"

  console.log(hola);
}

function App() {
  const [email, setEmail] = useState("");

  return (

    <div>

      <Button name='agregar idea' style='m-8' onClick={hello} />

      <Skeleton />

      <Input type='email' label={'Correo'} placeHolder={'email'} value={email} onChange={(e) => setEmail(e.target.value)}
      />

    </div>


  )
}

export default App
