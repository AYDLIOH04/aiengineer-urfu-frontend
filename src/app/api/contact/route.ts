import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

export async function POST(req: Request, res: Response) {
  const { name, email, telephone, question } = await req.json();

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: "Системы управления сложными объектами и процессами",
    text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${telephone}\nВопрос: ${question}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ status: 200 });
  } catch (error) {
    return Response.json({ error: "Ошибка при отправке письма", status: 500 });
  }
}
