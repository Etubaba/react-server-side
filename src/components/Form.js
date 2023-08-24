import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "update_firstname":
      return { ...state, first_name: action.payload };
    case "update_lastname":
      return { ...state, last_name: action.payload };
    case "update_country":
      return { ...state, country: action.payload };
    default:
      return state;
  }
};
const initialState = {
  first_name: "",
  last_name: "",
  country: "",
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div data-testid="form" className="form-container">
      <form>
        <label htmlFor="fname">First Name</label>
        <input
          onChange={(e) =>
            dispatch({ type: "update_firstname", payload: e.target.value })
          }
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label htmlFor="lname">Last Name</label>
        <input
          onChange={(e) =>
            dispatch({ type: "update_lastname", payload: e.target.value })
          }
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label htmlFor="country">Country</label>
        <select
          onChange={(e) =>
            dispatch({ type: "update_country", payload: e.target.value })
          }
          id="country"
          name="country"
        >
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <input
          style={{
            padding: "8px",
            backgroundColor: "blue",
            borderRadius: "6px",
            border: "none",
            color: "white",
          }}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
