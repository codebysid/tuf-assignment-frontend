import { FC } from 'react'
import { TSubmissionData } from '../types/CodeSubmission'
import useCodeOutput from '../hooks/useCodeOutput'

type TSubmissionCard = {
  submissionData: TSubmissionData
}

const SubmissionCard: FC<TSubmissionCard> = ({ submissionData }) => {
  const stdOut = useCodeOutput(submissionData.source_code, submissionData.code_language)
  const tempDate = new Date(submissionData.submission_timestamp)

  return (
    <tr>
      <td>{submissionData.username}</td>
      <td>{submissionData.code_language}</td>
      <td>{submissionData.stdin}</td>
      <td className='codeTd'><pre><code>{submissionData.source_code.slice(0, 101)}{submissionData.source_code.length > 100 && "..."}</code></pre></td>
      <td>
        {stdOut?.stdout && atob(stdOut.stdout)}
        {stdOut?.stderr && stdOut.stderr}
        {stdOut?.message && stdOut.message.split("at").at(0)}
      </td>
      <td>{tempDate.toLocaleString()}</td>
    </tr>
  )
}

export default SubmissionCard
