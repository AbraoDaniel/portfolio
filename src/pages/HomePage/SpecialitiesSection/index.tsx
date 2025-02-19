import { Col, Row } from "antd"
import CardContent from "./CardContent"
import { specialitiesContent } from "../../../util/generalFields"
import { useEffect, useRef, useState } from "react";

const SpecialitiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting); // Atualiza o estado quando a seção entra na tela
        }
      },
      { threshold: 0.5 } // A ação dispara quando 30% da seção aparece na tela
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef}>
      <Row gutter={[16,16]} style={{width: '100%', padding: '0px 40px'}} className={`section-row ${visible ? 'visible' : ''}`}>
        {specialitiesContent?.map((speciality, index) => {
          return (
            <Col xs={8}>
              <CardContent number={(index + 1)?.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} title={speciality?.title} text={speciality?.text} link={speciality?.link}/>
            </Col>
          )
        })}
      </Row> 
    </section>
  )
}

export default SpecialitiesSection