function header() {
  return `
    <tr>
      <td align="center" valign="top" id="templateHeader" data-template-container>
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
        <tr>
        <td align="center" valign="top" width="600" style="width:600px;">
        <![endif]-->
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          class="templateContainer"
        >
          <tr>
            <td valign="top" class="headerContainer">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                class="mcnImageBlock"
                style="min-width:100%;"
              >
                <tbody class="mcnImageBlockOuter">
                  <tr>
                    <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                      <table
                        align="left"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="mcnImageContentContainer"
                        style="min-width:100%;"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="mcnImageContent"
                              valign="top"
                              style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;"
                            >
                              <img
                                align="center"
                                alt=""
                                src="https://gallery.mailchimp.com/36b4d3c192a2c248ee9f896dc/images/d9ffd882-baea-4851-9929-3f061d26e375.png"
                                width="200"
                                style="max-width:400px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                                class="mcnRetinaImage"
                              />
                              <h1 style="padding-top: 13px;">
                                <span style="font-size:24px"
                                  >나에게 딱 맞는 회사를 추천받으세요!</span
                                >
                              </h1>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>

        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
  `
}

export default header
