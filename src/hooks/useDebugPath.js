import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos'; 
import { AOS_CONFIG } from '../constants/animation';

function useDebugPath() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init(AOS_CONFIG);
    AOS.refresh();

    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');

    if (redirectPath && redirectPath !== location.pathname) {
      console.log('Redirecting to:', redirectPath);
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]); 
  
}

export default useDebugPath;