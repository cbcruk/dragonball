import head from './head'
import header from './header'
import body from './body'
import upper from './upper'
import lower from './lower'
import footer from './footer'

function template({ items, hasBanner, categoryId }) {
  const [item, ...tail] = items

  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      ${head()}
      <body>
        <!--*|IF:MC_PREVIEW_TEXT|*-->
        <!--[if !gte mso 9]><!----><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span>
        <!--<![endif]-->
        <!--*|END:IF|*-->
        <center>
          <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
            <tr>
              <td align="center" valign="top" id="bodyCell">
                <!-- BEGIN TEMPLATE // -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                ${header()}
                ${body(item, categoryId)}
                ${upper(item.link)}
                ${lower(tail)}
                ${footer(categoryId, hasBanner)}
                </table>
                <!-- // END TEMPLATE -->
              </td>
            </tr>
          </table>
        </center>
      </body>
    </html>
  `
}

export default template
