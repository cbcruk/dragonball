import React, { useMemo, useState, useCallback } from 'react'
import {
  Form,
  Button,
  FormGroup,
  TextInput,
  InlineLoading,
  Dropdown
} from 'carbon-components-react'
import { css } from 'emotion'
import { flow, first, get } from 'lodash/fp'
import { Email16, Package16 } from '@carbon/icons-react'
import { DROPDOWN_ITEMS } from '../constants'
import { postEmailTemplate } from '../fetch/mailchimp'
import EmailModal from './EmailModal'

const selectLabel = flow(first, get('label'))

function EmailForm({ handleSubmit, handleChange, values, isSubmitting, jobs }) {
  const [isOpen, handleOpen] = useState(false)
  const closeModal = useCallback(() => handleOpen(false), [handleOpen])
  const hasJobs = useMemo(() => jobs.length > 0, [jobs])

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup legendText="직군">
          <Dropdown
            id="categoryId"
            label={selectLabel(DROPDOWN_ITEMS)}
            items={DROPDOWN_ITEMS}
            onChange={({ selectedItem }) => {
              handleChange({
                target: { name: 'categoryId', value: selectedItem.id }
              })
            }}
            className={css(styles.dropdown)}
          />
        </FormGroup>

        <FormGroup legendText="">
          <TextInput
            id="companyIds"
            name="companyIds"
            labelText="회사 아이디"
            placeholder=",로 구분해서 아이디를 입력해 주세요"
            required
            onChange={handleChange}
          />
        </FormGroup>

        {isSubmitting ? (
          <InlineLoading
            description="Loading data..."
            status={'active' || 'finished'}
          />
        ) : (
          <>
            {hasJobs && (
              <Button
                type="button"
                kind="secondary"
                renderIcon={Email16}
                onClick={() => handleOpen(true)}
              >
                Mailchimp
              </Button>
            )}
            <Button type="submit" renderIcon={Package16}>
              Sync
            </Button>
          </>
        )}
      </Form>
      <EmailModal
        open={isOpen}
        onRequestClose={closeModal}
        onSecondarySubmit={closeModal}
        onRequestSubmit={async ({ name, hasBanner }) => {
          await postEmailTemplate(name, {
            items: jobs,
            hasBanner,
            categoryId: parseInt(values.categoryId, 10)
          })

          closeModal()
        }}
      />
    </>
  )
}

const styles = {
  dropdown: {
    '.bx--list-box__menu': {
      maxHeight: 'none'
    }
  }
}

export default EmailForm
