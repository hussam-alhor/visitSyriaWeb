import "./BlogSection.css";
import blog from "/assets/img/Blog.png";
import back from "/assets/img/chevron_back.png";
import greren from "/assets/img/gren.png";
const BlogSection = () => (
    <div className="blog-section container section">
      <div className="blog row">
      <h2>المدونة</h2>
        <div className="para col-md-6">
          <p>
            اقرأ المدونات التي تتحدث عن طبيعة وآثار سوريا. نستعرض لكم قصصًا
            استثنائية من على مر العصور، بالإضافة إلى الثقافات التي نشأت في هذا
            البلد الجميل.
          </p>
          <button className="button ">
            من هنا <img src={back} alt="" />
          </button>
        </div>
        <div className="img col-md-6">
          <img src={blog} alt="Blog" className="img-fluid" />
          <img src={greren} alt="Blog" className="img-fluid2" />
        </div>
      </div>
    </div>
);

export default BlogSection;
