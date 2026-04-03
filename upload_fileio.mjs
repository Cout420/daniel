import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';

async function uploadFile() {
  try {
    const form = new FormData();
    form.append('file', fs.createReadStream('source_code.zip'));
    
    console.log('Uploading to file.io...');
    const response = await axios.post('https://file.io', form, {
      headers: form.getHeaders()
    });
    
    console.log('UPLOAD_SUCCESS:', JSON.stringify(response.data, null, 2));
  } catch (err) {
    console.error('Error uploading:', err.message);
  }
}

uploadFile();
