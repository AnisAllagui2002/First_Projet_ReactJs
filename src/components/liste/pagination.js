import { Pagination } from "react-bootstrap";
function Paginationn() {
// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
    <Pagination>
    <Pagination.First />
    
    
    <Pagination.Item >{1}</Pagination.Item>
    
    <Pagination.Item key={number} active={number === active}>{2}</Pagination.Item>
    <Pagination.Item key={number} active={number === active}>{3}</Pagination.Item>
    <Pagination.Item key={number} active={number === active}>{4}</Pagination.Item>
    <Pagination.Item key={number} active={number === active}>{5}</Pagination.Item>
    <Pagination.Item key={number} active={number === active}>{6}</Pagination.Item>
    
    <Pagination.Ellipsis />
    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Last />
    </Pagination>
//   );
//  }
};
export default Paginationn;

