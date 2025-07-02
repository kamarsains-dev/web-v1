const FeatureTable = () => {
    return (
        <div className="container flex flex-col justify-center items-center gap-y-6 pt-20 mb-14">
            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">No Gimmicks. <a className="text-[#F6FF00]">Just Results.</a></h1>
            <div className="bg-gradient-green p-1 rounded-2xl">
                <div className="bg-hero-pattern rounded-xl">
                    <table className="w-full text-left table-row">
                    <thead>
                        <tr className="text-white text-center">
                        <th className="py-4 px-4 text-lg">Benefit</th>
                        <th className="py-4 px-4 text-lg">App Lain</th>
                        <th className="py-4 px-4 text-lg text-[#F6FF00]">Kamar Sains</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-white font-normal">
                        {[
                        {
                            fitur: "Pause Otomatis Saat Terputus",
                            deskripsi: "Mati lampu? Wi-Fi hilang? Tenang, jawaban tersimpan, waktu berhenti. Lanjut lagi dari soal terakhir, seolah nggak pernah terputus.",
                        },
                        {
                            fitur: "Super Ringan, Anti Lag",
                            deskripsi: "App kami nggak bikin HP-mu ngos-ngosan. Belajar lancar, tanpa drama nge-lag di tengah soal.",
                        },
                        {
                            fitur: "Login Sekali, Langsung Masuk",
                            deskripsi: "Gak ada loading muter terus yang bikin frustrasi.",
                        },
                        {
                            fitur: "Tanpa Update Palsu",
                            deskripsi: "Tiap pembaruan di Kamar Sains = pembaruan fitur nyata. Bukan sekadar ganti versi tanpa perubahan berarti.",
                        },
                        {
                            fitur: "Bebas Iklan, 100% Fokus Belajar",
                            deskripsi: "Kami gak ganggu konsentrasimu dengan promosi tiap 5 menit. Yang muncul di layar cuma yang bantu kamu belajar lebih baik.",
                        }
                        ].map((item, i) => (
                        <tr
                            key={i}
                            className="border-t border-[#fff56a1a] text-white "
                        >
                            <td className="px-4 py-6 text-[#F7F7F7]">
                            <span className="block font-semibold text-[#F6FF00] text-lg">{item.fitur}</span>
                            <span className="text-[#F2F2F2] text-sm">{item.deskripsi}</span>
                            </td>
                            <td className="px-4 py-6 text-center text-red-400 text-2xl font-bold">x</td>
                            <td className="px-4 py-6 text-center text-[#A0FBCD] text-2xl font-bold">√</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>    
            </div>
            
        </div>
        

    );
};

export default FeatureTable;