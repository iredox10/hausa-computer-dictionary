import Word from "../models/word.js"
import Category from "../models/category.js"
import Term from "../models/term.js"
import Topic from "../models/topic.js"

export const home = async (req, res) => {
  try {
    const words = await Word.find().sort({ word: -1 })
    const terms = await Term.find().sort({ word: -1 })
    res.json({words,terms})
  } catch (error) {
    res.json(error)
  }
}

export const words = async (req, res) => {
  try {
    const words = await Word.find().sort({ wordInHausa: 1 })
    res.json(words)
  } catch (error) {
    res.json(error)
  }
}

export const add_word = async (req, res) => {
  try {
    const word = await Word.create(req.body)
    const topic = await Topic.findById(req.params.id)
    topic.words.push(word)
    topic.save()
    res.json(word)
  } catch (error) {
    res.json(error)
  }
}
export const edit_word = async (req, res) => {
  try {
    // const word = await Word.create(req.body)
    const word = await Word.findByIdAndUpdate(req.params.id, req.body,
    {new: true}
    )
    // topic.words.push(word)
    // topic.save()
    res.json(word)
  } catch (error) {
    res.json(error)
  }
}

export const get_word = async (req, res) => {
  try {
    const word = await Word.findById(req.params.id)
    res.json(word)
  } catch (error) {
    res.json(error)
  }
}

export const delete_word = async (req, res) => {
  try {
    const word = await Word.findByIdAndDelete(req.params.id)
    res.json(word)
  } catch (error) {
    res.json(error)
  }
}


export const get_words = async (req, res) => {
  try {
    const words = await Word.find()
    res.json(words)
  } catch (error) {
    res.json(error)
  }
}

export const add_term = async (req, res) => {
  try {
    const term = await Term.insertMany(req.body)
    const topic = await Topic.findById(req.params.id)
    topic.terms.push(term)
    topic.save()
    res.json(topic)
  } catch (error) {
    res.json(error)
  }
}

export const get_term = async (req, res) => {
  try {
    const term = await Term.findbyId()
    res.json(term)
  } catch (error) {
    res.json(error)
  }
}
export const get_terms = async (req, res) => {
  try {
    const terms = await Term.find()
    res.json(terms)
  } catch (error) {
    res.json(error)
  }
}

export const add_category = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.json(category)
  } catch (error) {
    if (error.code === 11000) {
      res.status(404).json('name already exist!!')
      return
    }
    res.json(error)
  }
}

export const get_category = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('topics')
    res.status(200).json(category)
  } catch (error) {
    res.status(404).json(error)
  }
}

export const delete_category = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id)
    res.status(201).json(category)
  } catch (error) {
    res.status(500).json(error)
  }
}
export const get_categories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.json(categories)
  } catch (error) {
    res.json(error)
  }
}

export const add_topic = async (req, res) => {
  try {
    const topic = await Topic.create(req.body)
    const category = await Category.findById(req.params.id)
    category.topics.push(topic)
    category.save()
    res.status(201).json({ topic, category })
  } catch (error) {
    if(error.code){
      res.json('name already exist')
      return
    }
    res.json(error)
  }
}

export const get_topic = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id).populate('words',)
    res.status(200).json(topic)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const delete_topic = async (req, res) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id)
    res.status(200).json(topic)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const get_topics = async (req, res) => {
  try {
    const topics = await Topic.find()
    res.json(topics)
  } catch (error) {
    res.json(error)
  }
}
