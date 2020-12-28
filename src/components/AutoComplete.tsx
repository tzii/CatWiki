import React, { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function AutoComplete(props: { allBreeds: any[] }) {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestion] = useState<any[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [userInput, setUserInput] = useState("");
  const showList = useRef<HTMLUListElement>(null);
  const currentLi = useRef<HTMLLIElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const history = useHistory();

  useEffect(() => {
    showList.current?.scrollTo(0, Number(currentLi.current?.offsetTop) - Number(currentLi.current?.offsetHeight));
  }, [activeSuggestion]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let arr = props.allBreeds.filter((x) => x.name.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1);
    console.log(arr.length);
    setFilteredSuggestion(arr);
    setShowSuggestion(true);
    setUserInput(e.currentTarget.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      if (!showSuggestion || filteredSuggestions.length === 0) return;
      setActiveSuggestion(0);
      setShowSuggestion(false);
      setUserInput(filteredSuggestions[activeSuggestion].name);
    }
    if (e.keyCode === 38) {
      if (activeSuggestion === 0) return;
      setActiveSuggestion(activeSuggestion - 1);
    }
    if (e.keyCode === 40) {
      if (activeSuggestion + 1 === filteredSuggestions.length) return;
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  const onClick = (e: any) => {
    setActiveSuggestion(0);
    setFilteredSuggestion([]);
    setShowSuggestion(false);
    setUserInput(e.currentTarget.innerText);
    input.current?.focus();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showSuggestion) return;
    let x = props.allBreeds.find((sugg) => sugg.name.toLowerCase() === input.current?.value.toLowerCase());
    if (x) history.push(x.id as string);
  };

  const suggestionListComponent = () => {
    if (showSuggestion && userInput) {
      if (filteredSuggestions.length) {
        return (
          <div className="absolute z-10 mt-2 py-3 bg-white w-full rounded-2xl">
            <ul ref={showList} className="max-h-48 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300">
              {filteredSuggestions.map((suggestion, index) => {
                let className = "";
                if (index === activeSuggestion) className = "bg-gray-200";
                return (
                  <li
                    ref={index === activeSuggestion ? currentLi : null}
                    className={
                      "py-2 pl-3 hover:bg-gray-100 active:bg-gray-300 transition duration-75 cursor-pointer " +
                      className
                    }
                    key={suggestion.id}
                    onClick={onClick}
                  >
                    {suggestion.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }
    console.log("L");
    return null;
  };

  return (
    <>
      <form className="sm:mt-8 mt-4 relative" onSubmit={onSubmit}>
        <label htmlFor="search">
          <input
            className="lg:w-80 md:w-72 sm:w-64 w-24 h-10 rounded-full pl-4 pr-7 sm:text-base text-sm"
            type="text"
            id="search"
            placeholder="Enter your breed"
            autoComplete="off"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            ref={input}
          />
        </label>
        <i className="fas fa-search absolute  pos-center right-2"></i>
        {suggestionListComponent()}
      </form>
    </>
  );
}

const mapStatetoProps = (state: any) => ({ allBreeds: state.allBreeds });

const mapDispatchToProps = {};

export default connect(mapStatetoProps, mapDispatchToProps)(AutoComplete);
