import React from 'react';
import useDebugPath from '../hooks/useDebugPath';

function DebugPathProvider() {
  useDebugPath();
  return null;
}

export default DebugPathProvider;