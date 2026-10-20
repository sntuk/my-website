// Form submission handler for Vercel
export async function POST(request) {
  try {
    const formData = await request.formData();
    const formDataObj = Object.fromEntries(formData);
    const files = formData.getAll('additional_files');
    
    console.log('New form submission:', {
      name: formDataObj.first_name,
      email: formDataObj.email,
      symptoms: formDataObj.symptoms,
      files: files.map(f => f.name)
    });
    
    // TODO: Send to Telegram API
    // const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    // const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    // await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     chat_id: CHAT_ID,
    //     text: 'New form submission!',
    //     parse_mode: 'Markdown'
    //   })
    // });
    
    return new Response('Form submitted successfully!', { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Error submitting form', { status: 500 });
  }
}
