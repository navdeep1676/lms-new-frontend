"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from "@/lib/redux";
import "./home.css";
import { Banner } from "../HomeComponents/Banner/Banner";
import { CategoriesWrapper } from "../HomeComponents/CategoriesWrapper/CategoriesWrapper";
export const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);

  return (
    <>
      <Banner />
      <CategoriesWrapper />
    </>
  );
};
