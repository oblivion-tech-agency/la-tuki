import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, mensaje } = await request.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"La Tuki Web" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.GMAIL_USER,
      replyTo: email,
      subject: `Nuevo mensaje de ${escapeHtml(nombre)} — La Tuki`,
      html: `
        <h2 style="font-family:sans-serif;color:#a6d600;">Nuevo mensaje desde latukioficial.com.ar</h2>
        <table style="font-family:sans-serif;font-size:15px;line-height:1.6;">
          <tr><td><strong>Nombre:</strong></td><td>${escapeHtml(nombre)}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Mensaje:</strong></td><td>${escapeHtml(mensaje)}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Intentá de nuevo.' },
      { status: 500 }
    );
  }
}
