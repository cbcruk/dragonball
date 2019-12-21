import item from './item'

function renderItems(items) {
  return items.map(item).join('')
}

function lower(items) {
  const oddItems = items.filter((_, index) => index % 2 === 1)
  const evenItems = items.filter((_, index) => index % 2 === 0)

  return `
    <tr>
      <td
        align="center"
        valign="top"
        id="templateLowerColumns"
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
            <td valign="top" class="lowerColumnHeaderContainer">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                class="mcnTextBlock"
                style="min-width:100%;"
              >
                <tbody class="mcnTextBlockOuter">
                  <tr>
                    <td
                      valign="top"
                      class="mcnTextBlockInner"
                      style="padding-top:9px;"
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
                        style="max-width:100%; min-width:100%;"
                        width="100%"
                        class="mcnTextContentContainer"
                      >
                        <tbody>
                          <tr>
                            <td
                              valign="top"
                              class="mcnTextContent"
                              style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                            >
                              <h2 class="null">
                                <span style="font-size:24px"
                                  ><strong
                                    >*|LNAME|*님을 위한 추천 기업&amp;포지션</strong
                                  ></span
                                >
                              </h2>
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
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                class="mcnDividerBlock"
                style="min-width:100%;"
              >
                <tbody class="mcnDividerBlockOuter">
                  <tr>
                    <td
                      class="mcnDividerBlockInner"
                      style="min-width: 100%; padding: 36px 18px 45px;"
                    >
                      <table
                        class="mcnDividerContent"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style="min-width: 100%;border-top: 2px solid #555555;"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <span></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <!--            
                      <td class="mcnDividerBlockInner" style="padding: 18px;">
                      <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
                      -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td valign="top">
              <!--[if (gte mso 9)|(IE)]>
              <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
              <tr>
              <td align="center" valign="top" width="300" style="width:300px;">
              <![endif]-->
              <table
                align="left"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="300"
                class="columnWrapper"
              >
                <tr>
                  <td valign="top" class="columnContainer">
                    ${renderItems(oddItems)}
                  </td>
                </tr>
              </table>

              <!--[if (gte mso 9)|(IE)]>
              </td>
              <td align="center" valign="top" width="300" style="width:300px;">
              <![endif]-->
              <table
                align="left"
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="300"
                class="columnWrapper"
              >
                <tr>
                  <td valign="top" class="columnContainer">
                    ${renderItems(evenItems)}
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
        </table>
      </td>
    </tr>
  `
}

export default lower
