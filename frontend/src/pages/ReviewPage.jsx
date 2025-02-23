import ProductPanel from "../components/ProductPanel";
import ReviewPanel from "../components/ReviewPanel";

function ReviewPage() {
  return (
    <div className="md:flex">
      <ProductPanel />
      <ReviewPanel />
    </div>
  )
}

export default ReviewPage;