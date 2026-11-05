import { useAuthViewModel } from './useAuthViewModel';

// The login and registration interface will be rendered here.
function AuthView() {
  useAuthViewModel();
  return null;
}

export default AuthView;
