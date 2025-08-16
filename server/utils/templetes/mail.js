return `
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    /* Basic reset for many email clients */
    body { margin:0; padding:0; background-color:#f4f6f8; }
    table { border-collapse:collapse; }
    img { display:block; max-width:100%; height:auto; }
    .wrapper { width:100%; table-layout:fixed; background-color:#f4f6f8; padding:20px 0; }
    .main { background:#ffffff; margin:0 auto; width:600px; border-radius:8px; overflow:hidden; }
    .content { padding:24px; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#333333; font-size:16px; line-height:1.4; }
    .button { display:inline-block; padding:12px 20px; border-radius:6px; text-decoration:none; font-weight:600; }
    .muted { color:#6b7280; font-size:14px; }
    @media (max-width:620px){ .main{ width:100% !important; border-radius:0; } .content{ padding:16px !important; } }
  </style>
</head>
<body>
  <center class="wrapper">

  <!-- ========================= 1) ACCOUNT VERIFICATION ========================= -->
//   <table class="main" role="presentation">
//     <tr>
//       <td style="background:#0f172a; padding:18px 24px; text-align:left;">
//         <img src="{{logo_url}}" alt="{{site_name}}" width="140" style="display:block;">
//       </td>
//     </tr>
//     <tr>
//       <td class="content">
//         <h2 style="margin-top:0;">Verify your email</h2>
//         <p>Hi {{name}},</p>
//         <p>Thanks for creating an account on <strong>{{site_name}}</strong>. Please click the button below to verify your email address and activate your account.</p>
//         <p style="text-align:center; margin:28px 0;">
//           <a href="{{verification_link}}" class="button" style="background:#2563eb; color:#ffffff;">Verify my account</a>
//         </p>
//         <p>If the button doesn't work, copy & paste the following link into your browser:</p>
//         <p class="muted"><a href="{{verification_link}}" style="color:#2563eb; text-decoration:underline;">{{verification_link}}</a></p>
//         <hr style="border:none; border-top:1px solid #eef2f6; margin:20px 0;">
//         <p class="muted">If you didn't create an account, you can safely ignore this email or contact <a href="mailto:{{support_email}}">{{support_email}}</a>.</p>
//       </td>
//     </tr>
//     <tr>
//       <td style="background:#f8fafc; padding:12px 24px; text-align:center; font-size:13px; color:#9aa3af;">
//         © <span id="year">2025</span> {{site_name}} — <a href="mailto:{{support_email}}" style="color:#9aa3af; text-decoration:underline;">Support</a>
//       </td>
//     </tr>
//   </table>

//   <br>

//   <!-- ========================= 2) SUCCESSFUL COURSE PURCHASE ========================= -->
//   <table class="main" role="presentation">
//     <tr>
//       <td style="background:#0f172a; padding:18px 24px; text-align:left;">
//         <img src="{{logo_url}}" alt="{{site_name}}" width="140" style="display:block;">
//       </td>
//     </tr>
//     <tr>
//       <td class="content">
//         <h2 style="margin-top:0;">Purchase confirmed</h2>
//         <p>Hi {{name}},</p>
//         <p>Thank you for purchasing <strong>{{course_title}}</strong> from <strong>{{site_name}}</strong>. Your order is confirmed.</p>

//         <table role="presentation" width="100%" style="margin:18px 0; background:#fbfdff; border-radius:6px;">
//           <tr>
//             <td style="padding:12px 16px; font-size:14px; border-bottom:1px solid #eef2f6;">Order ID</td>
//             <td style="padding:12px 16px; font-size:14px; text-align:right;">{{order_id}}</td>
//           </tr>
//           <tr>
//             <td style="padding:12px 16px; font-size:14px; border-bottom:1px solid #eef2f6;">Course</td>
//             <td style="padding:12px 16px; font-size:14px; text-align:right;">{{course_title}}</td>
//           </tr>
//           <tr>
//             <td style="padding:12px 16px; font-size:14px;">Amount</td>
//             <td style="padding:12px 16px; font-size:14px; text-align:right;">{{amount}}</td>
//           </tr>
//         </table>

//         <p>You can access your course from your dashboard. Click below to go to your course library.</p>
//         <p style="text-align:center; margin:20px 0;"><a href="{{dashboard_link}}" class="button" style="background:#059669; color:#fff;">Go to my courses</a></p>

//         <p class="muted">If you have any questions about your order, reply to this email or contact <a href="mailto:{{support_email}}">{{support_email}}</a>.</p>
//       </td>
//     </tr>
//     <tr>
//       <td style="background:#f8fafc; padding:12px 24px; text-align:center; font-size:13px; color:#9aa3af;">
//         Order date: {{purchase_date}} &nbsp; • &nbsp; Billing: {{billing_details}}
//       </td>
//     </tr>
//   </table>

//   <br>

//   <!-- ========================= 3) CONTACT FORM: MAIL TO USER (ACKNOWLEDGEMENT) ========================= -->
//   <table class="main" role="presentation">
//     <tr>
//       <td style="background:#0f172a; padding:18px 24px; text-align:left;">
//         <img src="{{logo_url}}" alt="{{site_name}}" width="140" style="display:block;">
//       </td>
//     </tr>
//     <tr>
//       <td class="content">
//         <h2 style="margin-top:0;">Thanks for contacting {{site_name}}</h2>
//         <p>Hi {{contact_name}},</p>
//         <p>We received your message about <strong>{{contact_subject}}</strong>. Thanks for reaching out — our team will reply as soon as possible.</p>

//         <table role="presentation" width="100%" style="margin:12px 0; background:#fbfdff; border-radius:6px;">
//           <tr>
//             <td style="padding:12px 16px; font-size:14px; border-bottom:1px solid #eef2f6;">Message</td>
//           </tr>
//           <tr>
//             <td style="padding:12px 16px; font-size:14px;">{{contact_message}}</td>
//           </tr>
//         </table>

//         <p class="muted">If you need urgent help, email <a href="mailto:{{support_email}}">{{support_email}}</a> or call our support team.</p>
//       </td>
//     </tr>
//     <tr>
//       <td style="background:#f8fafc; padding:12px 24px; text-align:center; font-size:13px; color:#9aa3af;">
//         We'll get back within 1-2 business days.
//       </td>
//     </tr>
//   </table>

//   <br>

  <!-- ========================= 4) CONTACT FORM: MAIL TO OWNER (DETAILS) ========================= -->
  <table class="main" role="presentation">
    <tr>
      <td style="background:#0f172a; padding:18px 24px; text-align:left;">
        <img src="{{logo_url}}" alt="StudyNotion" width="140" style="display:block;">
      </td>
    </tr>
    <tr>
      <td class="content">
        <h3 style="margin-top:0;">New contact request</h3>
        <p>Hi Tanmaay,</p>
        <p>You have a new message from the contact form on <strong>Study Notion</strong>. Details are below.</p>

        <table role="presentation" width="100%" style="margin:12px 0; background:#fbfdff; border-radius:6px;">
          <tr>
            <td style="padding:10px 14px; font-size:14px; border-bottom:1px solid #eef2f6;">Name</td>
            <td style="padding:10px 14px; font-size:14px; text-align:right;">{{contact_name}}</td>
          </tr>
          <tr>
            <td style="padding:10px 14px; font-size:14px; border-bottom:1px solid #eef2f6;">Email</td>
            <td style="padding:10px 14px; font-size:14px; text-align:right;">{{contact_email}}</td>
          </tr>
          <tr>
            <td style="padding:10px 14px; font-size:14px; border-bottom:1px solid #eef2f6;">Subject</td>
            <td style="padding:10px 14px; font-size:14px; text-align:right;">{{contact_subject}}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding:12px 14px; font-size:14px;">{{contact_message}}</td>
          </tr>
        </table>

        <p style="margin-top:14px;">Open the admin panel to view full user profile and respond.</p>
      </td>
    </tr>
    <tr>
      <td style="background:#f8fafc; padding:12px 24px; text-align:center; font-size:13px; color:#9aa3af;">
        Contact sent on {{contact_date}} • IP: {{user_ip}}
      </td>
    </tr>
  </table>

  </center>
</body>
</html>
`