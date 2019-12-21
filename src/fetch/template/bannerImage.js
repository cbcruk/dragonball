function bannerImage() {
  return `
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      class="mcnTextBlock"
      style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
    >
      <tbody class="mcnTextBlockOuter">
        <tr>
          <td
            valign="top"
            class="mcnTextBlockInner"
            style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
          >
            <!--[if mso]>
            <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
            <tr>
            <![endif]-->
              
            <!--[if mso]>
            <td valign="top" width="600" style="width:600px;">
            <![endif]-->
            <table
              align="left"
              border="0"
              cellpadding="0"
              cellspacing="0"
              style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
              width="100%"
              class="mcnTextContentContainer"
            >
              <tbody>
                <tr>
                  <td
                    valign="top"
                    class="mcnImageContent"
                    style="padding-top: 0;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;color: #000000;font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 12px;line-height: 150%;text-align: center;"
                  >
                    <img
                      mc:edit="banner_image"
                      mc:allowdesigner
                      class="mcnImage" 
                      style="max-width: 100%;" 
                      src="https://gallery.mailchimp.com/36b4d3c192a2c248ee9f896dc/images/f135b8ab-26f6-4b93-8502-9cc165c451e7.png" 
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <!--[if mso]>
            </td>
            <![endif]-->
                    
            <!--[if mso]>
            </tr>
            </table>
            <![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
  `
}

export default bannerImage
