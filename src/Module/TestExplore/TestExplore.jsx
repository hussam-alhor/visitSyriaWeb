import React from 'react'
import Explore from '../Explore/Explore'
import logo from '../../../public/assets/img/logo.png'
import hotelBG from '../../../public/assets/img/hotelBG.png'
import hotelslide1 from '../../../public/assets/img/hotelslide1.png'
import hotelslide2 from '../../../public/assets/img/hotelslide2.png'
import hotelslide3 from '../../../public/assets/img/hotelslide3.png'
export default function TestExplore() {
    return (
        <div>
            <Explore
                nameTitle='فندق بيت الوالي'
                location='دمشق - طريق بابت توما الرئيسي'
                description='يتميز بتصميمه الداخلي الفخم وموقعه المميز بالقرب من المعالم السياحية والتاريخية.ويضم 40 غرفة وجناحاً . 
غرف النزلاء توفر سبل راحة مثل ميني بار وتكييف هواء كما يستطيع النزلاء الاتصال بالإنترنت من خلال خدمة واي فاي مجانية التي يقدمها الفندق.
تتميز الغرف في Beit Al Wali Hotel بخدمة الغرف، لإقامة ممتعة حقًا. تتميز المنشأة أيضًا بتجهيزات مثل الإفطار و غيرها .....'
                logo={logo}
                mainImg={hotelBG}
                oneImg={hotelslide1}
                twoImg={hotelslide2}
                ThreeImg={hotelslide3}
                service1='قامة / غرف و أجنحة '
                service2='مطاعم و تراسات '
                service3='حمام سباحة'
                service4='مسبح و أنشطة أطفال'
                rooms='' />
        </div>
    )
}
