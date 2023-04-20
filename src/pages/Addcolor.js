import React from "react";
import CustomInput from "../components/CustomInput";

const Addcolor = () => {
  return (
    <div>
      <h3>Add Color</h3>
      <div className="mt-4">
        <form>
          <CustomInput type="color" label="Enter Color" />
          <button
            className="btn btn-success my-5 rounded-3 border-0"
            type="submit"
          >
            Add Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
