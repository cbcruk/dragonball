import { useState } from 'react'
import { useFormik } from 'formik'
import { getJobs } from '../fetch/jobs'

const initialValues = {
  categoryId: '518',
  companyIds: '',
  hasBanner: false
}

function useForm() {
  const [jobs, setJobs] = useState([])
  const formik = useFormik({
    initialValues,
    onSubmit: async ({ categoryId, companyIds }, { setSubmitting }) => {
      setJobs([])
      setSubmitting(true)

      const items = await getJobs(categoryId, companyIds)

      setJobs(items.filter(Boolean))
    }
  })

  return { formik, jobs }
}

export default useForm
