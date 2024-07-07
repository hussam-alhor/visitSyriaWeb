import './AboutSyria.css';
import about from '/assets/img/About.png';
import back from '/assets/img/chevron_back.png';
import vector1 from '/assets/img/1.png';
import vector2 from '/assets/img/2.png';
import vector3 from '/assets/img/3.png';
import BackGreen from '/assets/img/greenBack.png';

const AboutSyria = () => (
  <div className="overview-section">
    <div className="overview-map-container">
      <img src={BackGreen} alt="Background" className="background-image" />
      <img src={about} alt="Map of Syria" className="map-image" />
      <div className="map-point point1">
        <img src={vector1} alt="طبيعة ساحرة" />
        <span>طبيعة ساحرة</span>
      </div>
      <div className="map-point point2">
        <img src={vector2} alt="آثار ومعالم" />
        <span>آثار ومعالم</span>
      </div>
      <div className="map-point point3">
        <img src={vector3} alt="التاريخ والحضارات" />
        <span>التاريخ والحضارات</span>
      </div>
    </div>
    <div className="overview-text">
      <h2>نبذة عامة</h2>
      <p>
        تقع سوريا في منطقة الشرق الأوسط، وتتمتع بموقع جغرافي متميز، حيث تربط بين آسيا وأفريقيا وأوروبا.
        هذا الموقع جعلها مركزًا تجاريًا وثقافيًا مهمًا من آلاف السنين. تمتلك سوريا تاريخًا عريقًا يعود إلى آلاف
        السنين، حيث كانت موطنًا للعديد من الحضارات القديمة، مثل الحضارة الآشورية والحضارة البابلية والحضارة الفينيقية.
      </p>
      <button className="custom-button">اقرأ المزيد <img src={back} alt="back" /></button>
    </div>
  </div>
);

export default AboutSyria;
