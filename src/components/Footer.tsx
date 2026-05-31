export const Footer = () => (
    <footer className="bg-maroon text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
                <h3 className="font-serif text-2xl font-bold text-gold">SR12</h3>
                <p className="mt-4">Sehat, Cantik, dan Berkah.</p>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4">Kontak</h4>
                <p>Jl. Contoh No. 123, Jakarta</p>
                <p>Email: info@sr12.co.id</p>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4">Sosial Media</h4>
                {/* Links */}
            </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-maroon-800">
            &copy; {new Date().getFullYear()} SR12 Herbal Skincare
        </div>
    </footer>
);
