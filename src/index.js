import React from 'react'
import ReactDOM from 'react-dom'
import { css } from 'emotion'
import EmailForm from './components/EmailForm'
import EmailTable from './components/EmailTable'
import useForm from './hooks/useForm'
import 'carbon-components/css/carbon-components.css'

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
  wrapper: { padding: 16 }
}

ReactDOM.render(<App />, document.getElementById('root'))
