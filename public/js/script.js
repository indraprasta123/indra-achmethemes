//ham-menu 

$(document).ready(function(){
    $(".head").show();
    $("#show-menu").click(function(){  
      if($(".head").hasClass('head--close-menu')) {
        $(".head").removeClass('head--close-menu');
        $("body").removeClass("rm-scroll");
        $(".head__menu").removeClass('head--close-menu animate__animated animate__fadeInLeft');
      }
      else {
        $("body").addClass("rm-scroll");
        $(".head").addClass('head--close-menu');
        $(".head__menu").addClass('head--close-menu');
      }
    });
  });

  //animated scroll

  //Nav-menu
  // const elementsMenu = document.querySelectorAll('.head__menu');
  //Home
  const elementsHome = document.querySelectorAll('.home__content');
  //About
  const elementsAbout = document.querySelectorAll('.about__col-sm');
  //skill
  const elementsSkill = document.querySelectorAll('.skills__box-item');
  const elementsSkillHeader = document.querySelectorAll('.skills');
  //ervice
  const elementsService = document.querySelectorAll('.service__item');
  const elementsServiceHeader = document.querySelectorAll('.service__header');
  //experience
  const elementsExperience = document.querySelectorAll('.experience__timeline');
  const elementsExperienceHeader = document.querySelectorAll('.experience__header');
  //portfolio
  const elementsPortfolio = document.querySelectorAll('.portfolio__galery');
  const elementsPortfolioHeader = document.querySelectorAll('.portfolio__header');
  //portfolio-2
  const elementsPortfolio2 = document.querySelectorAll('.portfolio-feature-2__title-wrapper');
  const elementsPortfolio2Row = document.querySelectorAll('.portfolio-feature-2__row');
  //blog
  const elementsBlog = document.querySelectorAll('.blog__content-wrapper');
  const elementsBlogHeader = document.querySelectorAll('.blog__header');
  //testimonials
  const elementsTesti = document.querySelectorAll('.testimonial__feature');
  const elementsTestiHeader = document.querySelectorAll('.testimonial__header');
  //contact
  const elementsContact = document.querySelectorAll('.contact__feature-form');
  const elementsContactHeader = document.querySelectorAll('.contact__header');
  //client
  const elementsClient = document.querySelectorAll('.client__item');
  const elementsClientHeader = document.querySelectorAll('.client__header');
  //footer
  const elementsFooter = document.querySelectorAll('.footer__feature');


  let options = {
    root: null,
  }
  const callbacks = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('active');
      }
    });
  }

  //Nav-menu
  // const observerMenu = new IntersectionObserver(callbacks, options);
  // elementsMenu.forEach(item => {
  //   observerMenu.observe(item);
  // });
  //Home
  const observerHome = new IntersectionObserver(callbacks, options);
  elementsHome.forEach(item => {
    observerHome.observe(item);
  });
  //About
  const observerAbout = new IntersectionObserver(callbacks, options);
  elementsAbout.forEach(item => {
    observerAbout.observe(item);
  });
  //skill-hedaer
  const observerSkillHeader = new IntersectionObserver(callbacks, options);
  elementsSkillHeader.forEach(item => {
    observerSkillHeader.observe(item);
  });
  //skill
  const observerSkill = new IntersectionObserver(callbacks, options);
  elementsSkill.forEach(item => {
    observerSkill.observe(item);
  });
    //service-hedaer
  const observerServiceHeader = new IntersectionObserver(callbacks, options);
  elementsServiceHeader.forEach(item => {
    observerServiceHeader.observe(item);
  });
  //service
  const observerService = new IntersectionObserver(callbacks, options);
  elementsService.forEach(item => {
    observerService.observe(item);
  });
  //experience-header
  const observerExperienceHeader = new IntersectionObserver(callbacks, options);
  elementsExperienceHeader.forEach(item => {
    observerExperienceHeader.observe(item);
  });
  //experience-timeline
  const observerExperience = new IntersectionObserver(callbacks, options);
  elementsExperience.forEach(item => {
    observerExperience.observe(item);
  });
  //portfolio
  const observerPortfolio = new IntersectionObserver(callbacks, options);
  elementsPortfolio.forEach(item => {
    observerPortfolio.observe(item);
  });
  //portfolio-header
  const observerPortfolioHeader = new IntersectionObserver(callbacks, options);
  elementsPortfolioHeader.forEach(item => {
    observerPortfolioHeader.observe(item);
  });
  //portfolio2
  const observerPortfolio2 = new IntersectionObserver(callbacks, options);
  elementsPortfolio2.forEach(item => {
    observerPortfolio2.observe(item);
  });
  //portfolio2-row
  const observerPortfolio2Row = new IntersectionObserver(callbacks, options);
  elementsPortfolio2Row.forEach(item => {
    observerPortfolio2Row.observe(item);
  });
  //blog-header
  const observerBlogHeader = new IntersectionObserver(callbacks, options);
  elementsBlogHeader.forEach(item => {
    observerBlogHeader.observe(item);
  });
  //blog-content
  const observerBlog = new IntersectionObserver(callbacks, options);
  elementsBlog.forEach(item => {
    observerBlog.observe(item);
  });
  //testimonial-header
  const observerTestiHeader = new IntersectionObserver(callbacks, options);
  elementsTestiHeader.forEach(item => {
    observerTestiHeader.observe(item);
  });
  //testimonial-content
  const observerTesti = new IntersectionObserver(callbacks, options);
  elementsTesti.forEach(item => {
    observerTesti.observe(item);
  });
  //contact-header
  const observerContactHeader = new IntersectionObserver(callbacks, options);
  elementsContactHeader.forEach(item => {
    observerContactHeader.observe(item);
  });
  //contact-feature
  const observerContact = new IntersectionObserver(callbacks, options);
  elementsContact.forEach(item => {
    observerContact.observe(item);
  });
  //client-header
  const observerClientHeader = new IntersectionObserver(callbacks, options);
  elementsClientHeader.forEach(item => {
    observerClientHeader.observe(item);
  });
  //client-item
  const observerClient = new IntersectionObserver(callbacks, options);
  elementsClient.forEach(item => {
    observerClient.observe(item);
  });
  //footer
  const observerFooter = new IntersectionObserver(callbacks, options);
  elementsFooter.forEach(item => {
    observerFooter.observe(item);
  });
    