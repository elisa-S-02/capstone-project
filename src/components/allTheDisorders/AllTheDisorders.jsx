import React, { useContext } from "react";
import { SingleCard } from "../card/Card";
import { SearchContext } from "../provider/SearchContext";

import "./allTheDisorders.css";
const AllDisorders = () => {
  const { searchQuery, arrayFiltered, isFilter, disorders } =
    useContext(SearchContext);

  return (
    <div>
      <div className="row justify-content-around mt-5"></div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {"ciao"}
        {(isFilter && searchQuery.length > 0 && arrayFiltered.length > 0
          ? arrayFiltered
          : disorders
        )
          .slice(0, 20)
          .map((disorder) => (
            <div className="col" key={disorder.id}>
              <SingleCard
                id={disorder.id}
                name={disorder.name}
                desc={disorder.desc}
              />
            </div>
          ))}
      </div>
      )
    </div>
  );
};

export default AllDisorders;
