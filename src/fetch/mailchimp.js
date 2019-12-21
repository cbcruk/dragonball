import template from './template'

export async function postEmailTemplate(name = 'TEST_EMAIL_TEMPLATE', body) {
  const html = template(body)

  await window
    .require('electron')
    .ipcRenderer.invoke('post-templates', { name, html })
}
