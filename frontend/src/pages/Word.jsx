import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import {
  FaBookmark,
  FaCopy,
  FaExclamationCircle,
  FaHistory,
  FaSearch,
  FaStar,
} from "react-icons/fa";
import { UseAuthContext } from "../hooks/UseAuthContext";
import { path } from "../utils/path";

export default function Word() {
  const { id } = useParams();
  const [word, setWord] = useState();
  const [favoriteWord, setFavoriteWord] = useState();
  const [err, setErr] = useState();
  const [cpword, setCpword] = useState();
  const [cpexplanatios, setCpexplanatios] = useState();
  const [tip, setTip] = useState("");
  const [favTip, setFavTip] = useState("");
  const { state } = UseAuthContext();
  const user = state.user;
  const userId = user && user.user._id;
  // console.log(userId)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${path}/get-word/${id}`);
        setWord(res.data);
      } catch (err) {
        setErr(err);
        console.log(err);
      }
    };
    fetch();
  }, []);

  const addToFavorite = async (wordId) => {
    !user && navigate("/login");
    try {
      const word = await axios.get(`${path}/get-word/${wordId}`);
      if (word) {
        setFavoriteWord(word);
      }
      const user = await axios.post(`${path}/user/add-favorite`, {
        favoriteWord,
        userId,
      });
      console.log(user.data);
      setFavTip("added");
      setTimeout(() => {
        setFavTip("");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  const viewHistory = () => {
    if (user) {
      navigate(`/history/${userId}`);
    } else {
      navigate("/login");
    }
  };

  const viewFavorite = () => {
    if (user) {
      navigate(`/favorite/${userId}`);
    } else {
      navigate("/login");
    }
  };

  const handleCopy = async (word, explanations) => {
    setCpword(word);
    setCpexplanatios(explanations);
    try {
      const cp = await navigator.clipboard.writeText(
        `${word}: ${explanations}`
      );
      setTip("word copied", word);
      setTimeout(() => {
        setTip("");
      }, 1000);
    } catch (err) {
      console.log("error in copying word", err);
    }
  };

  return (
    <div>
      <div>
        {word && (
          <div className="relative mx-10 my-15 md:my-28">
            <div className="bg-secondary-color pb-14 rounded-xl">
              <div className="bg-white capitalize p-10 rounded-xl text-center">
                <p className=" text-primary-color font-bold text-4xl">
                  {word.wordInHausa}
                </p>
                <p className="text-primary-color opacity-50 font-medium mt-3 mb-5">
                  {word.word} <span>({word.grammar})</span>
                </p>
                <div>
                  {word.explanations.map((e, i) => (
                    <div key={i}>
                      <p>{e}</p>
                    </div>
                  ))}
                </div>
                <p className="opacity-60 italic mt-5">
                  <span className="block"> misali:</span> {word.example}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 px-10 py-5 flex justify-between w-full text-primary-color">
              <button onClick={() => handleCopy(word.word, word.explanations)}>
                <FaCopy className="text-xl relative" />
                {tip && (
                  <span className="absolute top-0 left-4 p-1 rounded-full bg-primary-color text-white capitalize text-xs">
                    {tip}
                  </span>
                )}
              </button>
              <button onClick={() => addToFavorite(word._id)}>
                <FaBookmark className="text-xl relative" />
                {favTip && <span>{favTip}</span>}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 p-4 bg-secondary-color w-full flex justify-around text-primary-color ">
        <Link to={`/dictionary`} className="flex flex-col items-center">
          <span className="bg-white  p-2 rounded-full">
            <FaSearch />
          </span>
          <span className="capitalize font-bold">search</span>
        </Link>
        <button onClick={viewHistory} className="flex flex-col items-center">
          <span className="bg-white  p-2 rounded-full">
            <FaHistory />
          </span>
          <span className="capitalize font-bold">history</span>
        </button>
        <button onClick={viewFavorite} className="flex flex-col items-center">
          <span className="bg-white  p-2 rounded-full">
            <FaStar />
          </span>
          <span className="capitalize font-bold">favorite</span>
        </button>
      </div>
    </div>
  );
}
