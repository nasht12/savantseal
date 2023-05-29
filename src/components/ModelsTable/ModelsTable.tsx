import React from 'react';

interface IModel {
  id: string;
  object: string;
  created: number;
  owned_by: string;
  root: string;
  parent: string;
}

interface ModelsTableProps {
  data: IModel[];
}

const ModelsTable: React.FC<ModelsTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Object</th>
          <th>Created</th>
          <th>Owned By</th>
          <th>Root</th>
          <th>Parent</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.object}</td>
            <td>{new Date(item.created * 1000).toLocaleString()}</td>
            <td>{item.owned_by}</td>
            <td>{item.root}</td>
            <td>{item.parent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ModelsTable;
