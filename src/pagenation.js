
const Pagination = ({ postPerPage, totalRepo, paginate}) => {
 
  const pageNumbers =[];
  for (let i =1; i<= Math.ceil(totalRepo / postPerPage); i++){
    pageNumbers.push(i);
  }



  return (
    <div className="pagination mb-7">
    
    <button className="m-auto flex justify-center ">
      {pageNumbers.map(number => (
        <li key={number} className="mx-3 hover:scale-110	rounded-md border-solid	border-2 hover:bg-emerald-700 px-1 text-center ">
          <a onClick={()=> paginate (number) } href="#" className="px-4">
            {number} 
          </a>
        </li>
      ))} 
    </button>
   
    </div>
  )
};
export default Pagination;
