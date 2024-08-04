import AboutBack from "../../../public/assets/Home/AboutSection/AboutSectionBack.svg";

function About() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white  bg-gradient-to-r from-white">
      <div className="relative w-full max-w-2xl mx-4">
        <div
          className="absolute  bg-cover "
          style={{
            backgroundImage: `url(${AboutBack})`,
            filter: "brightness(0.6)",
            clipPath: "polygon(0 0, 25% 0, 25% 100%, 0 100%)",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ebdfcf] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 z-0"></div>

        <div className="relative bg-[#223A39] bg-opacity-90 text-white p-8 rounded-3xl max-w-2xl flex flex-col justify-center items-center text-center">
          <h1 className="text-[#9D6636] text-xl mb-4 relative">
            عن دار الرحمة
          </h1>
          <p className="mb-6 leading-relaxed relative z-10">
            كيان استشاري هندسي يحظى بخبرة تراكمية تتجاوز الـ50 عاماً مقرونة بفهم
            عميق للسياق المحلي مكنته من صياغة رؤى استراتيجية وتنفيذ مشروعات
            نوعية في مجالات التخطيط والتصميم العمراني والإدارة الهندسية
          </p>
          <button className="text-[#9D6636] hover:text-amber-400 relative z-10">
            ← تعرف على المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
