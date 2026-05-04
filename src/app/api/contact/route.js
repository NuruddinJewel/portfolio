import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // Email to you
    await resend.emails.send({
      from: 'Jewel<onboarding@resend.dev>',
      to: 'm.76jewel@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f3f4f6; padding: 16px; border-radius: 8px;">
            ${message}
          </p>
        </div>
      `,
    })

    // Auto-reply to sender
    await resend.emails.send({
      from: 'Jewel<onboarding@resend.dev>',
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: auto;">
          <h2 style="color: #7c3aed;">Hey ${name}! 👋</h2>
          <p>Thanks for contacting me. I've received your message and will get back to you as soon as possible.</p>
          <p style="background: #f3f4f6; padding: 16px; border-radius: 8px;">
            <strong>Your message:</strong><br/>${message}
          </p>
          <p>— ABC</p>
        </div>
      `,
    })

    return Response.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email error:', error)
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}