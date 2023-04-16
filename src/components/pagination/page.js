import Pagination from "react-bootstrap/Pagination";

function Paginate() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item key={1}>{2}</Pagination.Item>
      <Pagination.Item key={2}>{3}</Pagination.Item>
      <Pagination.Item key={3}>{4}</Pagination.Item>
      <Pagination.Item key={4}>{5}</Pagination.Item>
      <Pagination.Item key={5}>{6}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Last />
    </Pagination>
  );
}

export default Paginate;
