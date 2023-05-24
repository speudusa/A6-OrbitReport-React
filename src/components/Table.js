import "./styling.css";

const Table = ({ sat }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        {sat.map((data, id) => {
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>
                {data.operational ? "Active" : "Inactive"}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;

//source: https://www.geeksforgeeks.org/how-to-create-a-table-in-reactjs/
