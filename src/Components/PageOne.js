import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <S.P>
          (HyperText Transfer Protocol Secure - Protocolo Seguro de
          Transferencia de Hipertexto)
        </S.P>
        <S.H2>Stateless is...?</S.H2>
        <S.P>
          Em liguagem de computação, é quando um protocolo não tem estado ou
          seja é um protocolo de comunicação que considera as requisiões de uma
          transação, de forma independente, não relacionada à requisições
          anteriores.
        </S.P>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <S.P>
          São utilizados com o objtivo de substituir os nomes próprios ou
          substantivos. Geralmente, utilizamos no início das frases e antes dos
          verbos. Os pronome no singular são: I, you, he she, it e no plural
          são: we, you, they.
        </S.P>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <S.P>Verbos Modais(Modal Verbs)</S.P>
        <S.H2>What Should means?</S.H2>
        <S.P>
          Seria o equivalente em português ao verbo "Deveria", podem ser
          utilizados para sugerir, perguntar ou aconselhar, também podemos fazer
          o uso ao mencionar algo que deveria ter acontecido mas não aconteceu.
        </S.P>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <p>Let's talk great things about you!</p>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <p>He should go to Bahia, on next month</p>
          <li>3 - Ela estará aí amanhã</li>
          <p>She will be there tomorrow</p>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
        <S.P>They</S.P>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <S.P>
          I was, You were, He was, She was, It was, We were, You were, They were
        </S.P>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
        </S.H3>
        <S.P>These days before the election are crazy.</S.P>
        <S.P>Those exercises are extremaly dificults</S.P>
      </S.Box>
    </S.Container>
  );
}
