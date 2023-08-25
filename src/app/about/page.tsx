import MainHeader from "@/components/mainHeader";

const About = () => {
  return (
    <section className="flex flex-col">
      <MainHeader title={"About Me"} />
      <hr />
      <p className="mb-[13px] mt-[29px]">
        Perkenalkan, Nama saya Ahmad Aby Ayyasi atau biasa dipanggil Aby. Saat
        ini saya berumur 16 tahun. Saya tinggal di Bogor, Jawa Barat. Saat ini,
        saya masih duduk dibangku sekolah SMK, bersekolah di SMK Plus Pelita
        Nusantara kelas XI RPL-2. Dan Sekarang, saya sedang mempelajari
        framework dari React.JS yaitu Next.JS
      </p>
      <p className="my-[13px]">
        Saya percaya bahwa pengembangan perangkat lunak bukan hanya tentang
        menulis kode, tetapi juga tentang memahami kebutuhan pengguna dan
        memastikan pengalaman pengguna yang optimal. Dengan itu, saya selalu
        berusaha untuk memahami konteks bisnis yang mendukung produk yang saya
        buat dan mengoptimalkan solusi yang dapat memberikan dampak positif bagi
        bisnis dan pengguna. Saya senang berbagi pengalaman saya dalam
        mengembangkan perangkat lunak dan memberikan solusi teknologi yang
        inovatif.
      </p>
      <p className="my-[13px]">
        Silakan jelajahi portofolio saya dan jangan ragu untuk menghubungi saya
        jika Anda tertarik untuk bekerja sama atau berdiskusi lebih lanjut
        tentang proyek Anda. <br /> Terima kasih telah mengunjungi halaman saya!
      </p>
    </section>
  );
};

export default About;
