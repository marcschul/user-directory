import useApi from '../../hooks/useApi';
import { useEffect } from 'react';

export default function header() {
  const data: any = useApi('https://randomuser.me/api/');
  useEffect(() => {
    console.log(`data: ${data}`);
  }, []);
  return (
    <>
      <h1>User Dictionary</h1>
    </>
  );
}
