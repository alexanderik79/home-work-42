import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DebugPath() { 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');

    if (redirectPath && redirectPath !== location.pathname) {
      console.log('Redirecting to:', redirectPath);
      navigate(redirectPath, { replace: true });
    }
  }, [location, navigate]);

}

export default DebugPath;