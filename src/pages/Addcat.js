import React from "react";
import CustomInput from "../components/CustomInput";

const Addcat = () => {
  return (
    <div>
      <h3>Add Category</h3>
      <div className="mt-4">
        <form>
          <CustomInput type="text" label="Enter Category" />
          <button
            className="btn btn-success my-5 rounded-3 border-0"
            type="submit"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
