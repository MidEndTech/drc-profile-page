import Heading from "../../SharedComponents/Heading";
import Paragraph from "../../SharedComponents/Paragraph";

function AboutSection() {
  return (
    <div className="overflow-hidden">
      <main className="w-screen h-screen flex flex-col-reverse justify-center md:flex-row-reverse md:items-center md:justify-between relative">
        <img
          src="/assets/AboutUs/HeroSection/Bubble.svg"
          className="z-0 absolute top-0 right-0"
        />
        <section
          data-aos="slide-up"
          data-aos-duration="1000"
          data-aos-once={true}
          className="grid gap-2 justify-items-center m-2 md:m-4 md:mb-0 md:ml-8 lg:ml-20"
        >
          <img
            src="/assets/AboutUs/HeroSection/Image-1.svg"
            className="col-span-2"
          />
          <img
            src="/assets/AboutUs/HeroSection/Image-2.svg"
            className=" col-end-6 col-span-3"
          />
          <img
            src="/assets/AboutUs/HeroSection/Image-3.svg"
            className="col-start-2 col-span-2"
          />
        </section>
        <section
          data-aos="slide-up"
          data-aos-duration="1000"
          data-aos-once={true}
          className="flex flex-col relative w-11/12 md:w-1/3 gap-4 z-20 m-2 md:m-4 md:mb-0 md:mr-8 lg:mr-20"
        >
          <img
            src="/assets/AboutUs/HeroSection/BackgroundLogo.svg"
            className="absolute z-0 -top-5 w-1/3 md:w-auto"
          />
          <Heading className="text-dark-green z-10">
            عن دار الرحمة للاستشارات الهندسية
          </Heading>
          <Paragraph className="text-[#1E1E1E] text-justify z-10">
            كيان استشاري هندسي يحظى بخبرة تراكمية تتجاوز الـ50 عاماً مقرونة بفهم
            عميق للسياق المحلي مكنته من صناعة رؤى استراتيجية وتنفيذ مشروعات
            نوعية في مجالات التخطيط والتصميم العمراني والإدارة الهندسية، يمتاز
            بتمركزه داخل منظومة ضيوف الرحمن مقراً ومشروعات، مع سعيه الدائم
            للإتقان وتحقيق التوازن بين الأبعاد المختلفة ومراعاة كافة المحددات
            لترك بصمة واضحة.
          </Paragraph>
        </section>
      </main>
    </div>
  );
}

export default AboutSection;
