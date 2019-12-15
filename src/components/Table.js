import React from "react";

const Table = ({ title, posts }) => (
  <div>
    <h4 className="text-uppercase">{title}</h4>
    <table class="table table-dark">
      <thead>
        <tr>
          <th>userId</th>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
      </thead>
      <tbody>
        {posts &&
          posts.map(post => (
            <tr>
              <td>{post.id.name}</td>
              <td>{post.phone}</td>
              <td>{post.name.first}</td>
              <td>{post.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);

export default Table;
