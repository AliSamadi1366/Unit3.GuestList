import { useEffect } from "react";
import { useState } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/";
const COHORT = "/guests";
const API = BASE_URL + COHORT;

export default function useQuery() {
  const [data, setData] = useState();
  useEffect(() => {
    const query = async () => {
      try {
        const response = await fetch (API);
        if(!response.ok) throw Error (":(");
        const result = await response.json();
        setData(result.data);
      } catch (e) {
        console.error;
      }
    };
  }, []);
  return data;
}
