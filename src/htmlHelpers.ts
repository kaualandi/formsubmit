import { HTML_TEMPLATE } from './htmlTemplate';
import { SubmissionData, SubmissionInfor } from './model/html';

export function createHtmlTemplate(data: SubmissionData, from: string): string {
  const infors = createHtmlLines(data.infors);
  const now = new Date().toLocaleString('pt-br', { timeZone: 'America/Sao_Paulo' });

  return HTML_TEMPLATE.replace('{0}', from).replace('{1}', data.subject).replace('{2}', now).replace('{3}', infors);
}

function createHtmlLines(data: SubmissionInfor[]): string {
  const htmlLines = data.map((infor) => {
    return `<tr><td><div style="color: #101010; font-size: 17px">
      <b>${infor.label}:</b><br /><div style="padding: 5px 0;">${infor.value}</div>
      </div></td></tr>`;
  });

  const html = htmlLines.join(`
    <tr><td height="12"></td></tr>
    <tr><td height="2px" style="border-radius: 4px; background: #0002;"></td></tr>
    <tr><td height="12"></td></tr>
  `);

  return html;
}
