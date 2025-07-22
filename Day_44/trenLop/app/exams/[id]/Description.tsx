import { useContext } from "react"
import {Context, ProviderI} from "@/app/exams/[id]/page";

export default function () {
    const {question}: ProviderI = useContext(Context)

  return (
    <>
      <h1>Description</h1>
      <p>
          {
              question.description
          }
      </p>
    </>
  )
}