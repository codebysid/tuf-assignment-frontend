import { ChangeEvent, FormEvent, useState, } from "react"
import toast from "react-hot-toast"

const programmingLnaguageOptions = [
  {
    id: 1,
    languageName: "C++"
  },
  {
    id: 2,
    languageName: "Java"
  },
  {
    id: 3,
    languageName: "Python"
  },
  {
    id: 4,
    languageName: "Javascript"
  }
]

const AddCodeSnippet = () => {
  const [formData, setFormData] = useState({ username: "", codeLanguage: "", sourceCode: "", stdIn: "" })

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.codeLanguage) {
      toast.error("Select language")
      return
    }
    try {
      const res = await fetch(`${process.env.REACT_APP_NODE_APP_URL}/api/codesubmission/save`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.msg) {
        toast.success("Saved")
        setFormData(({ username: "", codeLanguage: "", sourceCode: "", stdIn: "" }))
      } else {
        toast.error("some error occurred")
      }
    } catch (err) {
      console.log(err)
      toast.error("some error occurred")
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex items-center justify-center w-screen relative top-0 text-xs md:text-lg lg:text-lg">
      <form onSubmit={handleForm} onChange={handleInputChange} className="flex flex-col gap-4">
        <div className="formElement">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={formData.username} required />

        </div>
        <div className="formElement">
          <select name="codeLanguage" id="language">
            <option disabled selected>--Select Language--</option>
            {
              programmingLnaguageOptions.map((ele) => <option key={ele.id}>{ele.languageName}</option>)
            }
          </select>
        </div>
        <div className="formElement">

          <label htmlFor="stdIn">Standard Input</label>
          <input type="text" name="stdIn" id="stdIn" value={formData.stdIn} required />

        </div>
        <div className="formElement">

          <label htmlFor="codeSnippet">Code Snippet</label>
          <textarea name="sourceCode" rows={10} cols={40} id="codeSnippet" value={formData.sourceCode} required />
        </div>
        <button type="submit" className="btn">Save</button>
      </form>
    </div>
  )
}

export default AddCodeSnippet
