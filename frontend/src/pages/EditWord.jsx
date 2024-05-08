import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ErrorMsg from "../components/Error"
import SubmitBtn from "../components/SubmitBtn"
import SuccessMsg from "../components/SuccessMsg"
import TextInput from "../components/TextInput"
import useFetch from "../hooks/useFetch"
import Title from "./Title"
import { path } from "../utils/path"

export default function EditWord() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, err: error } = useFetch(`${path}/get-word/` + id)
  const w = data && data.word
  const wexp = data && data.explanations
  const wh = data && data.wordInHausa
  const g = data && data.grammar
  const eg = data && data.example

  const [word, setWord] = useState("")
  const [wordInHausa, setWordInHausa] = useState("")
  const [grammar, setGrammar] = useState("")
  const [explanations, setExplanations] = useState([])
  const [example, setExample] = useState("")
  const [err, setErr] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const explanation = useRef()
  useEffect(() => {
    setTimeout(() => {
      setWord((word) => null)
      console.log(word)
      // setWordInHausa('')
    }, 1000)
  }, [])
  console.log(word)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (
        word === "" &&
        wordInHausa === "" &&
        example === "" &&
        grammar === "" &&
        explanations.length === 0
      ) {
        setErr("please fill the necessary field(s)")
        return
      }
      const res = await axios.patch(`${path}/edit-word/${id}`, {
        word: word === "" ? w : word,
        wordInHausa: wordInHausa === "" ? wh : wordInHausa,
        explanations: explanations.length === 0 ? wexp : explanations,
        grammar: grammar === "" ? g : grammar,
        example: example === "" ? eg : example,
      })
      navigate(-1)
      console.log(res.data)
      setErr("")
    } catch (err) {
      // setErr(err)
      console.log(err)
    }
  }

  const addExplanation = () => {
    if (explanation.current.value === "") return
    setExplanations([...explanations, explanation.current.value])
    explanation.current.value = ""
  }

  const removeExplanation = (id) => {
    const newList = explanations
    newList.splice(id, 1)
    setExplanations([...newList])
  }


  const handleChange = (e) => {
    setWord(e.target.value)
  }
  return (
    <div>
      <div className="bg-white min-h-screen rounded-tl-[30%] p-10">
        <Title title={`edit ${data && data.word}`} />
        <form onSubmit={handleSubmit}>
          {err && <ErrorMsg msg={err} />}
          {successMsg && <SuccessMsg msg={successMsg} />}
          <div>
            <input
              type="text"
              value={word}
              onChange={handleChange}
            />
            {/* <TextInput
              name={"word"}
              type={"text"}
              // placeholder={data && data.word}
              defaulValue={data && data.word}
              value={data ? data.word : ''}
              // state={(e) => setWord(e.target.value)}
              state={handleChange}
            /> */}
            <TextInput
              name={"wordInHausa"}
              type={"text"}
              placeholder={data && data.wordInHausa}
              // value={data && data.wordInHausa}
              defaulValue={data && data.wordInHausa}
              state={(e) => setWordInHausa(e.target.value)}
            />
            <TextInput
              name={"grammar"}
              type={"text"}
              placeholder={data && data.grammar}
              state={(e) => setGrammar(e.target.value)}
            />
            <TextInput
              name={"example"}
              type={"text"}
              placeholder={data && data.example}
              state={(e) => setExample(e.target.value)}
            />
            <div className="px-10 mb-7">
              <textarea
                name="explanation"
                id="explanation"
                placeholder={data && data.explanations}
                className="outline-none border-b-2 border-primary-color  w-full capitalize"
                ref={explanation}
              ></textarea>
              <button
                type="button"
                onClick={addExplanation}
              >
                add explanation
              </button>
              <div>
                {explanations &&
                  explanations.map((e, i) => (
                    <div
                      className="flex gap-4"
                      key={i}
                    >
                      <div className="flex gap-4">
                        <p>{e}</p>
                        <button
                          type="button"
                          onClick={() => removeExplanation(i)}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <SubmitBtn
              text="edit word"
              style={"px-10 py-2 text-white"}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
