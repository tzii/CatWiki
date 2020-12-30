import React, { ChangeEvent, FormEvent, KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactLoading from "react-loading";

function AutoComplete(props: { allBreeds: any[] }) {
  const [activeSuggestion_Model, setActiveSuggestion_Model] = useState(0);
  const [filteredSuggestions_Model, setFilteredSuggestion_Model] = useState<any[]>([]);
  const [showSuggestion_Model, setShowSuggestion_Model] = useState(false);
  const [userInput_Model, setUserInput_Model] = useState("");
  const showList_Model = useRef<HTMLUListElement>(null);
  const currentLi_Model = useRef<HTMLLIElement>(null);
  const input_model = useRef<HTMLInputElement>(null);

  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestion] = useState<any[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [userInput, setUserInput] = useState("");
  const showList = useRef<HTMLUListElement>(null);
  const currentLi = useRef<HTMLLIElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const model = useRef<HTMLDivElement>(null);
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

  const onChange_Model = (e: ChangeEvent<HTMLInputElement>) => {
    let arr = props.allBreeds.filter((x) => x.name.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1);
    console.log(arr.length);
    setFilteredSuggestion_Model(arr);
    setShowSuggestion_Model(true);
    setUserInput_Model(e.currentTarget.value);
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

  const onClick_Model = (e: any) => {
    setActiveSuggestion_Model(0);
    setFilteredSuggestion_Model([]);
    setShowSuggestion_Model(false);
    setUserInput_Model(e.currentTarget.innerText);
    input_model.current?.focus();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showSuggestion) return;
    let x = props.allBreeds.find((sugg) => sugg.name.toLowerCase() === input.current?.value.toLowerCase());
    if (x) history.push(x.id as string);
  };

  const onSubmit_Model = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showSuggestion_Model) return;
    let x = props.allBreeds.find((sugg) => sugg.name.toLowerCase() === input_model.current?.value.toLowerCase());
    if (x) {
      closeModel();
      history.push(x.id as string);
    }
  };

  const suggestionListComponent = () => {
    if (showSuggestion && userInput) {
      if (filteredSuggestions.length) {
        return (
          <div className="absolute z-10 mt-2 py-3 pl-3 pr-1 bg-white w-full rounded-2xl">
            <ul
              ref={showList}
              className="max-h-48 overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300"
            >
              {filteredSuggestions.map((suggestion, index) => {
                let className = "";
                if (index === activeSuggestion) className = "bg-gray-200";
                return (
                  <li
                    ref={index === activeSuggestion ? currentLi : null}
                    className={
                      "py-2 pl-3 mr-3 rounded-lg font-medium hover:bg-gray-100 active:bg-gray-300 transition duration-75 cursor-pointer " +
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
      } else
        return (
          <div className="absolute z-10 mt-2 py-3 pl-3 pr-1 bg-white w-full rounded-2xl flex justify-center">
            <ReactLoading type="spin" color="#D1D5DB" height={30} width={30} />
          </div>
        );
    }
    return null;
  };

  const suggestionListComponent_Model = () => {
    if (showSuggestion_Model && userInput_Model) {
      if (filteredSuggestions_Model.length) {
        return (
          <div className="z-10 mt-2 py-3 bg-white w-full rounded-2xl flex-1 overflow-auto">
            <ul
              ref={showList_Model}
              className="h-full overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300"
            >
              {filteredSuggestions_Model.map((suggestion, index) => {
                let className = "";
                if (index === activeSuggestion_Model) className = "bg-gray-200";
                return (
                  <li
                    ref={index === activeSuggestion_Model ? currentLi_Model : null}
                    className={
                      "py-2 pl-3 mr-3 rounded-lg font-medium hover:bg-gray-100 active:bg-gray-300 transition duration-75 cursor-pointer " +
                      className
                    }
                    key={suggestion.id}
                    onClick={onClick_Model}
                  >
                    {suggestion.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      } else
        return (
          <div className="z-10 mt-2 py-3 bg-white w-full rounded-2xl flex-1 overflow-auto flex justify-center">
            <ReactLoading type="spin" color="#D1D5DB" height={30} width={30} />
          </div>
        );
    }
    return null;
  };

  const openModel = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.querySelector("body")!.style.overflow = "hidden";
    model.current?.classList.remove("bottom-full");
    model.current?.classList.add("bottom-0");
    input_model.current?.focus();
  };

  const closeModel = (e?: MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    document.querySelector("body")!.style.overflow = "";
    model.current?.classList.add("bottom-full");
    model.current?.classList.remove("bottom-0");
  };

  return (
    <>
      <form className="sm:mt-8 mt-4 relative" onSubmit={onSubmit}>
        <label htmlFor="search" className="sm:inline hidden">
          <input
            className="lg:w-80 md:w-72 sm:w-64 w-24 h-10 rounded-full pl-4 pr-7 sm:text-base text-sm font-medium"
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
        <button
          type="submit"
          className="sm:block hidden absolute pos-center right-1 hover:bg-gray-200 active:bg-gray-300 transition w-8 h-8 rounded-full"
        >
          <i className="fas fa-search"></i>
        </button>
        <button
          className="sm:hidden block bg-white hover:bg-gray-100 active:bg-gray-300 transition h-10 px-3 rounded-full font-medium"
          onClick={openModel}
        >
          <span className="mr-2">Search</span>
          <i className="fas fa-search"></i>
        </button>
        {suggestionListComponent()}
      </form>
      <div
        ref={model}
        className="w-screen h-screen max-h-screen fixed bottom-full left-0 bg-white z-20 transition-all duration-300 pt-4 px-4 flex flex-col"
      >
        <div className="clearfix">
          <button
            className="float-right w-10 h-10 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-lg"
            onClick={closeModel}
          >
            <i className="fas fa-times text-3xl font-normal"></i>
          </button>
        </div>
        <form className="sm:mt-8 mt-4 relative" onSubmit={onSubmit_Model}>
          <label htmlFor="search" className="">
            <input
              className="lg:w-80 md:w-72 sm:w-64 w-full h-10 rounded-full pl-4 pr-7 sm:text-base text-sm font-medium border-2 border-gray-500"
              type="text"
              id="search"
              placeholder="Enter your breed"
              autoComplete="off"
              onChange={onChange_Model}
              value={userInput_Model}
              ref={input_model}
            />
          </label>
          <button
            type="submit"
            className="absolute pos-center right-1 hover:bg-gray-200 active:bg-gray-300 transition w-8 h-8 rounded-full"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
        {suggestionListComponent_Model()}
      </div>
    </>
  );
}

const mapStatetoProps = (state: any) => ({ allBreeds: state.allBreeds });

const mapDispatchToProps = {};

export default connect(mapStatetoProps, mapDispatchToProps)(AutoComplete);
