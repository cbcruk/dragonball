import React from 'react'
import { css } from 'emotion'
import EmailForm from './EmailForm'
import EmailTable from './EmailTable'
import useForm from '../hooks/useForm'

function App() {
  const { formik, jobs } = useForm()

  return (
    <div className={css(styles.wrapper)}>
      <EmailForm {...{ ...formik, jobs }} />
      <EmailTable jobs={jobs} canBatchActions={false} />
    </div>
  )
}

const styles = {
  wrapper: { padding: 16 },
}

export default App
