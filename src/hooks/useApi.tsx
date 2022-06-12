import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';

export default function useApi(url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SetStateAction<any>>(null);

  async function getData() {
    try {
      const response = await axios.get(url);
      setData(response);
      setLoading(false);
    } catch (error) {
      setData(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { loading, data };
}
