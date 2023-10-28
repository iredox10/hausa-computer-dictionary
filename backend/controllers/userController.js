import User from "../models/user.js"
import Word from "../models/word.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const token = (id,isAdmin) => {
  return jwt.sign({ id: id , isAdmin:isAdmin}, "secret-key",{expiresIn:'1d'})
}

export const register = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    const user = await User.create({
      fullname: req.body.fullname,
      username: req.body.username,
      password: hashPassword,
      isAdmin: req.body.isAdmin
    })
    const jwt = token(user._id)
    res.json({ user, jwt })
  } catch (error) {
    if (error.code === 11000 && error.keyValue.username) {
      res.status(400).json(`username already exist!`)
      return
    }
    res.json(error)
  }
}

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      // throw Error('no user found')
      res.status(404).json("no user found ")
      return
    }
    await bcrypt.compare(req.body.password, user.password, (err, duser) => {
      if (duser) {
        const jwt = token(user._id, user.isAdmin)
        res.status(200).json({ user, jwt })
      } else {
        res.status(403).json("password did not match")
      }
    })
  } catch (err) {
    res.status(404).json(err)
  }
}

export const add_to_favorite = async (req, res) => {
  try {
    const favoriteWordId = req.body.favoriteWord.data._id
    const word = await Word.findOne({ _id: favoriteWordId })
    const user = await User.findOne({ _id: req.body.userId })

    const uw = user.favorite.find(fw => fw._id == favoriteWordId)
    if(uw){
      return
    }else{
      user.favorite.push(word)
      user.save()
    }
      res.status(200).json({user: user.favorite})
  } catch (error) {
    res.json(error)
  }
}

export const view_favorite = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json(err)
  }
}

export const add_history = async (req, res) => {
  try {
    const word = await Word.findOne({ _id: req.body.word.data._id })
    const user = await User.findOne({ _id: req.body.user.user._id })

    const history = user.history
    const userWord = history.filter((w) => w._id == req.body.word.data._id)
    if (userWord.length > 0) {
      res.json(user)
    } else {
      user.history.push(word)
      user.save()
      res.status(200).json(user)
    }
  } catch (err) {
    res.status(400).json(err)
  }
}
