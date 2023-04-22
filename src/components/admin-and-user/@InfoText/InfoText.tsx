import { useState } from "react";
import Text from "../style/InfoText";
import Typewriter from 'typewriter-effect';

const InfoText = () => {
  const [textDone, setTextDone] = useState(false);

  return (
    <>
      <Text done={textDone}>
        <Typewriter
          options={{
            delay: 45,
          }}
          onInit={type => {
            type
              .typeString("esta página é apenas um teste e não ira para o projeto final.")
              .callFunction(() => setTextDone(true))
              .start()
          }}
        />
      </Text>
    </>
  )
}

export default InfoText