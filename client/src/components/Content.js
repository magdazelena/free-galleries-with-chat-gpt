import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { getStorageValue, setStorageValue } from "../utils/localStorage";
import { checkIfDateIsOlderThan30days } from "../utils/date";
import { List } from "./List";
import "./style.css";
export function Content() {
  const [city, setCity] = useState("Copenhagen");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const query = useMutation({
    mutationFn: (input) => {
      const string = `List all ${input} galleries/museums free visit and when, with links?`;
      return axios.post("http://localhost:8080/chat", { prompt: string });
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data, variables) => {
      console.log(data.data.usage);
      setLoading(false);
      setResponse(data.data.text);
      setStorageValue(variables, { date: new Date(), text: data.data.text });
    },
  });
  const getCityDataFromStorage = (input) => {
    const data = getStorageValue(input);
    if (!data) return null;
    if (checkIfDateIsOlderThan30days(data.date)) return null;
    return data.text;
  };

  const getCityData = (input) => {
    let data = getCityDataFromStorage(input);
    if (data) setResponse(data);
    if (!data) query.mutate(input);
  };

  return (
    <div className="content">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => getCityData(city)}>Check</button>
      <div>
        <h1>Result:</h1>
        {loading && <p>Loading...</p>}
        {!loading && <List text={response} />}
      </div>
    </div>
  );
}
