import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStartPage } from "../reducers/labyrinth";

export const StartGame = () => {
  const labyrinth = useSelector(
    (store) => store.labyrinth.labyrinthDescription
  );
  const dispatch = useDispatch();

  return (
    <>
      <h1>Labyrinth</h1>
      <button
        onClick={() => {
          dispatch(fetchStartPage());
        }}
      >
        ¯\_(ツ)_/¯
      </button>

      {labyrinth?.actions?.map((item) => (
        <p key={item.description}>{item.description}</p>
      ))}
      {labyrinth?.actions?.map((item) => (
        <button
          key={item.direction}
          onClick={() => {
            dispatch();
          }}
        >
          {item.direction}
        </button>
      ))}
    </>
  );
};
