import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { VscGithubInverted } from 'react-icons/vsc';

import style from './style.module.scss';

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);
  return (
    <div className={style.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={style.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com GitHub
      </a>
    </div>
  );
}
