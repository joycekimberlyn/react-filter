import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";

function App() {

    // ito yung mga ipapakita sa select options, pipili siya kung ilan gusto niya ipakita
    const filterItems = [10, 20, 30];
    // ito yung value kung ilan yung gusto niyang ipakita, bali pag sinelect niya 20, dito mapupunta
    const [numToShow, setNumToShow] = useState(10);

    const [allPosts, setAllPosts] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            axios(`https://randomuser.me/api/?page=${page}&results=${numToShow}`).then(res => {
                setAllPosts(res.data.results);
            });
        };

        fetchData();
    }, [page, numToShow]); // Pag nagbago tong mga property na nandito sa array, 
                            // gagawin niya tong nasa useEffect na to.

    return (
        <div className="App">
            <div className="col-3">
                <select className="custom-select custom-select" value={numToShow} onChange={e => setNumToShow(e.target.value)}>
                    {
                        filterItems.map(value => (
                            <option key={value.toString()} value={value}>{value}</option>
                        ))
                    }
                </select>
            </div>

            <Table posts={allPosts} title="All Posts" />

            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#" onClick={() => page > 1 ? setPage(page - 1) : null}>Previous</a></li>
                <li className="page-item"><a className="page-link">{page}</a></li>
                <li className="page-item"><a className="page-link" href="#" onClick={() => setPage(page + 1)}>Next</a></li>
            </ul>
        </div>
    );
}

export default App;