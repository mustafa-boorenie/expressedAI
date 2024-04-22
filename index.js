// test chatgpt integration
import express from 'express';
import OpenAI from "openai";

const app = express();
const openai = new OpenAI();

app.use(express.static('./frontend/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
  console.log(`click here http://localhost:3000`);
})

app.post('/:userQuestion' , async (req ,res) => {
  var userQuestion = req.params.userQuestion;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: userQuestion }],
    model: "gpt-3.5-turbo"})

    res.json(completion.choices[0].message.content)
})