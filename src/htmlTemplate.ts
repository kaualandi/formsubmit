export const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
</head>

<body style="background-color: #fff">
  <div>
    <table width="100%" height="100%" cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td valign="top" align="center" bgcolor="#f3f5f7" style="background: #fff">
            <table cellpadding="0" width="100%" cellspacing="0" border="0" align="center" style="
                  margin: 0 auto;
                  table-layout: fixed;
                  border-collapse: collapse !important;
                  max-width: 750px;
                  width: 90%;
                  margin-bottom: 40px;
                ">
              <tbody>
                <tr>
                  <td align="center" valign="top" width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="top" style="padding: 30px 0">
                            <h1 align="center" style="font-family: 'Poppins', sans-serif; font-size: 26px;">Novo envio de {0}!</h1>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F78874"
                      style="background: #EAF2F5; border-radius: 10px">
                      <tbody>
                        <tr>
                          <td height="32px"></td>
                        </tr>

                        <tr style="
                              font-family: 'Poppins', sans-serif;
                              color: #ffffff;
                              font-size: 14px;
                              line-height: 20px;
                              margin-top: 20px;
                            ">
                          <td colspan="2" valign="top" align="center" style="padding-left: 40px; padding-right: 40px">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tbody>
                                <tr>
                                  <td align="center">
                                    <span style="
                                          color: #101010;
                                          font-size: 22px;
                                          font-weight: bold;
                                          font-family: 'Poppins', sans-serif; ;
                                        ">
                                      {1}
                                    </span>
                                  </td>
                                </tr>

                                <tr>
                                  <td height="24"></td>
                                </tr>

                                <tr>
                                  <td height="4px" style="border-radius: 4px; background: #0005;"></td>
                                </tr>

                                <tr>
                                  <td align="end" style="font-family: 'Poppins', sans-serif; color: #101010;">Enviado: {2}</td>
                                </tr>

                                <tr>
                                  <td height="24"></td>
                                </tr>

                                {3}
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td height="24px"></td>
                        </tr>
                        <tr>
                          <td align="center" style="font-family: 'Poppins', sans-serif;">&copy; Noclaf Tech</td>
                        </tr>
                        <tr>
                          <td height="24px"></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>

</html>`;