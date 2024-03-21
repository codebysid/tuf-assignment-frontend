import useFetchSubmissions from '../hooks/useFetchSubmissions'
import { TSubmissionData } from '../types/CodeSubmission'
import SubmissionCard from './SubmissionCard'

const DisplaySubmissions = () => {
  const data = useFetchSubmissions()
  return (
    <div className='text-xs md:text-lg lg:text-lg'>
      {
        data.length > 0 ? <div className='w-full flex justify-center items-center absolute top-20 md:top-40 lg:top-40 '>
          <div className=' h-[75vh] overflow-y-scroll px-4 w-full'>
            <table className='w-full'>
              <thead>
                <th>Username</th>
                <th>Code Language</th>
                <th>StdIn</th>
                <th>Source Code</th>
                <th>Output</th>
                <th>TimeStamp</th>
              </thead>
              <tbody>
                {
                  data.map((ele: TSubmissionData) => {
                    return <SubmissionCard key={ele.id} submissionData={ele} />
                  })
                }
              </tbody>
            </table>
          </div>
        </div> : <p>Nothing to display</p>
      }
    </div>
  )
}

export default DisplaySubmissions
