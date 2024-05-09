import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Menu from "../components/Menu";
import Model from "../components/Model";
import Search from "../components/Search";
import SubmitBtn from "../components/SubmitBtn";
import useFetch from "../hooks/useFetch";
import { path } from "../utils/path";

export default function ManageTerms() {
  const { id } = useParams();
  const { data, err } = useFetch(`${path}/get-topic/${id}`);

  const [showModel, setShowModel] = useState(false);
  const [wordId, setwordId] = useState();
  const [error, setError] = useState();

  const handleShowModel = () => {
    if (wordId === "") return;
    setShowModel(true);
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${path}/delete-word/${id}`);
      setShowModel(false);
    } catch (err) {
      setError(err);
    }
  };

  const handleCancel = () => {
    setShowModel(false);
  };
  return (
    <div>
      <Search placeholder={"duba kalma"} />
      <div>
        <Button
          link={`/add-word/${data && data._id}`}
          text={"add word"}
          style={"p-2 bg-white mb-2 inline-flex"}
        />
      </div>
      <div className="p-4">
        {data &&
          data.words.map((word) => (
            <div key={word._id} className=" bg-secondary-color p-2 mb-3">
              <div className="flex justify-around">
                <p className="flex flex-col">
                  <span>word: </span>
                  {word.word}
                </p>
                <p className="flex flex-col">
                  <span>word in hausa: </span>
                  {word.wordInHausa}
                </p>
                <p className="flex flex-col">
                  <span>grammar</span>
                  {word.grammar}
                </p>
              </div>
              <div className="bg-white my-3">
                <p>explanation:</p>
                {word.explanations}
              </div>
              <div>
                <Button
                  link={`/edit-word/${word._id}`}
                  text={`edit ${word.wordInHausa}`}
                  style={"p-2 text-white"}
                />
                <button
                  type="button"
                  onClick={() => {
                    setwordId(word._id);
                    handleShowModel(word._id);
                  }}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
      </div>
      {showModel && <Model remove={handleDelete} cancel={handleCancel} />}
    </div>
  );
}
