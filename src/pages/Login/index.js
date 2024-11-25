import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      {/* props do component Title, isRed={props} */}
      <Title /* isRed={false} */>
        Login<small>Oie</small>
      </Title>
      <Paragrafo>
        Fugiat do magna ullamco exercitation minim fugiat ut amet laboris nisi
        anim.
      </Paragrafo>
      <button>Enviar</button>
    </Container>
  );
}
