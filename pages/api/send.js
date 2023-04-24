import mail from '@sendgrid/mail'

const sgMail = require('@sendgrid/mail')
const sgClientMail = require('@sendgrid/mail')

export default async function(req, res) {
  const SENDGRID_API_KEY='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'

  sgMail.setApiKey(SENDGRID_API_KEY)
  sgClientMail.setApiKey(SENDGRID_API_KEY)

  const { name, address, email, phone, bins, day, hear, questions, subject } = req.body

  const content = {
    to: 'dirtybinbustersfl@gmail.com',
    from: 'dirtybinbustersfl@gmail.com',
    subject: `${subject}`,
    text: name,
    html: `<p> <b>${name}</b> has requested to subscribe or needs more information.</p>
    <hr>
  <table border="1">
    <tr>
      <td>
       <b>Name</b>
      </td>
      <td>
      <b>Address</b>
      </td>
      <td>
      <b>Mail</b>
      </td>
      <td>
      <b>Phone</b>
      </td>
      <td>
      <b>Number of Bins</b>
      </td>
      <td>
      <b>Collection Day</b>
      </td>
      <td>
      <b>How Did you Hear</b>
      </td>
      <td>
      <b>Questions</b>
      </td>
    </tr>
    <tr>
      <td>
        ${name}
      </td>
      <td>
        ${address}
      </td>
      <td>
        ${email}
      </td>
      <td>
        ${phone}
      </td>
      <td>
        ${bins}
      </td>
      <td>
        ${day}
      </td>
      <td>
        ${hear}
      </td>
      <td>
        ${questions}
      </td>
    </tr>
</table>`
  }

  const ClientContent = {
    to: `${email}`,
    from: 'dirtybinbustersfl@gmail.com',
    subject: `${name}, you have a message from Dirty Bin Busters - A clean home is a happy home!`,
    text: name,
    html: `<p> <b>${name}</b>, you have requested to subscribe or you need more information about our services.</p>
    <p> Thank you for reaching out and expressing interest in our services at <b>Dirty Bin Busters</b> </p>
    <p> In case you would like to have more information, we are happy to arrange a call or text message for further queries you might have. </p> 
    <p> We look forward to start working with you! </p>
    <p> And remember, a clean home is a happy home! </p>
    `
  }
  // Send message to Company (DBB) and Client
  try {
    console.log("Sending DBB and Client Mails with SendGrid ...")
    await sgMail.send(content)
    await sgClientMail.send(ClientContent)
    res.status(200).send('DBB & Client Message sent successfully.')
  } catch (error) {
    console.log("ERROR sending mails with SendGrid")
    console.log('ERROR', error)
    res.status(400).send('DBB and Client Messages not sent.')
  }

  // Send message to Client
  // try {
  //   console.log("Sending Client Mail with SendGrid ...")
  //   await sgClientMail.send(ClientContent)
  //   res.status(200).send('Client Message sent successfully.')
  // } catch (error) {
  //   console.log("ERROR sending Client mail with SendGrid")
  //   console.log('ERROR', error)
  //   res.status(400).send('Client Message not sent.')
  // }
}