import React, {
    useState,
    useContext,
    useEffect
} from "react";
import { useCallback } from "react";
const URL = "https://openlibrary.org/search.json?q="
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("the death of ivan ilytch")
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultQuery, setResultQuery] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch (`${URL}${searchTerm}`);
            const data = await response.json();
            console.log(data);
            const {docs} = data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultQuery, setResultQuery,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};