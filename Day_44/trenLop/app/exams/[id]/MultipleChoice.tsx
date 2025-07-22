import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import React, {useContext, useState} from "react";
import {Context, ProviderI} from "@/app/exams/[id]/page";

export default function () {
  const injector: ProviderI = useContext(Context)
  const {question} = injector

  const [key, setKey] = useState(0)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    question.answer = e.target.value
    console.log(question.answer)
    setKey(key + 1)
  }

  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      name="radio-buttons-group"
      value={question.answer || ''}
      onChange={onChange}
    >
      <FormControlLabel value={'A'} control={<Radio />} label={question.optionA} />
      <FormControlLabel value={'B'} control={<Radio />} label={question.optionB} />
      <FormControlLabel value={'C'} control={<Radio />} label={question.optionC} />
      <FormControlLabel value={'D'} control={<Radio />} label={question.optionD} />
    </RadioGroup>
  )
}