import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hiddenButtons }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");

  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    // console.log("You hit the search button");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hiddenButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            GOOGLE SEARCH
          </Button>
          <Button variant="outlined">I'M FEELING LUCKY</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            GOOGLE SEARCH
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'M FEELING LUCKY
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
