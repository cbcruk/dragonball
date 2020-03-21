import divider from './divider'
import banner from './banner'

function footer(categoryId, hasBanner) {
  return `
    <tr>
      <td align="center" valign="top" id="templateFooter" data-template-container>
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
            <td valign="top" class="footerContainer">
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
                        class="mcnButtonContentContainer"
                        style="border-collapse: separate !important;border-radius: 33px;background-color: #FFFFFF;"
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              valign="middle"
                              class="mcnButtonContent"
                              style='font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 16px; padding: 18px;'
                            >
                              <a
                                class="mcnButton "
                                title="채용 중인 기업 더 알아보기"
                                href="https://www.wanted.co.kr/wdlist/${categoryId}"
                                target="_blank"
                                style="font-weight: bold;letter-spacing: 1px;line-height: 100%;text-align: center;text-decoration: none;color: #4872DD;"
                                >채용 중인 기업 더 알아보기</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              ${hasBanner ? divider() : ''}
              ${hasBanner ? banner() : ''}

              ${divider()}

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
                      align="center"
                      valign="middle"
                      width="24"
                      class="mcnFollowIconContent"
                      style="padding-top: 22px;"
                    >
                      <a href="https://www.facebook.com/wantedkr" target="_blank" style="text-decoration: none;">
                        <img
                          src="https://cdn-images.mailchimp.com/icons/social-block-v2/light-facebook-48.png"
                          alt="Facebook"
                          height="24"
                          width="24"
                          class=""
                        />
                      </a>
                      <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw" target="_blank" style="margin-right: 22px;margin-left: 22px;text-decoration: none;">
                        <img
                          src="https://cdn-images.mailchimp.com/icons/social-block-v2/light-youtube-48.png"
                          alt="YouTube"
                          height="24"
                          width="24"
                          class=""
                        />
                      </a>
                      <a href="https://www.wanted.co.kr" target="_blank" style="text-decoration: none;">
                        <img
                          src="https://cdn-images.mailchimp.com/icons/social-block-v2/light-link-48.png"
                          alt="Website"
                          height="24"
                          width="24"
                          class=""
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      valign="top"
                      class="mcnTextContent"
                      style="padding-top:28px; padding-right:18px; padding-bottom:19px; padding-left:18px;"
                    >
                      <a href="*|ARCHIVE|*" target="blank">view this email in your browser</a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      mc:edit="footer_content"
                      valign="top"
                      class="mcnTextContent"
                      style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;"
                    >
                      Copyright © 2020 Wantedlab Inc. All rights
                      reserved.&nbsp;서울 강남구 테헤란로 142 &nbsp;I
                      &nbsp;사업자등록번호 : 299-86-00021 &nbsp;I
                      &nbsp;직업소개사업등록번호 :
                      제2015-3780218-14-5-00014호 | 02-539-7118<br />
                      <br />
                      이 메일을 더이상 받고 싶지 않다면?<br>
                      아래 unsubscribe 버튼을 눌러주세요.<br />
                      <br />
                      Want to change how you receive these emails?<br />
                      You can
                      <a href="*|UPDATE_PROFILE|*"
                        >update your preferences</a
                      >
                      or <a href="*|UNSUB|*">unsubscribe from this list</a>.
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

export default footer
