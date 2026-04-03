import fs from 'fs';
import path from 'path';

const dir = process.cwd();
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const translateScript = `
    <!-- Google Translate -->
    <div id="google_translate_element" style="display:none;"></div>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'pt', includedLanguages: 'pt,en,es,de,it,zh-CN,fr', autoDisplay: false}, 'google_translate_element');
        }
        function translatePage(lang) {
            var selectField = document.querySelector("select.goog-te-combo");
            if (selectField) {
                selectField.value = lang;
                selectField.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>`;

const oldHeaderRegex = /<div class="flex items-center gap-2 text-sm font-bold text-slate-400">\s*<a href="#"[^>]*>PT<\/a>\s*<span>\|<\/span>\s*<a href="#"[^>]*>EN<\/a>\s*<span>\|<\/span>\s*<a href="#"[^>]*>ES<\/a>\s*<span>\|<\/span>\s*<a href="#"[^>]*>DE<\/a>\s*<span>\|<\/span>\s*<a href="#"[^>]*>IT<\/a>\s*<span>\|<\/span>\s*<a href="#"[^>]*>ZH<\/a>\s*<span>\|<\/span>\s*<a href="#"[^>]*>FR<\/a>\s*<\/div>/g;

const newHeader = `<div class="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <button onclick="translatePage('pt')" class="hover:text-primary transition-colors cursor-pointer">PT</button>
                    <span>|</span>
                    <button onclick="translatePage('en')" class="hover:text-primary transition-colors cursor-pointer">EN</button>
                    <span>|</span>
                    <button onclick="translatePage('es')" class="hover:text-primary transition-colors cursor-pointer">ES</button>
                    <span>|</span>
                    <button onclick="translatePage('de')" class="hover:text-primary transition-colors cursor-pointer">DE</button>
                    <span>|</span>
                    <button onclick="translatePage('it')" class="hover:text-primary transition-colors cursor-pointer">IT</button>
                    <span>|</span>
                    <button onclick="translatePage('zh-CN')" class="hover:text-primary transition-colors cursor-pointer">ZH</button>
                    <span>|</span>
                    <button onclick="translatePage('fr')" class="hover:text-primary transition-colors cursor-pointer">FR</button>
                </div>`;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace header
    content = content.replace(oldHeaderRegex, newHeader);
    
    // Add script before </body> if not already there
    if (!content.includes('google_translate_element')) {
        content = content.replace('</body>', translateScript);
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
}
