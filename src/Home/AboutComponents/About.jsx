import cool from "/assets/Home/AboutSection/Artboard 1 copy 9PNG.png";

function About() {
  return (
    <div className="relative flex justify-center items-center min-h-screen px-10 ">
      <div className="relative w-full max-w-2xl mx-4">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-48 sm:h-48 bg-[#ebdfcf] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 z-0"></div>

        <div
          className="relative bg-[#223A39] text-white p-4 rounded-3xl sm:p-8 flex flex-col justify-center items-center max-w-full "
          style={{
            width: "800px",
            height: "300px",
            backgroundImage: `url(${cool})`,
            backgroundSize: "30%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-[#9D6636]  font-bold mb-4 relative text-xl sm:text-2xl ">
            عن دار الرحمة للاستشارات
          </h1>
          <p
            className="mb-6 leading-relaxed text-sm sm:text-base md:text-lg relative z-10  text-justify  "
            style={{
              textAlign: "right",
            }}
          >
            كيان استشاري هندسي يحظى بخبرة تراكمية تتجاوز الـ50 عاماً مقرونة بفهم
            عميق للسياق المحلي مكنته من صياغة رؤى استراتيجية وتنفيذ مشروعات
            نوعية في مجالات التخطيط والتصميم العمراني والإدارة الهندسية
          </p>
          <button className="text-[#BE894A] hover:text-amber-400 relative z-10">
            ← تعرف على المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
