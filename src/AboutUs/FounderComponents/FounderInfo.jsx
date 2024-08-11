import React from "react";
import FounderImage from "../../../public/assets/AboutUs/FounderSection/Self.svg";
import TopCorner from "../../../public/assets/AboutUs/FounderSection/TopCornerImage.svg";
import FounderHistory from "./FounderHistory";
import Paragraph from "../../SharedComponents/Paragraph";
import Heading from "../../SharedComponents/Heading";

function FounderInfo() {
  return (
    <div className="relative -mx-20">
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="absolute top-0 right-0 z-0">
          <img
            src={TopCorner}
            alt="Orange Background"
          />
        </div>
        <div className="relative rounded-[30px] flex flex-col md:flex-row justify-between items-center p-8">
          <div className="mb-6 md:mb-0 ml-10">
            <div className="w-52 h-52">
              <img src={FounderImage} alt="Profile" className="relative" />
            </div>
          </div>

          <div className="ml-0 md:ml-8 text-center md:text-right">
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              المؤسس والمدير العام
            </h2>
            <p className="text-lg text-[#BE894A] mb-4">
              معالي المهندس / عمر عبد الله قاضي
            </p>
            <Paragraph className="text-[#1E1E1E] mb-4 text-justify">
              الحمد لله الذي خلق الإنسان وعلمه البيان وكرمه وسخر المخلوقات
              لعمارة الأرض، وجعل الإخلاص في العمل وإتقانه منهجا لبناء الحضارة
              الإنسانية، وتطور الحياة البشرية، ومنطلقا للجودة والتنمية، وطريقة
              مثلى للتميز والإبداع. وهذا هو ديدن دار الرحمة للاستشارات الهندسية
              لتقديم خدماتها في مجالات التصميم المعماري والتخطيط العمراني،
              والإشراف على تنفيذ المشاريع الذي انطلقت من خلاله للوصول لأقصى آفاق
              النجاح، مستعينين بالله عز وجل، ثم بخبراتنا الطويلة في مجالات شتى
              منها مجال تخصصنا العلمي والعملي.
            </Paragraph>
          </div>
        </div>

        <Paragraph className="text-justify ">
          ومن نافلة القول أن العالم الآن يتطلع إلى المدن الذكية، التي تتحقق فيها
          تطبيقات وتقنيات علمية متقدمة لتحسين مستوى معيشة السكان، وتحقيق كرامة
          الإنسان، ومساعدة صانعي القرار في المدن لاتخاذ القرارات الصائبة، التي
          تحقق مفهوم التنمية المستدامة، مثل تصميم المناطق الصناعية صديقة البيئة،
          وتطوير آليات اتخاذ القرارات التنموية، عن طريق إنشاء المراصد الحضرية،
          وكذلك إجراء الدراسات والبحوث للوصول إلى الإجراءات والقرارات المناسبة
          تحقيق رؤية المملكة العربية السعودية 2030.
        </Paragraph>
        <Paragraph className="text-justify  py-10">
          ومن نافلة القول أن العالم الآن يتطلع إلى المدن الذكية، التي تتحقق فيها
          تطبيقات وتقنيات علمية متقدمة لتحسين مستوى معيشة السكان، وتحقيق كرامة
          الإنسان، ومساعدة صانعي القرار في المدن لاتخاذ القرارات الصائبة، التي
          تحقق مفهوم التنمية المستدامة، مثل تصميم المناطق الصناعية صديقة البيئة،
          وتطوير آليات اتخاذ القرارات التنموية، عن طريق إنشاء المراصد الحضرية،
          وكذلك إجراء الدراسات والبحوث للوصول إلى الإجراءات والقرارات المناسبة
          تحقيق رؤية المملكة العربية السعودية 2030.
        </Paragraph>
        <Paragraph className="text-justify pb-10">
          وتتميز دار الرحمة للاستشارات الهندسية بوجود مقرها الرئيس في العاصمة
          المقدسة مكة المكرمة بما لها من القدسية والمهابة والمنزلة والمكانة،
          والتي تترسم دار الرحمة خطاها من خال الطابع المعماري اللائق، وإيجاد
          الحلول البيئية المناسبة بتفاصيلها الدقيقة، وهذا هو نهج دار الرحمة
          للاستشارات الهندسية في تقديمها للخدمات الهندسية.
        </Paragraph>
        <Paragraph className="text-justify pb-10">
          إن الجد والعزيمة والإخاص والإتقان أساس العمل في دار الرحمة التي تمتد
          أعمالها في مجال تخصصها بفضل الله تعالى في كل مكان من بلادنا المباركة،
          باستعدادات وكوادر هندسية وإدارية راقية تصبو دائما لتحقيق الأفضل،
          لتتفوق وتتصدر ركب الخدمات الاستشارية الهندسية في المملكة العربية
          السعودية.
        </Paragraph>
        <Paragraph className="text-justify pb-20">
          إن الجد والعزيمة والإخاص والإتقان أساس العمل في دار الرحمة التي تمتد
          أعمالها في مجال تخصصها بفضل الله تعالى في كل مكان من بلادنا المباركة،
          باستعدادات وكوادر هندسية وإدارية راقية تصبو دائما لتحقيق الأفضل،
          لتتفوق وتتصدر ركب الخدمات الاستشارية الهندسية في المملكة العربية
          السعودية.
        </Paragraph>

        <Heading className="text-primary py-32">المؤسس في سطور</Heading>
      </div>

      <div className="relative w-full max-w-6xl mx-auto mt-10">
        <FounderHistory />
      </div>
    </div>
  );
}

export default FounderInfo;
