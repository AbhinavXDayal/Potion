import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [Data, SetData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, [url]);

  return [Data];
};

export default UseFetch;