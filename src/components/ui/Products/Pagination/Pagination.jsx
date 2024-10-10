import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductsPagination = ({
  count = 0,
  currentPage = 1,
  handlePageChange = () => {},
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    } else {
      handlePageChange(count);
    }
  };

  const handleNext = () => {
    if (currentPage < count) {
      handlePageChange(currentPage + 1);
    } else {
      handlePageChange(1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>
        {count > 0 &&
          [...Array(count).keys()].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => handlePageChange(i + 1)}
                isActive={i + 1 === currentPage}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductsPagination;
