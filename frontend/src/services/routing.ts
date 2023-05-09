import { useNavigate } from 'react-router-dom';

export const useRouting = () => {
  const navigate = useNavigate();

  function navigateTo(path: string) {
    navigate(path);
  }

  return { navigateTo };
}
