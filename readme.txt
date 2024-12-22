# IoTLogger - Installation and Deployment Guide

## 1. Clone Repository

Langkah pertama adalah meng-clone repository **IoTLogger** ke dalam komputer lokal Anda. Untuk melakukannya, buka terminal dan jalankan perintah berikut:

```bash
git clone https://github.com/FaisalRafi01/PWEBC_IoTLogger.git
2. Masuk ke Direktori Proyek
Setelah selesai meng-clone repositori, masuk ke dalam direktori proyek dengan perintah berikut:

bash
Copy code
cd PWEBC_IoTLogger
3. Install Dependencies
Proyek ini menggunakan Node.js dan npm untuk mengelola dependensi, serta EJS sebagai template engine. Pastikan Anda sudah menginstall Node.js dan npm di komputer Anda. Jika belum, Anda dapat mengunduhnya di Node.js Official Website.

Setelah itu, jalankan perintah berikut untuk menginstall semua dependensi yang diperlukan oleh aplikasi:

bash
Copy code
npm install
Perintah ini akan mengunduh dan menginstal semua dependensi yang tercantum dalam file package.json, termasuk EJS sebagai template engine.

4. Struktur Proyek dan Penggunaan EJS
Proyek ini menggunakan EJS sebagai template engine untuk rendering halaman HTML. File EJS biasanya terletak di dalam folder views di dalam proyek Anda.

Jika Anda ingin menambahkan atau mengubah tampilan, Anda bisa memodifikasi file-file yang ada di dalam folder views sesuai kebutuhan.

5. Menjalankan Aplikasi Secara Lokal
Setelah semua dependensi terinstall, Anda dapat menjalankan aplikasi dengan perintah berikut:

bash
Copy code
npm start
Aplikasi akan berjalan di http://localhost:3000 secara default. Anda dapat membuka aplikasi di browser dengan mengunjungi URL tersebut.

6. Deploy ke OnRender
Setelah berhasil menjalankan aplikasi secara lokal, Anda dapat mendeply aplikasi ke OnRender. Ikuti langkah-langkah berikut untuk mendeply aplikasi Anda ke OnRender.

6.1 Buat Akun di OnRender
Jika Anda belum memiliki akun di OnRender, Anda bisa mendaftar di OnRender.com.

6.2 Buat New Web Service di OnRender
Setelah login ke akun OnRender, pilih New Web Service.
Pilih Deploy from GitHub.
Hubungkan akun GitHub Anda dengan OnRender jika belum terhubung.
Pilih repositori yang ingin Anda deploy, dalam hal ini PWEBC_IoTLogger.
6.3 Konfigurasi Deployment
Build Command: Anda bisa menggunakan perintah npm install untuk menginstall dependensi, atau biarkan OnRender mendeteksi perintah otomatis.
Start Command: Gunakan perintah berikut untuk menjalankan aplikasi:
bash
Copy code
npm start
6.4 Pilih Region dan Deploy
Pilih region terdekat dengan lokasi server Anda untuk mengoptimalkan performa.
Klik tombol Create Web Service untuk memulai proses deploy.
6.5 Akses Aplikasi yang Sudah Dideploy
Setelah proses deploy selesai, OnRender akan memberikan URL untuk aplikasi Anda. Anda dapat mengakses aplikasi yang sudah dideploy melalui URL tersebut.

7. Konfigurasi (Jika Diperlukan)
Pastikan untuk memeriksa dan menyesuaikan pengaturan di file konfigurasi yang diperlukan (misalnya, .env atau file konfigurasi lainnya). Pada saat deploy ke OnRender, Anda dapat menambahkan variabel lingkungan di dashboard OnRender di bagian Environment Variables jika diperlukan.

8. Mengatasi Masalah
Jika Anda mengalami masalah saat menjalankan aplikasi, Anda dapat memeriksa bagian Issues di repositori GitHub ini untuk mencari solusi yang relevan atau membuka Issue baru untuk mendapatkan bantuan lebih lanjut.

Dengan mengikuti langkah-langkah di atas, Anda akan dapat menginstall, menjalankan, dan mendeply IoTLogger pada komputer lokal Anda serta di OnRender.

Instruksi ini siap digunakan untuk men-setup dan mendeply aplikasi IoTLogger menggunakan npm, EJS, dan OnRender.

markdown
Copy code

### Penjelasan Format:
- **Markdown Syntax**: Menggunakan header (`#`), sub-header (`##`), dan kode blok (` ``` `) untuk membagi informasi menjadi bagian-bagian yang jelas dan mudah dibaca.
- **Daftar Langkah yang Terstruktur**: Setiap langkah dipecah dengan jelas menggunakan nomor dan bullet points agar mudah dipahami.
- **Link dan Referensi**: Tautan yang relevan (seperti ke halaman **Node.js** dan **OnRender**) diberi tanda dengan format `[text](url)`.

Dengan format ini, instruksi menjadi lebih rapi, terstruktur dengan baik, dan lebih mudah untuk diikuti oleh pengguna GitHub yang mengunjungi repositori Anda.





==================================================================================================

DESCRIPTION:

FLARE is a free landing page and website template designed for digital agency or startup. With 
this template, you can now easily create a website that would make a strong and lasting impression. 
Its trendy, modern, and sophisticated style will surely help your site to stand out visually and 
grab the attention of those potential clients.

==================================================================================================


LICENSE:

This free resource is provided by styleshout.com and is free to use in 
both personal and commercial projects.


Rights:
-------

You are permitted to use this free resource in any number of personal and commercial projects for 
yourself or a client. You may modify the resource according to your requirements and include them 
in your projects under the following condition - you MUST give appropriate credit, provide an 
attribution link to styleshout.com.


Prohibitions:
-------------

You are not permitted to resell or redistribute(even for free) the resource "as is" without 
prior consent. If you would like to republish or promote this resource on your site, please 
link back to the appropriate resource page on styleshout.com where users can find the download 
and not directly to the download zip file.


Attribution: 
------------

You must include a credit link to our website(https://www.styleshout.com) somewhere on your site. 
We prefer the footer credit that comes with the template but you are still free to move it 
somewhere else.



If you have any questions about the License, feel free to contact us.


-----------------------------------------------------------------------------------------------------


REMOVING THE ATTRIBUTION LINK:

We understand that there are situations where you want to use our templates without 
the crediting obligation. If that's your case, you can always send us a 
credit removal fee of 10 USD through Paypal. This will allow you to use a single 
template attribution/credit link free on ONE DOMAIN name.

You can send your payments through Paypal to this address: ealigam@gmail.com or
visit our attribution removal page: https://www.styleshout.com/attribution-free/ 
and click the pay button on the page.

If possible, kindly send us the site's url where the template is being used. 
Also, keep your Paypal receipt as proof of payment and your good to go.


------------------------------------------------------------------------------------------------------ 


SUPPORT:
    
Since FLARE is distributed for free, support is not offered. FLARE is coded according 
to current web standards and we did our best to make the template easy to use and modify.
If you have minimum web development experience, you can easily modify the template. 
However, If you're still new to HTML and CSS, I suggest that you visit the 
following tutorials:

 - https://marksheet.io/
 - http://learn.shayhowe.com/html-css/

These will teach you the essentials of HTML and CSS. In addition, if you want to include
jQuery in your skill-set, you can also check out these tutorials: 

 - https://code.tutsplus.com/courses/30-days-to-learn-jquery
 - https://code.tutsplus.com/courses/introduction-to-jquery


------------------------------------------------------------------------------------------------------ 


GET THE LATEST VERSION:

We update our templates on a regular basis so to make sure that you have the latest version, 
always download the template files directly on our website(https://www.styleshout.com/)



-------------------------------------------------------------------------------------------------------


SOURCES AND CREDITS:

I've used the following resources as listed.

Fonts:
 - Nunito Sans Font (https://fonts.google.com/specimen/Nunito+Sans)
 - Montserrat Font (https://fonts.google.com/specimen/Montserrat)

Icons:
 - Iconmonstr (https://iconmonstr.com/)
 - Font Awesome (https://fontawesome.com/)
 - Simple Icons (https://simpleicons.org/)
 - Creative Process Vector Icons (https://pixelbuddha.net/freebie/creative-process-vector-icons)

Stock Photos and Graphics:
 - Unsplash.com (https://unsplash.com/)
 
Javascript Files:
 - JQuery (http://jquery.com/)
 - Modernizr (http://modernizr.com/)
 - PhotoSwipe (https://photoswipe.com/)
 - Slick slider (http://kenwheeler.github.io/slick/)
 - Animate On Scroll (https://michalsnik.github.io/aos/)
 - Code Prettify (https://github.com/google/code-prettify)
 - Lity (https://sorgalla.com/lity/)

-------------------------------------------------------------------------------------------------------


Thanks for downloading from Styleshout :)


