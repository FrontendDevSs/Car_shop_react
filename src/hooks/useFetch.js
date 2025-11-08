import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData(url) {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios(url);
      setData(data);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!url) {
      console.warn("No url has been attributed");
      return;
    }
    fetchData(url);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
