import React, { useState } from "react";
import axios from "axios";
const useRestApi = (endpoint, request = null) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    errorMessage: "",
  });

  React.useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setState((oldstate) => ({
          ...oldstate,
          loading: false,
          data: response.data,
        }));
      })
      .catch((err) => {
        setState((oldstate) => ({
          loading: false,
          data: null,
          errorMessage: err.message,
        }));
      });
  }, []);
  return state;
};

export default useRestApi;
