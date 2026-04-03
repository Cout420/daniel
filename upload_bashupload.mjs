import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';

async function uploadFile() {
  try {
    const form = new FormData();
    form.append('file', fs.createReadStream('source_code.zip'));
    
    console.log('Uploading to bashupload.com...');
    const response = await axios.post('https://bashupload.com/', form, {
      headers: form.getHeaders()
    });
    
    console.log('UPLOAD_SUCCESS:');
    console.log(response.data);
  } catch (err) {
    console.error('Error uploading:', err.message);
  }
}

uploadFile();
