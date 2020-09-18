import React, { useReducer } from "react";
import useAPI from "../services/useAPI";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LAUNCH": {
      return {
        ...state,
        launchSuccess: payload,
      };
    }
    case "LAND": {
      return {
        ...state,
        landSuccess: payload,
      };
    }
    case "YEAR": {
      return {
        ...state,
        year: payload,
      };
    }
    default: {
      return state;
    }
  }
};

function Home() {
  const initialState = {
    launchSuccess: false,
    landSuccess: false,
    year: 0,
  };

  
  const [state = {}, dispatch] = useReducer(reducer, initialState);

  const checkForValues = () => {
    console.log(state)
    let all = "https://api.spaceXdata.com/v3/launches?limit=100";

    if (state.year) {
      all += `&launch_year=${state.year}`;
    }

    if (state.launchSuccess) {
      all += `&launch_success=${String(state.launchSuccess).toLowerCase()}`;
    }

    if (state.landSuccess) {
      all += `&land_success=${String(state.landSuccess).toLowerCase()}`;
    }
    
    return all;
  };

  const { loading, results, error } = useAPI(checkForValues());

  
  if (loading || error) {
    return loading ? "Loading..." : error.message;
  }

  const years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  return (
    <>
      <div className="filters">
        <h2 className="filters__title">Filters</h2>
        <h3 className="filters__subTitle">Launch Years</h3>
        <div
          className="filters__category"
          id="launchYear"
          onClick={(e) =>
            dispatch({
              type: "YEAR",
              payload: e.target.value,
            })
          }
        >
          {years.map((item) => (
            <button
              key={item}
              className={`filters__btn ${item === state.year && "enabled"}`}
              value={item}              
            >
              {item}
            </button>
          ))}
        </div>
        <h3 className="filters__subTitle">Successful Launch</h3>
        <div
          className="filters__category"
          id="sussLaunch"
          onClick={(e) =>
            dispatch({
              type: "LAUNCH",
              payload: e.target.value,
            })
          }
        >
          <button className="filters__btn" value="True">
            True
          </button>
          <button className="filters__btn" value="False">
            False
          </button>
        </div>
        <h3 className="filters__subTitle">Successful Landing</h3>
        <div
          className="filters__category"
          id="sussLand"
          onClick={(e) =>
            dispatch({
              type: "LAND",
              payload: e.target.value,
            })
          }
        >
          <button className="filters__btn" value="True">
            True
          </button>
          <button className="filters__btn" value="False">
            False
          </button>
        </div>
      </div>
      <div className="programs">
        <ul className="programs__list">
          {results.map(
            ({
              flight_number,
              mission_id,
              mission_name,
              launch_year,
              launch_success,
              land_success,
              rocket,
              links,
            }) => (
              <li className="programs__list__item" key={mission_name}>
                <div className="programs__list__imgBox">
                  <img
                    className="programs__list__img"
                    alt={mission_name}
                    src={links.mission_patch_small}
                  />
                </div>
                <div className="programs__list__name">
                  <h3>
                    {mission_name} #{flight_number}
                  </h3>
                </div>
                <div className="programs__list__id">
                  <label>Mission Ids:</label>
                  {mission_id.length > 0 ? (
                    <ul>
                      {[mission_id].map((id) => (
                        <li key={id}>{id}</li>
                      ))}
                    </ul>
                  ) : (
                    " No Id"
                  )}
                </div>
                <div className="programs__list_content">
                  <label>Launch Year:</label> <label> {launch_year}</label>
                </div>
                <div className="programs__list_content">
                  <label>Successful Launch:</label>
                  <label> {String(launch_success)}</label>
                </div>
                <div className="programs__list_content">
                  <label>Successful Landing:</label>
                  <label>
                    { " true"}
                    {/* {rocket.first_stage.map(el =>{

                  })} */}
                  </label>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default Home;