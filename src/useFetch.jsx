// Create Custom Hook, to make it reuseable. The naming convention should be like use<remaing name>
// The name for custom hook must always start with use...
import { useState, useEffect } from "react";

const useFetch = (resource, time = 0) => {
  // Declare and initialize state.
  const [data, setData] = useState(null);

  // Add loading effect.
  const [loading, setLoading] = useState(true);

  // Store error and show to the user.
  const [error, setError] = useState(null);

  useEffect(() => {
    //  Use Abort Controller to cancel the fetch when the fetch is not required anymore
    const abort = new AbortController();

    // Show loading message for 1 sec.
    setTimeout(() => {
      // Fetch data from the given resource. Add the abort signal to the fetch so that the fetch will pause.
      fetch(resource, { signal: abort.signal })
        .then((res) => {
          if (res.ok) return res.json();
          else throw Error("Resource doesn't exists");
        })
        .then((data) => {
          //   Set data
          setData(data);
          // Hide the loading message once data is loaded.
          setLoading(false);
          // Assign null to hide the error message.
          setError(null);
        })
        // catch the error
        .catch((err) => {
          // Check for AbortError, if the error exists just do nothing.
          if (err.name === "AbortError") console.log("Fetch is Aborted");
          else {
            // Assign the error message.
            setError(err.message);
            // Change the status of loading.
            setLoading(false);
          }
        });
    }, time);

    // Stop the fetch and return the abort message.
    return () => abort.abort();
    //   Dependency variable, if the variable is changed the useEffect will trigger and fetch the data for the given resource.
  }, [resource, time]);

  return { data, loading, error };
};

export default useFetch;
