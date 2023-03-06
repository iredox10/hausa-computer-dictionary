import axios from "axios"

export const handleShowModel = ({state,id}) => {
  if (id === "") return
  state(true)
}

export const deleteHandler = async ({url,id,state,errState}) => {
  try {
    const res = await axios.delete(
      `${url}/${id}`
    )
    state(false)
  } catch (err) {
    errState(err)
  }
}
