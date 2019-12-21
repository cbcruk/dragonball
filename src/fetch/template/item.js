function item({ name, image, link, position, id }) {
  return `
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
          <td
            valign="top"
            style="padding:9px"
            class="mcnImageBlockInner"
          >
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
                <tr mc:edit="item_image_wrap_${id}">
                  <td
                    class="mcnImageContent"
                    valign="top"
                    style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;"
                  >
                    <a
                      href="${link}"
                      title=""
                      class=""
                      target="_blank"
                    >
                      <img
                        mc:edit="item_image_${id}"
                        align="center"
                        alt=""
                        src="${image}"
                        width="264"
                        style="max-width:790px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                        class="mcnImage"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
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
            <td valign="top" width="300" style="width:300px;">
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
                    mc:edit="item_name_${id}"
                    valign="top"
                    class="mcnTextContent"
                    style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                  >
                    <h3 class="null" style="text-align: left;">
                      <strong>${name}</strong>
                    </h3>

                    <h4 class="null">
                      <span style="font-size:17px"
                        >${position}</span
                      >
                    </h4>
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
            <td valign="top" width="300" style="width:300px;">
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
                    <a
                      href="${link}"
                      target="_blank"
                      >Learn more &gt;&gt;</a><br />&nbsp;
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

export default item
