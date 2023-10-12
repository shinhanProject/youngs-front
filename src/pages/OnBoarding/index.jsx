import React, { useEffect, useRef } from "react";
import { Header, Footer } from "../../components";

import { OnboardingContainer, Wrapper } from "./styled";

const OnBoarding = () => {
  const element = useRef({});

  useEffect(() => {
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transition = "opacity 0.5s";
        } else {
          entry.target.style.opacity = 0;
          entry.target.style.transition = "opacity 0.5s";
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6,
    });
    Array.prototype.forEach.call(element.current.children, child => {
      observer.observe(child);
    });
  }, []);

  return (
    <>
      <Header />
      <OnboardingContainer ref={element}>
        <Wrapper theme="wrapper1">1</Wrapper>
        <Wrapper theme="wrapper2">2</Wrapper>
        <Wrapper theme="wrapper3">3</Wrapper>
        <Wrapper theme="wrapper4">4</Wrapper>
        <Wrapper theme="wrapper5">5</Wrapper>
        <Footer />
      </OnboardingContainer>
    </>
  );
};

export default OnBoarding;
