import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { fetchuser } from "./data";

const Reducersa = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "REQUEST_START":
        return { ...state, loading: true, error: null };
      case "REQUEST_SUCCESS":
        return { ...state, loading: false, users: action.payload };
      case "REQUEST_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    users: [],
    error: null,
    loading: false,
  });

  async function fetchData() {
    try {
      dispatch({ type: "REQUEST_START" });
      const response = await fetchuser();
      dispatch({ type: "REQUEST_SUCCESS", payload: response });
    } catch (e) {
      dispatch({ type: "REQUEST_ERROR", payload: e });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (state.loading) {
    return <h2>Loading users...</h2>;
  }

  if (state.error) {
    return <h2>{state.error}</h2>;
  }

  return (
    <div>
      {state.users.map((user) => {
        return <h2 key={user}>{user}</h2>;
      })}
    </div>
  );
};

export default Reducersa;
