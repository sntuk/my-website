export async function POST(request) {
  try {
    const formData = await request.formData();
    const formDataObj = Object.fromEntries(formData);
    const files = formData.getAll('additional_files');
    
    console.log('New form submission:', {
      name: formDataObj.first_name,
      email: formDataObj.email,
      symptoms: formDataObj.symptoms,
      doctor_visit: formDataObj.doctor_visit,
      files: files.map(f => f.name)
    });
    
    // TODO: Send to Telegram
    // const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    // const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    
    return new Response('Form submitted successfully!', { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Error submitting form', { status: 500 });
  }
}
