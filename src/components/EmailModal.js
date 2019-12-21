import React, { useReducer } from 'react'
import { Modal, TextInput, Toggle, FormGroup } from 'carbon-components-react'

function EmailModal({ onRequestSubmit, ...props }) {
  const [form, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action
    }),
    {
      subject: '',
      hasBanner: false
    }
  )

  return (
    <Modal
      aria-label=""
      modalHeading="메일 템플릿 저장"
      onRequestSubmit={() => onRequestSubmit(form)}
      primaryButtonText="보내기"
      secondaryButtonText="취소"
      {...props}
    >
      <FormGroup legendText="제목">
        <TextInput
          labelText=""
          type="text"
          id="subject"
          onChange={e =>
            dispatch({
              subject: e.target.value
            })
          }
          placeholder="제목을 입력해 주세요"
        />
      </FormGroup>

      <FormGroup legendText="배너타입">
        <Toggle
          id="hasBanner"
          name="hasBanner"
          labelA=""
          labelB=""
          onToggle={checked =>
            dispatch({
              hasBanner: checked
            })
          }
        />
      </FormGroup>
    </Modal>
  )
}

export default EmailModal
