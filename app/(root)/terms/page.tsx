const TermsOfService = () => {
  return (
    <div className="container mx-auto py-10 space-y-7">
      <h1 className="text-3xl font-bold text-center">Terms of Service Kamar Sains</h1>
      <p className="text-gray-600 text-center">Terakhir diperbarui: [Tanggal]</p>
      <p className="text-gray-700">Selamat datang di Kamar Sains! Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan berikut ini.</p>
      
      <div className="space-y-5">
        <h2 className="text-xl font-semibold">Penggunaan Layanan</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Anda setuju untuk menggunakan layanan ini hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku.</li>
          <li>Dilarang menggunakan layanan untuk menyebarkan konten yang melanggar hukum, menyesatkan, atau merugikan pihak lain.</li>
        </ul>
      
        <h2 className="text-xl font-semibold">Akun Pengguna</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Anda bertanggung jawab atas keamanan akun Anda, termasuk kata sandi dan informasi pribadi lainnya.</li>
          <li>Kamar Sains berhak menonaktifkan akun yang terindikasi melakukan pelanggaran atau aktivitas mencurigakan.</li>
        </ul>
      
        <h2 className="text-xl font-semibold">Hak Kekayaan Intelektual</h2>
        <p className="text-gray-700">Seluruh konten di Kamar Sains, termasuk teks, gambar, dan video, dilindungi oleh hak cipta. Anda tidak diperkenankan menyalin, menyebarluaskan, atau memodifikasi konten tanpa izin resmi.</p>
      
        <h2 className="text-xl font-semibold">Pembatasan Tanggung Jawab</h2>
        <p className="text-gray-700">Kamar Sains tidak bertanggung jawab atas kerugian yang timbul akibat penggunaan layanan ini. Kami berupaya menyediakan informasi yang akurat, tetapi tidak menjamin keakuratan atau kelengkapannya.</p>
      
        <h2 className="text-xl font-semibold">Perubahan Syarat & Ketentuan</h2>
        <p className="text-gray-700">Kami dapat mengubah Syarat & Ketentuan ini kapan saja. Anda disarankan untuk meninjau halaman ini secara berkala untuk pembaruan.</p>
      
        <h2 className="text-xl font-semibold">Hubungi Kami</h2>
        <p className="text-gray-700">Jika Anda memiliki pertanyaan terkait Syarat & Ketentuan ini, silakan hubungi kami melalui:</p>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Email</strong>: [Email Kamar Sains]</li>
          <li><strong>Media Sosial</strong>: [Akun Media Sosial Kamar Sains]</li>
        </ul>
      </div>
      
      <p className="text-gray-700 text-center">Terima kasih telah menggunakan Kamar Sains!</p>
    </div>
  );
};

export default TermsOfService;