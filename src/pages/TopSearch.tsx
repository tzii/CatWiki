import React from "react";
import { connect } from "react-redux";
import CatInfo from "../components/CatInfo";
import { TopSearchedCat } from "../store/topSearchSlice";

function TopSearch(props: { topSearched: TopSearchedCat[] }) {
  return (
    <div className="container px-4 mt-2 mx-auto">
      <h2 className="font-bold text-4xl">Top 10 most searched breeds</h2>
      <div className="mb-14">
        {props.topSearched.length === 0 && [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((x, i) => <CatInfo key={i} />)}
        {props.topSearched.map((x, i) => (
          <CatInfo key={x.id} data={x} index={i + 1} />
        ))}
      </div>
    </div>
  );
}

const mapStatetoProps = (state: any) => ({ topSearched: state.topSearched });

const mapDispatchToProps = {};

export default connect(mapStatetoProps, mapDispatchToProps)(TopSearch);
