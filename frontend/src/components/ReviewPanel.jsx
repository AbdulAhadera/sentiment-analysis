import Rating from "./Rating"
import { IoMdSend } from "react-icons/io";


function ReviewPanel() {
  return (
    <div className="w-full px-2 min-h-screen bg-red-100 md:w-1/2">
      <Rating />

      <div className="flex my-1">
        <input
          type="text"
          placeholder="Give Annonymous feedback"
          className=" w-full p-1 rounded-md mr-1 "
        />
        <IoMdSend size={30}  className="bg-headers px-1 text-white rounded-full"/>
      </div>

    </div>
  )
}

export default ReviewPanel