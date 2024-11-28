import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
//eslint-disable-next-line
import { toast } from 'react-toastify';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;
      console.log(data);
    }

    getData();
  }, []);

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
