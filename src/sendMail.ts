import { Request, Response } from 'express';
import { SubmissionData } from './model/html';
import email from './config/nodemailer';
import { createHtmlTemplate } from './htmlHelpers';

export async function sendMail(req: Request, res: Response): Promise<void> {
  const body = req.body as unknown as SubmissionData;
  const origin = req.headers.origin;
  const to = req.params.to;

  await email.sendMail({
    from: '"IMS Forms" <imtgspecialists@gmail.com>',
    to,
    subject: `You have received a new message in "${body.name || 'your form'}"!`,
    html: createHtmlTemplate(body, origin),
  });

  res.status(200).json({ worked: true });
}
