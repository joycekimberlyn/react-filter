
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";


function App() {

  const [itemsToShowList, setItemToShowList] = useState([10, 20, 30]);
  const [allPosts, setAllPosts] = useState(false);
  let [page, setPage] = useState(1);
  let [numToShow, setNumToShow] = useState(10);

  useEffect(() => {
    GetData();
  }, []);

  function GetData() {
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=${numToShow}`)
      .then(results => setAllPosts(results.data.results));
  }

  // const prev = () => {
  //   if (page > 1) {
  //     setPage(page -= 1);
  //     GetData();
  //   }
  // }

  // const next = () => {
  //   setPage(page += 1);
  //   GetData();
  //   console.log(page);
  // }

  // function Test(e) {
  //   console.log(e.target.value);
  //   setNumToShow(e.target.value);
  //   GetData();
  // }

  return (
    <div className="App">
      <select value={itemsToShowList} onChange={e => setNumToShow(e.target.value)}>
        {
          itemsToShowList.map(value => (
            <option value={itemsToShowList}>{value}</option>
          ))
        }
      </select>
      {/* <select value={itemsToShowList} onChange={(e) => Test(e)}>
        {
          itemsToShowList.map(value => (
            <option value={value}>{value}</option>
          ))
        }
      </select> */}

      <Table posts={allPosts} title="All Posts" />

      {/* <div class="d-flex">
        <button onClick={this.prev}>left</button>
        <p>{page}</p>
        <button onClick={this.next}>right</button>
      </div> */}
    </div>
  );
}

export default App;
