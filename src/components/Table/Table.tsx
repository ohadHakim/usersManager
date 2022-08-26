import Status from "../Status/status";

function Table() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className="w-25">Full Name</th>
          <th className="w-25">Status</th>
          <th className="w-50">Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-light">
          <td></td>
          <Status />
          <td></td>
          <td>
            <button className="btn btn-default">
              <i className="bi-trash3"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
