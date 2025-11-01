import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, date, time, message } = body

    // Send email to you
    const { data, error } = await resend.emails.send({
      from: 'Minsa Beauty Bookings <onboarding@resend.dev>',
      to: ['abbaszainulabidin00@gmail.com'],
      subject: `New Booking Request - ${service}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Client Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <p><strong>Message:</strong> ${message || 'No additional notes'}</p>
        
        <hr />
        <p style="color: #666; font-size: 14px;">Reply to this email to contact the client directly at ${email}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}