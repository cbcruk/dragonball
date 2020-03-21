import item from './item'
import divider from './divider'

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
                      class="mcnTextContent"
                      style="padding-top:13px; padding-right:18px; padding-bottom:26px; padding-left:18px;"
                    >
                      <h2 class="null">
                        <span style="font-size:24px">
                          <strong>*|LNAME|*님을 위한 추천 기업&amp;포지션</strong>
                        </span>
                      </h2>
                    </td>
                  </tr>
                </tbody>
              </table>
              ${divider()}
            </td>
          </tr>

          <tr>
            <td valign="top" style="padding-top: 40px;">
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
