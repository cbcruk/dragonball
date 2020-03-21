import { JOB_CATEGORIES } from '../../constants'

function body({ id, image, name }, categoryId) {
  return `
    <tr>
      <td align="center" valign="top" id="templateBody" data-template-container>
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
            <td valign="top" class="bodyContainer">
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
                              <a
                                href="https://www.wanted.co.kr/wd/${id}"
                                title=""
                                class=""
                                target="_blank"
                              >
                                <img
                                  mc:edit="body_image"
                                  mc:allowdesigner
                                  align="center"
                                  alt=""
                                  src="${image}"
                                  width="564"
                                  style="max-width: 100%;padding-bottom: 0px;vertical-align: bottom;display: inline !important;border: 1px solid #CCCCCC;border-radius: 0%;"
                                  class="mcnImage"
                                />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td
                      mc:edit="body_title"
                      valign="top"
                      class="mcnTextContent"
                      style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                    >
                      <h3 class="null" style="text-align: center;">
                        <span style="font-size:22px"><strong>${name}</strong></span>
                      </h3>
                      <div style="text-align: center;">
                        <strong>
                          <span style="font-size:22px">
                            ${JOB_CATEGORIES[categoryId]} 직군 채용중
                          </span>
                        </strong>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      mc:edit="body_description"
                      valign="top"
                      class="mcnTextContent"
                      style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                    >
                      <!-- CONTENT_EDITOR -->
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

export default body
