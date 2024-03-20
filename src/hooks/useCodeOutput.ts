import { useLayoutEffect, useState } from "react"
import { getCodeLanguageId } from "../utils/getCodeLanguageId";

type Tstdout = {
  stdout?: string | null,
  stderr?: string | null,
  message?: string | null
}

const useCodeOutput = (sourceCode: string, codeLanguage: string) => {
  const [data, setData] = useState<Tstdout | null>(null)

  const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true&fields=*';

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST
    },
    body: JSON.stringify({
      language_id: getCodeLanguageId(codeLanguage),
      source_code: btoa(sourceCode),
      stdin: ''
    })
  };

  const runSourceCode = async () => {
    const res = await fetch(url, options as RequestInit)
    const data = await res.json()
    const response = {
      ...(data.stdout && { stdout: data.stdout }),
      ...(data.stderr && { stderr: data.stderr }),
      ...(data.message && { message: data.message })
    }
    setData(response)
  }
  useLayoutEffect(() => {
    runSourceCode()
  }, [])

  return data
}

export default useCodeOutput
