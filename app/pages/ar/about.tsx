"use client";

import Header from "../../../components/components/Header";
import Footer from "../../../components/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header lang="ar" />

      <div
        className="bg-cover bg-center py-20 mt-16"
        style={{ backgroundImage: "url(/images/about-img.jpg)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">من نحن</h2>
            <nav className="text-white" dir="rtl">
              <a href="/ar" className="hover:text-[#b0b435]">
                الرئيسية
              </a>
              <span className="mx-2">/</span>
              <span className="text-[#b0b435]">من نحن</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-lg"
                src="/images/Designer.jpeg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                من نحن <span className="text-[#b0b435]">الصفورا للتصدير</span>
              </h2>
              <p className="text-gray-600 mb-6">
                نحن في شركة الصفورا للتصدير نسعى دائماً لأن نكون في طليعة
                الشركات المصرية الرائدة في التصدير. تأسست شركتنا على الالتزام
                بتقديم منتجات زراعية وصناعية عالية الجودة للأسواق العالمية، بهدف
                تعزيز سمعة المنتجات المصرية وتقديمها كخيار موثوق ومميز بين
                المستهلكين الدوليين.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                رؤيتنا:
              </h3>
              <p className="text-gray-600 mb-6">
                نؤمن بأن التميز ليس مجرد هدف، بل هو أسلوب حياة. رؤيتنا في شركة
                الصفورا للتصدير هي أن نكون leaders في قطاع التصدير من خلال تقديم
                منتجات تتجاوز توقعات العملاء من حيث الجودة والموثوقية. نسعى لأن
                نكون الجسر الذي يربط الأسواق المصرية بالعالمية، وتقديم منتجاتنا
                بأعلى المعايير الدولية.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                مهمتنا:
              </h3>
              <p className="text-gray-600">
                نحن ملتزمون بتقديم خدمات تصدير شاملة تلبي احتياجات عملائنا حول
                العالم. من خلال تطبيق استراتيجيات تصدير مبتكرة، نضمن وصول
                المنتجات المصرية إلى وجهاتها في أفضل حالة مع الحفاظ على الكفاءة
                من حيث الوقت والتكلفة وسلامة وجودة المنتج طوال رحلته من المصدر
                إلى المستهلك النهائي.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                قيمنا
              </h3>
              <p className="text-gray-600">
                الجودة: نحن ملتزمون بتقديم منتجات متميزة تلبي المعايير العالمية.
                <br />
                <br />
                الشفافية: نسعى لبناء علاقات قائمة على الثقة والشفافية مع جميع
                شركائنا وعملائنا.
                <br />
                <br />
                الابتكار: نحن نتبنى باستمرار أحدث الابتكارات في الزراعة والصناعة
                لضمان تحسين منتجاتنا.
                <br />
                <br />
                الاستدامة: نولي أهمية قوية للاستدامة في جميع عملياتنا لحماية
                البيئة وتعزيز التنمية المستدامة.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                خدماتنا
              </h3>
              <p className="text-gray-600">
                نقدم مجموعة واسعة من المنتجات الزراعية والصناعية عالية الجودة.
                يشمل ذلك تصدير الخضروات والفواكة الطازجة والمنتجات الصناعية
                وال-many goods الأخرى التي يتم إنتاجها وفقاً لأعلى المعايير.
                نعمل مع شبكة واسعة من الموردين المحليين，以确保 أن每一个 المنتج
                الذي نصدره يعكس التزامنا بالجودة والتميز.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                التزامنا
              </h3>
              <p className="text-gray-600">
                في شركة الصفورا للتصدير، نحن مكرسون لتلبية احتياجات عملائنا
                بأعلى مستويات الكفاءة والاحترافية. نؤمن بأن علاقتنا مع عملائنا
                لا تنتهي بمجرد إتمام الصفقة؛ بل هي شراكة مستمرة aimed at mutual
                success. نركز على بناء علاقات طويلة الأمد قائمة على الثقة
                والاحترام المتبادل.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "/images/instagram-img-01.jpg",
              "/images/categories_img_02.jpg",
              "/images/categories_img_03.jpg",
              "/images/instagram-img-02.jpg",
              "/images/instagram-img-04.jpg",
            ].map((src, idx) => (
              <div key={idx} className="relative overflow-hidden group">
                <img
                  src={src}
                  alt=""
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer lang="ar" />
    </>
  );
}
