import {Box} from "@mui/material";
import {Context, PARTS, ProviderI} from "./page";
import {useContext} from "react";

export default function () {
  const injector: ProviderI = useContext(Context)
  const {question, setQuestionIndex, exam} = injector

  const onQuestionClick = (index: number) => {
    setQuestionIndex(index)
  }
  return (
    <Box>
      {
        // Array.from({length: 20}).map((_, index) => (
        exam.details.slice(0, 20).map((detail, index) => (
          <Box
            key={index}
            sx={{
              width: 40,
              height: 40,
              backgroundColor: detail.question.answer ? '#1976d2' : "#fff",
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: detail.question.answer ? '#fff' : "#1976d2",
              border: '1px solid #1976d2',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {index + 1}
          </Box>
        ))
      }
    </Box>
  )
}