import React, {useEffect} from "react";
import axios from "axios";

export function GetData() {
    const fetchData = axios.get("http://localhost:1212/api/book")
        .then(res => res.data);
    return fetchData
}
