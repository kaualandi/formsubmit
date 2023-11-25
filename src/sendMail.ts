import { Request, Response } from "express";
import { SubmissionData } from "./model/html";
import email from '@config/nodemailer';
import { createHtmlTemplate } from "./htmlHelpers";


export async function sendMail(req: Request, res: Response): Promise<void> {
  const body = req.body as unknown as SubmissionData;
  const origin = req.headers.origin;
  const to = req.params.to;

  await email.sendMail({
    from: '"Noclaf Forms" <eu@kaualf.com>',
    to,
    subject: body.subject || 'Formulário de contato',
    text: "Você recebeu um novo formulário de contato",
    html: createHtmlTemplate(body, origin),
  });

  res.status(200).json({ worked: true });
}