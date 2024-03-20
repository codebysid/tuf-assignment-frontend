const codeId: { [key: string]: number } = {
  "python": 71,
  "c++": 52,
  "javascript": 30,
  "java": 29,
}
export const getCodeLanguageId = (codeLanguage: string) => {
  const id = codeId[codeLanguage.toLowerCase()]
  return id
}
