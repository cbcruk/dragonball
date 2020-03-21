function upper(link) {
  return `
    <tr>
      <td
        align="center"
        valign="top"
        id="templateUpperColumns"
        data-template-container
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
          class="templateContainer"
        >
          <tr>
            <td valign="top">
              <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
              <tr>
              <td align="center" valign="top" width="200" style="width:200px;">
              <![endif]-->
              
              <table
                align="left"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="200"
                class="columnWrapper"
              >
                <tr>
                  <td valign="top" class="columnContainer">&nbsp;</td>
                </tr>
              </table>

              <!--[if (gte mso 9)|(IE)]>
              </td>
              <td align="center" valign="top" width="200" style="width:200px;">
              <![endif]-->
              
              <table
                align="left"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="200"
                class="columnWrapper"
              >
                <tr>
                  <td valign="top" class="columnContainer">
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                      class="mcnButtonBlock"
                      style="min-width:100%;"
                    >
                      <tbody class="mcnButtonBlockOuter">
                        <tr>
                          <td
                            style="padding-top:0; padding-right:18px; padding-bottom:18px; padding-left:18px;"
                            valign="top"
                            align="center"
                            class="mcnButtonBlockInner"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              class="mcnButtonContentContainer"
                              style="border-collapse: separate !important;border-radius: 50px;background-color: #4872DD;"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    mc:edit="upper_more_link"
                                    align="center"
                                    valign="middle"
                                    class="mcnButtonContent"
                                    style='font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 24px; padding: 10px;'
                                  >
                                    <a
                                      class="mcnButton "
                                      title="더 알아보기"
                                      href="${link}"
                                      target="_blank"
                                      style="font-weight: normal;letter-spacing: normal;line-height: 100%;text-align: center;text-decoration: none;color: #FFFFFF;">더 알아보기</a>
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
              <td align="center" valign="top" width="200" style="width:200px;">
              <![endif]-->

              <table
                align="left"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="200"
                class="columnWrapper"
              >
                <tr>
                  <td valign="top" class="columnContainer">&nbsp;</td>
                </tr>
              </table>

              <!--[if (gte mso 9)|(IE)]>
              </td>
              </tr>
              </table>
              <![endif]-->
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `
}

export default upper
