import { useHomeViewModel } from './useHomeViewModel';

// The Home interface will be rendered here.
function HomeView() {
  useHomeViewModel();
  return null;
}

export default HomeView;
