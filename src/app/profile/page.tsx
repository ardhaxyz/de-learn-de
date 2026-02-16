export default function ProfilePage() {
  return (
    <div className="p-6 text-center">
      <div className="w-24 h-24 bg-de-gold rounded-full mx-auto mb-4 flex items-center justify-center text-de-black text-3xl font-bold">
        S
      </div>
      <h1 className="text-2xl font-bold">Profil Pengguna</h1>
      <p className="text-gray-500">Sutopo</p>
      
      <div className="mt-8 space-y-2">
        <button className="w-full p-4 bg-gray-50 rounded-xl text-left font-bold">Pengaturan</button>
        <button className="w-full p-4 bg-gray-50 rounded-xl text-left font-bold">Statistik</button>
        <button className="w-full p-4 bg-gray-50 rounded-xl text-left font-bold text-de-red">Keluar</button>
      </div>
    </div>
  );
}
