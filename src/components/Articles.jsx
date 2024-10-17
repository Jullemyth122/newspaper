import React, { useEffect } from 'react'
import gsap from 'gsap'
const Articles = () => {


    useEffect(() => {

    },[])

    return (
        <div className='articles-comp h-full py-2'>
            <div className="img-tx block h-auto w-full py-5">
                <div className="block items-start justify-evenly lg:flex">
                    <div className="img-tx-item flex justify-center items-center h-auto w-auto">
                        <div className="img-item justify-self-auto place-items-center">
                        <video src="/vid1.mp4" controls></video>
                        <img src="/img/sample1.jpg" alt="" />
                        <h4 className=' -rotate-90 absolute'> 
                            CLIMATE CHANGE
                        </h4>
                        </div>
                    </div>
                    <div className="phrase-text w-full px-8 py-3">
                        <h4 className='text-4xl'> Global Capacity to Combat Climate Change: A Nation-by-Nation Analysis </h4>
                        <div className="line w-full h-0.5 bg-black"></div>
                        <h5 className='text-xl lg:text-2xl'> 
                            The capacity of nations to combat climate change varies significantly, as seen in china, japan, russia, and the Philippines. China leads in renewable energy investment but struggle with its heavy reliance on coal. Meanwhile, Japan focuses on resilience and disaster preparedness, Russia prioritizes economic growth over climate initiatives, and the Philippines, despite limited resources, actively seeks international support to address its vulnerability to climate impacts.
                        </h5>
                        <div className="line w-full h-0.5 bg-black"></div>
                        <h6 className='adv-tx1'> 
                        “Global Capacity to Combat Climate Change: A Nation-by-Nation
                        Analysis.” 
                        Environmental Policy Review,
                        <br/>
                        September 12, 2023.
                        </h6>
                    </div>
                </div>
                <div className="list-states flex flex-wrap items-start justify-evenly py-4">
                    <div className="state-item w-80">
                        <div className="sti flex items-center justify-between w-ful">
                            <h5> 1 </h5>
                            <h3 className='text-2xl flex items-center justify-center'> Japan </h3>
                        </div>
                        <hr />
                        <div>
                            <p> 
                                Japan has made significant investments in technology and infrastructure to address climate change, including advancements in renewable energy and disaster resilience. However, it also faces challenges such as an aging population and vulnerability to natural disasters, which can complicate its response efforts.
                            </p>
                            <img src="/flag/f1.png" alt="" />
                        </div>
                    </div>
                    <div className="state-item w-80">
                        <div className="sti flex items-center justify-between w-ful">
                            <h5> 2 </h5>
                            <h3 className='text-2xl flex items-center justify-center'> Russia </h3>
                        </div>
                        <hr />
                        <div>
                        <p> 
                            Russia has vast natural resources and a large land area that could potentially be leveraged for climate adaptation, but it faces significant governance and economic challenges in implementing effective climate policies. Additionally, its reliance on fossil fuels for economic stability complicates efforts to transition to a more sustainable energy system.
                        </p>
                        <img src="/flag/f2.png" alt="" />
                        </div>
                    </div>
                    <div className="state-item w-80">
                        <div className="sti flex items-center justify-between w-ful">
                            <h5> 3 </h5>
                            <h3 className='text-2xl flex items-center justify-center'> China </h3>
                        </div>
                        <hr />
                        <div>
                            <p> 
                                China has made substantial investments in renewable energy and has set ambitious climate targets, positioning itself as a global leader in green technology. However, its heavy reliance on coal and rapid industrialization present significant challenges to achieving these goals and mitigating climate change impacts
                            </p>
                            <img src="/flag/f3.png" alt="" />
                        </div>
                    </div>
                    <div className="state-item w-80">
                        <div className="sti flex items-center justify-between w-ful">
                            <h5> 4 </h5>
                            <h3 className='text-2xl flex items-center justify-center'> Philippines </h3>
                        </div>
                        <hr />
                        <div>
                            <p> 
                                The Philippines is highly vulnerable to climate change due to its geographical location, experiencing frequent typhoons and rising sea levels. While the government has initiated various adaptation and mitigation strategies, limited resources and infrastructure challenges hinder its overall capacity to effectively address climate impacts. 
                            </p>
                            <img src="/flag/f4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats h-auto w-full">
                <div className="line h-0.5 bg-black w-full"></div>
            </div>
            <div className="img-tx design2 h-auto w-full py-10">
                <div className="img-tx-item flex justify-center items-center h-auto w-full">
                    <div className="img-item justify-self-auto place-items-center">
                        <video src="/vid2.mp4" controls></video>
                        <img src="/img/sample4.jpg" alt="" />
                        <h4 className=' -rotate-45 absolute'> 
                            NANOTECHNOLOGY
                        </h4>
                    </div>
                </div>
                <div className="list-articles grid lg:flex grid-cols-2 lg:grid-cols-none justify-center items-baseline gap-5 py-4">
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6 className='flex items-center-justify-evenly w-full'>
                                <p>
                                    TYRE
                                </p> 
                                <p>
                                    Known By TyreMarket.com
                                </p>
                            </h6>
                            <img src="/img/n1.png" alt="" />
                        </div>
                        <h4> 
                            It was pneumatic or air filled tyres were invented and patented by Robert William Thompson the design of it had multiple thin tubes inside a leather cover , so that the tyre could absorb shocks. But, it never really went into production due to its severe limitations. However, in 1888, John Boyd Dunlop from Ireland, came up with the first practical pneumatic tyre which later became Dunlop tyres. He also tested the first pneumatic or air-filled tyres on a tricycle and took it for a spin. Pneumatic tyres gained their popularity due to the growing use of bicycles in the late 18th century.
                        </h4>
                        <div className="sm-txt flex items-center justify-between">
                            <p> 2013-2014 </p>
                        </div>
                    </div>
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6 className='flex items-center-justify-evenly w-full'>
                                <p>
                                    COSMETICS  
                                </p> 
                                <p>
                                    Known By Shariff Ahmad 
                                </p>
                            </h6>
                            <img src="/img/n2.jpg" alt="" />
                        </div>
                        <h4> 
                            Cosmetics are preparations that have been used by humans for a long time, primarily for regenerative purposes, and are appreciated by both genders. They can be defined as preparations that are typically used externally and can be formulated from a single or combination of substances obtained from either natural or artificial sources.Nanotechnology, being recognized as one of the revolutionizing technologies, is extensively studied in the area of cosmetics and cosmeceuticals . The incorporation of nanotechnology has led to advancements in cosmetic science, resulting in increased consumer demand throughout the world. Presently, nanomaterials are attracting attention in this area, as they offer greater advantages over traditionally used cosmetic products. 
                        </h4>
                        <div className="sm-txt flex items-center justify-between">
                            <p> March 8 2022 </p>
                        </div>
                    </div>
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6 className='flex items-center-justify-evenly w-full'>
                                <p>
                                    SPORTS 
                                </p> 
                                <p>
                                    Known By  Lynsey Hart 
                                </p>
                            </h6>
                            <img src="/img/n3.png" alt="" />
                        </div>
                        <h4> 
                            The realm of sports equipment has undergone a significant transformation with the advent of nanotechnology. The incorporation of nanomaterials in sports gear has opened new avenues for enhanced performance, durability, and lightweight design.Nanomaterials have transformed the sports equipment industry by providing equipment with exceptional strength, durability, reduced weight, enhanced performance, vibration damping, and customization options.Athletes can now enjoy gear that not only helps them perform better but also offers superior comfort and safety, contributing to a more enjoyable and successful sports experience. 
                        </h4>
                        <div className="sm-txt flex items-center justify-between">
                            <p> Nov 18 , 2023 </p>
                        </div>
                    </div>
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6 className='flex items-center-justify-evenly w-full'>
                                <p>
                                    CLOTHING  
                                </p> 
                                <p>
                                    Known By Nanomaterials (BASEL).
                                </p>
                            </h6>
                            <img src="/img/n4.jpeg" alt="" />
                        </div>
                        <h4> 
                            Making clothing and fabric with nanoparticles or nanofibers allows the improvement of fabric properties without a significant increase in weight, thickness, or stiffness.In work by Zhang et al. , the enhanced photocatalytic activity of a composite photocatalyst composed of polyethylene terephthalate (PET) filaments loaded with Ag-N co-doped TiO2 nanoparticles sensitized with water-insoluble disperse blue 183 dye (which was formed in a facile one-step hydrothermal process under visible light irradiation) was achieved.The proposed photocatalytic composite structure can be taken as a novel approach to design textile materials based composite photocatalysts for the photo-degradation of organic pollutants.
                        </h4>
                        <div className="sm-txt flex items-center justify-between">
                            <p> Jan 12 2022 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats h-auto w-full">
                <div className="line h-0.5 bg-black w-full"></div>
            </div>
            <div className="img-tx design3 h-auto w-full py-10">
                <div className="imgs-layer_comp w-full h-full flex items-center justify-center">
                    <div className="imgs-layer relative flex items-center justify-center">
                        <h1 className='flex items-center justify-center h-48 w-48 rotate-45 text-4xl bg-orange-200 shadow-2xl'> 
                            <span className='-rotate-90 flex items-center justify-center'>
                            BIODI
                            <br />
                            VER
                            <br />
                            SITY 
                            </span>
                        </h1>
                        <div className="img-spx relative h-full w-full">
                            <img className='bio-img' src="/img3/bio1.jpg" alt="" />
                        </div>
                        <div className="img-spx-2 relative h-full w-full">
                            <img className='bio-img' src="/img3/bio2.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="title-3">
                    <h1 className='text-5xl lg:text-8xl'> 
                        <span className="italic"> Life </span>of Ecosystem, 
                        <span className='italic'> and Health </span> 
                        in
                        <span className='italic'> Philippines </span>  
                    </h1>
                </div>
                <div className="des3 w-full h-full p-5  block lg:flex items-start justify-evenly gap-4">
                    <div className="des3-lay1 my-2 lg:my-0">
                        <div className="des3-subtitle">
                            <h2 className='text-4xl'> Ecosystem in Crisis </h2>
                            <h4 className='text-2xl'>The Challenges to Biodiversity in the Philippines</h4>
                        </div>
                        <div className="des3-sm-txt">
                            <h6 className='text-xl'>
                                The Philippines, known for its rich biodiversity, faces several critical threats that jeopardize its unique ecosystems. 
                                One of the primary challenges is <span className="text-red-900 italic"> deforestation </span>. 
                                <span className="text-red-950 italic">Deforestation</span>  happens by illegal logging and land conversion for agriculture and urban development, not only it destroys lands it also affects species and become extinct. 
                                Next is <span className="text-red-950 italic"> Mining activities </span>, The main effects of mining are <span className="text-red-900 italic"> deforestation </span> leading to the loss of plants and animals. 
                                It directly affects the ecosystem and its stability as many species are killed due to water and soil toxicity and habitat loss. 
                                In conjunction with <span className="text-red-900 italic"> deforestation </span> and Mining, <span className="text-italic-950 italic"> Urbanization </span> has accelerated dramatically. 
                                As cities expand to accommodate a growing population, natural habitats are being converted into residential and commercial areas, making it difficult for species to migrate, find food, and reproduce.
                                This approach leads to habitat loss, which isolates wildlife populations and diminishes genetic diversity, making species more vulnerable to extinction. 
                                <span className="text-red-950 italic"> Pollution </span> is another big concern, Air pollution’s impact on biodiversity is multifaceted and complex, because industrial waste, and plastic debris significantly impacts biodiversity. 
                                Water bodies, in particular, suffer from contamination, <span className="text-red-950 italic"> Pollutants </span> can also cause direct harm to organisms, not only it leads to habitat loss, it also alters ecological processes, and even drives climate change.   
                            </h6>
                        </div>
                    </div>
                    <div className="des3-lay1 my-2 lg:my-0">
                        <div className="des3-subtitle">
                            <h2 className="text-4xl">
                                A Nation at Risk
                            </h2>
                            <h4 className='text-2xl'>
                                The Health Challenges Facing the Philippines
                            </h4>
                        </div>
                        <div className="des3-sm-txt">
                            <h6 className='text-xl'>

                                The Philippines, known for its rich culture and resilient people, faces significant challenges that threaten the health and well-being of its society. 
                                Understanding these threats is crucial for developing effective policies and interventions aimed at improving the quality of life for all Filipinos. 
                                One of the most pressing issues in the Philippines is <span className="text-red-950 italic"> Poverty </span>, Millions live a considerable distance from the nearest clinic, lack sufficient health literacy, and cannot afford the cost of healthcare. 
                                This is common in rural areas but also present in urban slums. This economic disparity leads to limited access to healthcare, education, and essential services. 
                                Families often struggle to afford basic needs which includes healthcare. Next is Corruption, corruption of resources and lack of accountability lead to inefficiencies in healthcare delivery and hinder efforts to improve health outcomes, it also undermined immunization of children, increased patient wait times, decreased patient satisfaction, and reduced accessibility of clinics for treatment. 
                                Another is <span className="text-red-950 italic">Food Insecurity</span>, the lack of access to affordable nutritious food is associated with increased risk for multiple chronic health conditions such as diabetes , obesity, heart disease, mental health disorders and other chronic diseases. 
                                Limited access to nutritious food exacerbates health issues and stunts growth and development. Another is <span className="text-red-950"> Environment Issues </span>, example is <span className="text-red-900 italic"> air pollution</span>, Exposure to <span className="text-red-900 italic"> air pollution</span> can affect everyone's health. 
                                This alarming level of pollution primarily stems from burning fossil fuels and vehicular emissions, especially in Metro Manila and other urban centers such as San Fernando, Antipolo, Biñan, Puerto Princesa, and Davao. Air pollution can also cause diseases like stroke, pulmonary disease, lung cancer and many more.    
                            
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats h-auto w-full">
                <div className="line h-0.5 bg-black w-full"></div>
            </div>

            {/*  */}
            <div className="img-tx design4 py-4 h-auto">
                <div className="clip-path-imgs w-full relative flex items-center justify-center">
                    <div className="cl-item relative flex items-center justify-center">
                        <h4 className='absolute z-10'> 
                            Genetically modified organism
                        </h4>
                        <img src="/des4img/sm1.jpg" alt="" />
                    </div>
                    <div className="cl-item absolute flex items-center justify-center">
                        <h4 className='absolute z-10 text-orange-400'> 
                            Genetically modified organism
                        </h4>
                        <img src="/des4img/sm2.jpg" alt="" />
                    </div>
                    <div className="cl-item absolute flex items-center justify-center">
                        <h4 className='absolute z-10'> 
                            Genetically modified organism
                        </h4>
                        <img src="/des4img/sm3.jpg" alt="" />
                    </div>
                    <div className="cl-item absolute flex items-center justify-center">
                        <h4 className='absolute z-10 text-orange-600'> 
                            Genetically modified organism
                        </h4>
                        <img src="/des4img/sm4.jpg" alt="" />
                    </div>
                </div>
                <div className="clip-path-txts w-full h-full my-4">
                    <div className="clip-title w-full h-auto flex items-center justify-start">
                        <h1>  Advantages and Disadvantages of GMO's </h1>
                    </div>
                    <div className="text-main grid">
                        <div className="txt-line">
                            <h1 className="txts text-center flex items-center justify-center h-auto"> 
                                <span className="circ m-2 text-2xl bg-orange-300 flex items-center justify-center">
                                    1
                                </span>
                                <span className='min-txt text-1xl'>
                                <span className='font-extrabold font-italic text-orange-600 opacity-80'> Advantages GMO's - HAVE A LONGER SHELF LIFE.</span>,
                                As the inflation in the Philippines can’t be controlled by our current administration, producing products wherein it does not expire swiftly is a huge help for our ordinary consumers.
                                </span>
                            </h1>
                        </div>
                        <div className="txt-line">
                            <h1 className="txts text-center flex items-center justify-center h-auto"> 
                                <span className="circ m-2 text-2xl bg-orange-300 flex items-center justify-center">
                                    2
                                </span>
                                <span className='min-txt text-1xl'>
                                <span className='font-extrabold font-italic text-red-600 opacity-80'> Disadvantages GMO's - CANCER </span>, 
                                    When it comes to this disease, the Philippines is one of the countries with a large number of cancer patients. As we are aware that cancer can spread and grow quickly but there are some cancers who grow slowly. Moreover, there have been concerns that eating GMO foods can contribute to the development of cancer by raising levels of potentially carcinogenic substances in the body.
                                </span>
                            </h1>
                        </div>
                        <div className="txt-line">
                            <h1 className="txts text-center flex items-center justify-center h-auto"> 
                                <span className="circ m-2 text-2xl bg-orange-300 flex items-center justify-center">
                                    3
                                </span>
                                <span className='min-txt text-1xl'>
                                <span className='font-extrabold font-italic text-orange-600 opacity-80'> Advantages GMO's - CHEAPER PRICES. </span> , 
                                    In this day and age, many local and international businesses in the Philippines creates a strategy to have sales despite having a high rate of inflation every month. As long as consumers are too attracted to promo like Buy 1 Take 1 because it's way cheaper than original price or per piece/per pack. We usually only see a lot of promo packs when there’s an international occasion like Christmas and New Year.
                                </span>
                            </h1>
                        </div>
                        <div className="txt-line">
                            <h1 className="txts text-center flex items-center justify-center h-auto"> 
                                <span className="circ m-2 text-2xl bg-orange-300 flex items-center justify-center">
                                    4
                                </span>
                                <span className='min-txt text-1xl'>
                                <span className='font-extrabold font-italic text-red-600 opacity-80'> Disdvantages GMO's - ALLERGIC REACTIONS </span>, 
                                    Even though there is just a small risk that GMO foods can trigger an allergic reaction, it will just happen if the genetic change triggers the production of allergen inside of human’s body. The WHO or World Health Organization recommends that genetic engineers should not use DNA from allergens unless there are evidence that the proteins that the gene produces do not cause allergies.
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats h-auto w-full">
                <div className="line h-0.5 bg-black w-full"></div>
            </div>
            <div className="img-tx design2 h-auto w-full py-10">
                <div className="img-tx-item flex justify-center items-center h-auto w-full">
                    <div className="img-item justify-self-auto place-items-center">
                        <video src="/vid3.mp4" controls></video>
                        <img src="/des4img/sm2.jpg" alt="" />
                        <h4 className='left-0 rotate-0 absolute'> 
                            Gene Therapy & Stem Cell
                        </h4>
                    </div>
                </div>
                <div className="list-articles grid lg:flex grid-cols-2 lg:grid-cols-none justify-center items-baseline gap-5 py-4">
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6> Section 1 </h6>
                            <img src="/img2/g1.jpg" alt="" />
                        </div>
                        <h2 className='text-2xl text-right'> Cell Therapy </h2>
                        <h4> 
                            We describe ethical challenges regarding human embryonic stem cell (hESC) research, emphasizing that ethical dilemma involving the destruction of a human embryo is a major factor that may have limited the development of hESC-based clinical therapies. With previous derivation of induced pluripotent stem cells (iPSCs) this problem has been overcome, however current perspectives regarding clinical translation of iPSCs still remain. Unlimited differentiation potential of iPSCs which can be used in human reproductive cloning, as a risk for generation of genetically engineered human embryos and human-animal chimeras, is major ethical issue, while undesired differentiation and malignant transformation are major safety issues.
                        </h4>
                        <div className="sm-txt flex items-center justify-between w-full">
                            <p> Jan 1 2018/Online Publish  </p>
                            <p> Study By. Int J Med Sci. </p>
                        </div>
                    </div>
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6> Section 2 </h6>
                            <img src="/img2/g2.jpg" alt="" />
                        </div>
                        <h2 className='text-2xl text-right'> Cell Therapy </h2>
                        <h4> 
                            Our discussion addresses research oversight in the historical context of human embryonic stem cell (hESC) research; clinical translation and uncertainty; the profound tension between the desire for clinical progress and the need for scientific caution; and issues of consent, control, commercialization, and justice arising from stem cell banking, disease modeling, and drug discovery. We seek to make stem cell scientists more aware of the need for clarity of discussion and to improve professional and public understanding of the ethical and policy issues affecting this important but early research. A review this brief is necessarily general; our hope is that researchers can use this discussion as a starting point for more in-depth identification and analysis of issues pertinent to specific translational research projects.
                        </h4>
                        <div className="sm-txt flex items-center justify-between w-full">
                            <p> Published: 07 July 2014 </p>
                            <p> Study By. Nancy MP King & Jacob Perrin </p>
                        </div>
                    </div>
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6> Section 3 </h6>
                            <img src="/img2/g3.jpg" alt="" />
                        </div>
                        <h2 className='text-2xl text-right'> Cell Therapy </h2>
                        <h4> 
                            Adult stem cells occur in many tissues and can differentiate into specialized cells in their tissue of origin and also transdifferentiate into specialized cells characteristic of other tissues. For example, hematopoietic stem cells can differentiate into all three blood cell types as well as into neural stem cells, cardiomyocytes, and liver cells. Adult stem cells can be isolated through plasmapheresis. They are already used to treat hematological malignancies and to modify the side effects of cancer chemotherapy. Furthermore, autologous stem cells are being used in clinical trials in patients who have suffered myocardial infarction. Their use in several other conditions has not been validated or is experimental, despite some claims to the contrary. 
                        </h4>
                        <div className="sm-txt flex items-center justify-between w-full">
                            <p> April 14 2009  </p>
                            <p> Study By. Endocrine Rev.  </p>
                        </div>
                    </div>
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6> Section 4 </h6>
                            <img src="/img2/g4.jpg" alt="" />
                        </div>
                        <h2 className='text-2xl text-right'> Cell Therapy </h2>
                        <h4> 
                        Somatic cell gene therapy was merely an extension of conventional therapies, posing few if any new ethical problems. This view is still generally accepted. Some
                        gene therapies represent novel ways to produce the same medications that are already available at high cost. For example, SCID due to ADA deficiency can be treated by administration of ADA,
                        but the enzyme is very expensive and must be taken frequently. The same enzyme could be produced by the genetic addition of the ADA gene at the cost of a one-time procedure. Other
                        gene therapies have similarities to transplantation. For example, CF may be treated by providing the patient with normally functioning pulmonary cells. Such cells can be introduced in two ways: by doing a lung transplant, or by genetically altering the patient’s own lung cells so they
                        are not subject to damage by CF genes. The former is an expensive halfway technology that requires ongoing immunosuppression to prevent rejection, and constant alertness to infection that
                        may result from immunosuppression.5 Gene therapy, on the other hand, would require one treatment to achieve permanent reversal of the CF pathophysiology, with none of the continuing risks of immunosuppression. In producing normal pulmonary cell function, genetic alteration of the patient’s own lung cells seems far less invasive, and is potentially far less costly, than transplantation.

                        </h4>
                        <div className="sm-txt flex items-center justify-between w-full">
                            <p> October 1998 </p>
                            <p> Study By. George Khushf </p>
                        </div>
                    </div>
                    <div className="art-item">
                        <div className="a-ixs">
                            <h6> Section 5 </h6>
                            <img src="/img/sample1.jpg" alt="" />
                        </div>
                        <h4> 
                            Many people believe that somatic cell gene therapy is a proper therapy because it provides new sights to produce medications with a low cost (19). Safety and efficacy are very important in somatic cell gene technology when it comes to ethical concerns and should be addressed in the production of drugs and devices, the right selection of patients for the clinical trial, treatment security, protection of privacy, and confidentiality of medical information, and the voluntary option of the procedure must be explained to patients.
                        </h4>
                        <div className="sm-txt flex items-center justify-between w-full">
                            <p> Nov 2022 </p>
                            <p> Study By. Parham Pooladgar </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats h-auto w-full">
                <div className="line h-0.5 bg-black w-full"></div>
            </div>
            <div className="w-full h-auto">
                <h1 className='text-3xl h-auto'> Advertisement </h1>
            </div>
            <div className="adv-x h-auto w-full flex flex-wrap items-center justify-evenly gap-2 py-4">
                <div className="adv-comp-item flex flex-wrap items-center justify-evenly gap-2">
                    <div className="s1-adv grid gap-3">
                        <img className='' src="/advimg/adv5_1.png" alt="" />
                        <button className='buy-adv-btn w-full px-3 py-5'> Buy </button>
                    </div>
                    <div className="s1-adv grid gap-3">
                        <div className="txt-advertise">
                            <h4 className='h-auto w-auto'>
                                Smart AI Glasses
                                <svg width="41" height="17" viewBox="0 0 41 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8736 16.1531C15.1721 16.1531 18.6393 12.6573 18.71 8.44306C19.2843 8.2372 19.8899 8.13232 20.5 8.13306C21.0357 8.13306 21.6843 8.21735 22.29 8.44306C22.3607 12.7002 25.8279 16.1531 30.1264 16.1531C34.2 16.1531 37.5264 13.0659 37.935 9.13378H39.6121C40.2464 9.13378 40.5 8.75306 40.5 8.23164V7.69592C40.5 7.16021 40.2464 6.79378 39.6121 6.79378H37.8357C37.1171 3.21378 33.9457 0.479492 30.1257 0.479492C26.4614 0.479492 23.3886 3.00235 22.5293 6.39949C21.8807 6.14592 21.1193 6.06092 20.4993 6.06092C19.8793 6.06092 19.1179 6.14592 18.47 6.39949C17.5957 3.00235 14.5236 0.479492 10.8729 0.479492C7.05357 0.479492 3.88214 3.21378 3.16286 6.79378H1.38786C0.739286 6.79378 0.5 7.16021 0.5 7.69592V8.23164C0.5 8.75306 0.739286 9.13378 1.38786 9.13378H3.065C3.26907 11.0619 4.17994 12.8461 5.62188 14.1423C7.06382 15.4385 8.93468 16.1548 10.8736 16.1531ZM10.8736 14.0388C10.1219 14.0394 9.37745 13.8919 8.68286 13.6045C7.98827 13.3171 7.35718 12.8956 6.82569 12.364C6.2942 11.8325 5.87275 11.2013 5.58546 10.5067C5.29817 9.81207 5.15068 9.06761 5.15143 8.31592C5.15143 5.15878 7.71572 2.59449 10.8729 2.59449C14.0164 2.59449 16.5957 5.15878 16.5957 8.31592C16.5987 9.06824 16.4528 9.81372 16.1663 10.5094C15.8798 11.205 15.4585 11.8371 14.9265 12.3691C14.3946 12.9011 13.7626 13.3225 13.067 13.6091C12.3714 13.8957 11.6259 14.0417 10.8736 14.0388ZM30.1264 14.0388C29.3741 14.0417 28.6286 13.8957 27.933 13.6091C27.2374 13.3225 26.6054 12.9011 26.0735 12.3691C25.5415 11.8371 25.1202 11.205 24.8337 10.5094C24.5472 9.81372 24.4013 9.06824 24.4043 8.31592C24.4024 7.56398 24.5491 6.81908 24.836 6.12403C25.1229 5.42898 25.5444 4.79747 26.0761 4.2658C26.6078 3.73414 27.2394 3.31278 27.9345 3.02597C28.6296 2.73915 29.3745 2.59251 30.1264 2.59449C33.2836 2.59449 35.8493 5.15878 35.8493 8.31592C35.8499 9.06764 35.7024 9.81211 35.415 10.5067C35.1276 11.2014 34.7061 11.8325 34.1746 12.3641C33.643 12.8956 33.0119 13.3171 32.3172 13.6045C31.6226 13.8919 30.8782 14.0394 30.1264 14.0388Z" fill="black"/>
                                </svg>
                            </h4>
                            <p>
                                See the world in a whole new way with Smart AI Glasses—your personal assistant, navigator, and gateway to augmented reality, all in a sleek, wearable design. The future is at your fingertips, and in your vision.
                            </p>
                        </div>
                        <button className='buy-adv-btn w-full px-3 py-5'>
                            US, NY Florida Flores Street 1876
                        </button>
                    </div>
                    <div className="s1-adv grid gap-3">
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> Chargeable </p>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V3C9.75 3.41421 9.41421 3.75 9 3.75C8.58579 3.75 8.25 3.41421 8.25 3V1C8.25 0.585786 8.58579 0.25 9 0.25ZM14 0.25C14.4142 0.25 14.75 0.585786 14.75 1V3C14.75 3.41421 14.4142 3.75 14 3.75C13.5858 3.75 13.25 3.41421 13.25 3V1C13.25 0.585786 13.5858 0.25 14 0.25ZM12.671 6.92124C12.9907 7.18469 13.0362 7.65737 12.7728 7.97701L11.0011 10.1265L12.7403 10.4712C12.7404 10.4712 12.7401 10.4712 12.7403 10.4712C13.1901 10.5602 13.5448 10.8698 13.6857 11.2805C13.8288 11.6979 13.734 12.1788 13.3835 12.5191C13.3834 12.5191 13.3835 12.519 13.3835 12.5191L10.7895 15.0381C10.4923 15.3266 10.0175 15.3197 9.72895 15.0225C9.44038 14.7253 9.44735 14.2505 9.74451 13.9619L11.9299 11.8398L10.2592 11.5087C9.42735 11.3428 8.88289 10.3388 9.52405 9.56022L11.6152 7.02299C11.8787 6.70335 12.3514 6.6578 12.671 6.92124ZM12.3384 11.443C12.3384 11.4431 12.3384 11.443 12.3384 11.443ZM12.4497 11.9428C12.4499 11.9428 12.4496 11.9428 12.4497 11.9428ZM0.75 8.5C0.75 8.08579 1.08579 7.75 1.5 7.75H3.5C3.91421 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 3.91421 9.25 3.5 9.25H1.5C1.08579 9.25 0.75 8.91421 0.75 8.5ZM18.75 8.5C18.75 8.08579 19.0858 7.75 19.5 7.75H21.5C21.9142 7.75 22.25 8.08579 22.25 8.5C22.25 8.91421 21.9142 9.25 21.5 9.25H19.5C19.0858 9.25 18.75 8.91421 18.75 8.5ZM0.75 13.5C0.75 13.0858 1.08579 12.75 1.5 12.75H3.5C3.91421 12.75 4.25 13.0858 4.25 13.5C4.25 13.9142 3.91421 14.25 3.5 14.25H1.5C1.08579 14.25 0.75 13.9142 0.75 13.5ZM18.75 13.5C18.75 13.0858 19.0858 12.75 19.5 12.75H21.5C21.9142 12.75 22.25 13.0858 22.25 13.5C22.25 13.9142 21.9142 14.25 21.5 14.25H19.5C19.0858 14.25 18.75 13.9142 18.75 13.5ZM9 18.25C9.41421 18.25 9.75 18.5858 9.75 19V21C9.75 21.4142 9.41421 21.75 9 21.75C8.58579 21.75 8.25 21.4142 8.25 21V19C8.25 18.5858 8.58579 18.25 9 18.25ZM14 18.25C14.4142 18.25 14.75 18.5858 14.75 19V21C14.75 21.4142 14.4142 21.75 14 21.75C13.5858 21.75 13.25 21.4142 13.25 21V19C13.25 18.5858 13.5858 18.25 14 18.25Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.789 3.88981C14.7614 3.75159 13.4067 3.75 11.5 3.75C9.59341 3.75 8.23893 3.75184 7.21144 3.89017C6.20552 4.02559 5.62567 4.27935 5.2021 4.70256C4.77886 5.12544 4.52512 5.7049 4.38981 6.71097C4.25159 7.73861 4.25 9.09329 4.25 11C4.25 12.9066 4.25184 14.2611 4.39017 15.2886C4.52559 16.2945 4.77935 16.8743 5.20256 17.2979C5.62544 17.7211 6.2049 17.9749 7.21097 18.1102C8.23861 18.2484 9.59329 18.25 11.5 18.25C13.4066 18.25 14.7611 18.2482 15.7886 18.1098C16.7945 17.9744 17.3743 17.7206 17.7979 17.2974C18.2211 16.8746 18.4749 16.2951 18.6102 15.289C18.7484 14.2614 18.75 12.9067 18.75 11C18.75 9.09341 18.7482 7.73893 18.6098 6.71144C18.4744 5.70552 18.2206 5.12567 17.7974 4.7021C17.3746 4.27886 16.7951 4.02512 15.789 3.88981ZM15.989 2.40319C17.1614 2.56088 18.1104 2.89314 18.8586 3.6419C19.6064 4.39033 19.9386 5.33898 20.0964 6.51131C20.25 7.65225 20.25 9.11046 20.25 10.9523V11.0565C20.25 12.8941 20.25 14.3498 20.0968 15.489C19.9391 16.6614 19.6069 17.6104 18.8581 18.3586C18.1097 19.1064 17.161 19.4386 15.9887 19.5964C14.8478 19.75 13.3895 19.75 11.5477 19.75H11.4435C9.60593 19.75 8.15025 19.75 7.01103 19.5968C5.8386 19.4391 4.88957 19.1069 4.14144 18.3581C3.39365 17.6097 3.06141 16.661 2.90358 15.4887C2.74998 14.3477 2.74999 12.8895 2.75 11.0476L2.75 10.9436C2.74998 9.10594 2.74997 7.65025 2.90319 6.51103C3.06088 5.3386 3.39314 4.38957 4.1419 3.64144C4.89033 2.89365 5.83898 2.56141 7.01131 2.40358C8.15225 2.24998 9.61046 2.24999 11.4524 2.25L11.5564 2.25C13.3941 2.24998 14.8497 2.24997 15.989 2.40319Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> High-secure </p>
                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89935 1.29552C9.19272 1.00606 9.58829 0.84375 10.0004 0.84375C10.4127 0.84375 10.8084 1.00616 11.1018 1.2958C12.875 3.04228 15.1864 3.39305 17.2869 3.45775L17.2715 3.95751L17.2845 3.45768C17.7382 3.46949 18.1711 3.65005 18.4986 3.96408C18.8253 4.27729 19.0238 4.7008 19.0555 5.15219C19.2282 7.26078 19.2402 9.37875 19.0927 11.4887C19.0925 11.4913 19.0923 11.4938 19.0921 11.4963C19.0918 11.5003 19.0914 11.5043 19.091 11.5083C18.5405 16.5314 15.0303 20.4515 10.1631 22.1292C10.0575 22.1656 9.94282 22.1656 9.83725 22.1292C4.97001 20.4515 1.46038 16.5314 0.909414 11.5084C0.908697 11.5019 0.90811 11.4953 0.907651 11.4887C0.760072 9.3786 0.772674 7.26031 0.945349 5.15207C0.977095 4.70072 1.17557 4.27726 1.50225 3.96408C1.8295 3.65036 2.26188 3.46984 2.71502 3.45771C4.81481 3.39293 7.12589 3.04197 8.89935 1.29552ZM10.0004 1.84375C9.8511 1.84375 9.70778 1.90259 9.60152 2.00753L9.60101 2.00804C7.54665 4.03109 4.90509 4.39072 2.74475 4.45727L2.74236 4.45735L2.74236 4.45734C2.53758 4.46267 2.34216 4.54418 2.19429 4.68594C2.04642 4.8277 1.95673 5.01952 1.94277 5.22388L1.94231 5.23066L1.94226 5.23065C1.77375 7.28623 1.76113 9.3516 1.90452 11.4091C2.40511 15.937 5.53743 19.5287 10.0002 21.1265C14.463 19.5287 17.5958 15.937 18.0958 11.4091C18.2392 9.35158 18.2271 7.28645 18.0586 5.23064L18.0581 5.22389L18.0581 5.22388C18.0442 5.01952 17.9545 4.8277 17.8066 4.68594C17.6587 4.54418 17.4633 4.46267 17.2585 4.45734L17.2561 4.45727C15.0953 4.39072 12.4537 4.03111 10.3998 2.00799L10.3994 2.00753C10.2931 1.90259 10.1498 1.84375 10.0004 1.84375Z" fill="black"/>
                            </svg>

                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> Smart AI </p>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.20833 11.2394C1.62083 11.2394 1.12674 11.0391 0.726042 10.6384C0.325347 10.2377 0.125 9.74359 0.125 9.15609C0.125 8.56859 0.325347 8.07449 0.726042 7.67379C1.12674 7.2731 1.62083 7.07275 2.20833 7.07275V4.58942C2.20833 4.12623 2.37326 3.73005 2.70312 3.40088C3.03299 3.07171 3.42882 2.90678 3.89062 2.90609H7.41667C7.41667 2.31859 7.61701 1.82449 8.01771 1.4238C8.4184 1.0231 8.9125 0.822754 9.5 0.822754C10.0875 0.822754 10.5816 1.0231 10.9823 1.4238C11.383 1.82449 11.5833 2.31859 11.5833 2.90609H15.1094C15.5719 2.90609 15.9677 3.07102 16.2969 3.40088C16.626 3.73074 16.791 4.12657 16.7917 4.58838V7.07275C17.3792 7.07275 17.8733 7.2731 18.274 7.67379C18.6747 8.07449 18.875 8.56859 18.875 9.15609C18.875 9.74359 18.6747 10.2377 18.274 10.6384C17.8733 11.0391 17.3792 11.2394 16.7917 11.2394V15.8071C16.7917 16.2696 16.6267 16.6655 16.2969 16.9946C15.967 17.3238 15.5712 17.4887 15.1094 17.4894H3.89062C3.42812 17.4894 3.03229 17.3245 2.70312 16.9946C2.37396 16.6648 2.20903 16.2693 2.20833 15.8082V11.2394ZM6.37292 9.67692C6.66181 9.67692 6.90799 9.57588 7.11146 9.37379C7.31493 9.17171 7.41667 8.92623 7.41667 8.63734C7.41667 8.34845 7.31562 8.10227 7.11354 7.8988C6.91146 7.69532 6.66597 7.59359 6.37708 7.59359C6.08819 7.59359 5.84201 7.69463 5.63854 7.89671C5.43507 8.0988 5.33333 8.34428 5.33333 8.63317C5.33333 8.92206 5.43438 9.16824 5.63646 9.37171C5.83854 9.57518 6.08403 9.67692 6.37292 9.67692ZM12.6229 9.67692C12.9118 9.67692 13.158 9.57588 13.3615 9.37379C13.5649 9.17171 13.6667 8.92623 13.6667 8.63734C13.6667 8.34845 13.5656 8.10227 13.3635 7.8988C13.1615 7.69532 12.916 7.59359 12.6271 7.59359C12.3382 7.59359 12.092 7.69463 11.8885 7.89671C11.6851 8.0988 11.5833 8.34428 11.5833 8.63317C11.5833 8.92206 11.6844 9.16824 11.8865 9.37171C12.0885 9.57518 12.334 9.67692 12.6229 9.67692ZM5.85417 13.8436H13.1458V12.8019H5.85417V13.8436ZM3.89167 16.4478H15.1094C15.2962 16.4478 15.4497 16.3877 15.5698 16.2675C15.6899 16.1474 15.75 15.9939 15.75 15.8071V4.58838C15.75 4.40157 15.6899 4.2481 15.5698 4.12796C15.4497 4.00782 15.2962 3.94775 15.1094 3.94775H3.89062C3.70382 3.94775 3.55035 4.00782 3.43021 4.12796C3.31007 4.2481 3.25 4.40192 3.25 4.58942V15.8071C3.25 15.9939 3.31007 16.1474 3.43021 16.2675C3.55035 16.3877 3.70417 16.4478 3.89167 16.4478Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5 dd"> 
                            <p className='text-2xl'> PRICE | $350 </p>
                        </div>
                    </div>
                </div>
                <div className="adv-comp-item flex flex-wrap items-center justify-evenly gap-2">
                    <div className="s1-adv grid gap-3">
                        <img className='' src="/advimg/adv5_2.png" alt="" />
                        <button className='buy-adv-btn w-full px-3 py-5'> Buy </button>
                    </div>
                    <div className="s1-adv grid gap-3">
                        <div className="txt-advertise">
                            <h4 className='h-auto w-auto'>
                                Quantum Computer Based Interface.
                                <svg width="41" height="17" viewBox="0 0 41 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8736 16.1531C15.1721 16.1531 18.6393 12.6573 18.71 8.44306C19.2843 8.2372 19.8899 8.13232 20.5 8.13306C21.0357 8.13306 21.6843 8.21735 22.29 8.44306C22.3607 12.7002 25.8279 16.1531 30.1264 16.1531C34.2 16.1531 37.5264 13.0659 37.935 9.13378H39.6121C40.2464 9.13378 40.5 8.75306 40.5 8.23164V7.69592C40.5 7.16021 40.2464 6.79378 39.6121 6.79378H37.8357C37.1171 3.21378 33.9457 0.479492 30.1257 0.479492C26.4614 0.479492 23.3886 3.00235 22.5293 6.39949C21.8807 6.14592 21.1193 6.06092 20.4993 6.06092C19.8793 6.06092 19.1179 6.14592 18.47 6.39949C17.5957 3.00235 14.5236 0.479492 10.8729 0.479492C7.05357 0.479492 3.88214 3.21378 3.16286 6.79378H1.38786C0.739286 6.79378 0.5 7.16021 0.5 7.69592V8.23164C0.5 8.75306 0.739286 9.13378 1.38786 9.13378H3.065C3.26907 11.0619 4.17994 12.8461 5.62188 14.1423C7.06382 15.4385 8.93468 16.1548 10.8736 16.1531ZM10.8736 14.0388C10.1219 14.0394 9.37745 13.8919 8.68286 13.6045C7.98827 13.3171 7.35718 12.8956 6.82569 12.364C6.2942 11.8325 5.87275 11.2013 5.58546 10.5067C5.29817 9.81207 5.15068 9.06761 5.15143 8.31592C5.15143 5.15878 7.71572 2.59449 10.8729 2.59449C14.0164 2.59449 16.5957 5.15878 16.5957 8.31592C16.5987 9.06824 16.4528 9.81372 16.1663 10.5094C15.8798 11.205 15.4585 11.8371 14.9265 12.3691C14.3946 12.9011 13.7626 13.3225 13.067 13.6091C12.3714 13.8957 11.6259 14.0417 10.8736 14.0388ZM30.1264 14.0388C29.3741 14.0417 28.6286 13.8957 27.933 13.6091C27.2374 13.3225 26.6054 12.9011 26.0735 12.3691C25.5415 11.8371 25.1202 11.205 24.8337 10.5094C24.5472 9.81372 24.4013 9.06824 24.4043 8.31592C24.4024 7.56398 24.5491 6.81908 24.836 6.12403C25.1229 5.42898 25.5444 4.79747 26.0761 4.2658C26.6078 3.73414 27.2394 3.31278 27.9345 3.02597C28.6296 2.73915 29.3745 2.59251 30.1264 2.59449C33.2836 2.59449 35.8493 5.15878 35.8493 8.31592C35.8499 9.06764 35.7024 9.81211 35.415 10.5067C35.1276 11.2014 34.7061 11.8325 34.1746 12.3641C33.643 12.8956 33.0119 13.3171 32.3172 13.6045C31.6226 13.8919 30.8782 14.0394 30.1264 14.0388Z" fill="black"/>
                                </svg>
                            </h4>
                            <p>
                                Step into the future with the Quantum Computer-Based Interface, where speed, precision, and limitless possibilities redefine the way you connect, work, and live. Experience computing beyond imagination.
                            </p>
                        </div>
                        <button className='buy-adv-btn w-full px-3 py-5'>
                            Germany, Berlin Gertesta Pers Street 103
                        </button>
                    </div>
                    <div className="s1-adv grid gap-3">
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> Chargeable </p>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V3C9.75 3.41421 9.41421 3.75 9 3.75C8.58579 3.75 8.25 3.41421 8.25 3V1C8.25 0.585786 8.58579 0.25 9 0.25ZM14 0.25C14.4142 0.25 14.75 0.585786 14.75 1V3C14.75 3.41421 14.4142 3.75 14 3.75C13.5858 3.75 13.25 3.41421 13.25 3V1C13.25 0.585786 13.5858 0.25 14 0.25ZM12.671 6.92124C12.9907 7.18469 13.0362 7.65737 12.7728 7.97701L11.0011 10.1265L12.7403 10.4712C12.7404 10.4712 12.7401 10.4712 12.7403 10.4712C13.1901 10.5602 13.5448 10.8698 13.6857 11.2805C13.8288 11.6979 13.734 12.1788 13.3835 12.5191C13.3834 12.5191 13.3835 12.519 13.3835 12.5191L10.7895 15.0381C10.4923 15.3266 10.0175 15.3197 9.72895 15.0225C9.44038 14.7253 9.44735 14.2505 9.74451 13.9619L11.9299 11.8398L10.2592 11.5087C9.42735 11.3428 8.88289 10.3388 9.52405 9.56022L11.6152 7.02299C11.8787 6.70335 12.3514 6.6578 12.671 6.92124ZM12.3384 11.443C12.3384 11.4431 12.3384 11.443 12.3384 11.443ZM12.4497 11.9428C12.4499 11.9428 12.4496 11.9428 12.4497 11.9428ZM0.75 8.5C0.75 8.08579 1.08579 7.75 1.5 7.75H3.5C3.91421 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 3.91421 9.25 3.5 9.25H1.5C1.08579 9.25 0.75 8.91421 0.75 8.5ZM18.75 8.5C18.75 8.08579 19.0858 7.75 19.5 7.75H21.5C21.9142 7.75 22.25 8.08579 22.25 8.5C22.25 8.91421 21.9142 9.25 21.5 9.25H19.5C19.0858 9.25 18.75 8.91421 18.75 8.5ZM0.75 13.5C0.75 13.0858 1.08579 12.75 1.5 12.75H3.5C3.91421 12.75 4.25 13.0858 4.25 13.5C4.25 13.9142 3.91421 14.25 3.5 14.25H1.5C1.08579 14.25 0.75 13.9142 0.75 13.5ZM18.75 13.5C18.75 13.0858 19.0858 12.75 19.5 12.75H21.5C21.9142 12.75 22.25 13.0858 22.25 13.5C22.25 13.9142 21.9142 14.25 21.5 14.25H19.5C19.0858 14.25 18.75 13.9142 18.75 13.5ZM9 18.25C9.41421 18.25 9.75 18.5858 9.75 19V21C9.75 21.4142 9.41421 21.75 9 21.75C8.58579 21.75 8.25 21.4142 8.25 21V19C8.25 18.5858 8.58579 18.25 9 18.25ZM14 18.25C14.4142 18.25 14.75 18.5858 14.75 19V21C14.75 21.4142 14.4142 21.75 14 21.75C13.5858 21.75 13.25 21.4142 13.25 21V19C13.25 18.5858 13.5858 18.25 14 18.25Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.789 3.88981C14.7614 3.75159 13.4067 3.75 11.5 3.75C9.59341 3.75 8.23893 3.75184 7.21144 3.89017C6.20552 4.02559 5.62567 4.27935 5.2021 4.70256C4.77886 5.12544 4.52512 5.7049 4.38981 6.71097C4.25159 7.73861 4.25 9.09329 4.25 11C4.25 12.9066 4.25184 14.2611 4.39017 15.2886C4.52559 16.2945 4.77935 16.8743 5.20256 17.2979C5.62544 17.7211 6.2049 17.9749 7.21097 18.1102C8.23861 18.2484 9.59329 18.25 11.5 18.25C13.4066 18.25 14.7611 18.2482 15.7886 18.1098C16.7945 17.9744 17.3743 17.7206 17.7979 17.2974C18.2211 16.8746 18.4749 16.2951 18.6102 15.289C18.7484 14.2614 18.75 12.9067 18.75 11C18.75 9.09341 18.7482 7.73893 18.6098 6.71144C18.4744 5.70552 18.2206 5.12567 17.7974 4.7021C17.3746 4.27886 16.7951 4.02512 15.789 3.88981ZM15.989 2.40319C17.1614 2.56088 18.1104 2.89314 18.8586 3.6419C19.6064 4.39033 19.9386 5.33898 20.0964 6.51131C20.25 7.65225 20.25 9.11046 20.25 10.9523V11.0565C20.25 12.8941 20.25 14.3498 20.0968 15.489C19.9391 16.6614 19.6069 17.6104 18.8581 18.3586C18.1097 19.1064 17.161 19.4386 15.9887 19.5964C14.8478 19.75 13.3895 19.75 11.5477 19.75H11.4435C9.60593 19.75 8.15025 19.75 7.01103 19.5968C5.8386 19.4391 4.88957 19.1069 4.14144 18.3581C3.39365 17.6097 3.06141 16.661 2.90358 15.4887C2.74998 14.3477 2.74999 12.8895 2.75 11.0476L2.75 10.9436C2.74998 9.10594 2.74997 7.65025 2.90319 6.51103C3.06088 5.3386 3.39314 4.38957 4.1419 3.64144C4.89033 2.89365 5.83898 2.56141 7.01131 2.40358C8.15225 2.24998 9.61046 2.24999 11.4524 2.25L11.5564 2.25C13.3941 2.24998 14.8497 2.24997 15.989 2.40319Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> High-secure </p>
                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89935 1.29552C9.19272 1.00606 9.58829 0.84375 10.0004 0.84375C10.4127 0.84375 10.8084 1.00616 11.1018 1.2958C12.875 3.04228 15.1864 3.39305 17.2869 3.45775L17.2715 3.95751L17.2845 3.45768C17.7382 3.46949 18.1711 3.65005 18.4986 3.96408C18.8253 4.27729 19.0238 4.7008 19.0555 5.15219C19.2282 7.26078 19.2402 9.37875 19.0927 11.4887C19.0925 11.4913 19.0923 11.4938 19.0921 11.4963C19.0918 11.5003 19.0914 11.5043 19.091 11.5083C18.5405 16.5314 15.0303 20.4515 10.1631 22.1292C10.0575 22.1656 9.94282 22.1656 9.83725 22.1292C4.97001 20.4515 1.46038 16.5314 0.909414 11.5084C0.908697 11.5019 0.90811 11.4953 0.907651 11.4887C0.760072 9.3786 0.772674 7.26031 0.945349 5.15207C0.977095 4.70072 1.17557 4.27726 1.50225 3.96408C1.8295 3.65036 2.26188 3.46984 2.71502 3.45771C4.81481 3.39293 7.12589 3.04197 8.89935 1.29552ZM10.0004 1.84375C9.8511 1.84375 9.70778 1.90259 9.60152 2.00753L9.60101 2.00804C7.54665 4.03109 4.90509 4.39072 2.74475 4.45727L2.74236 4.45735L2.74236 4.45734C2.53758 4.46267 2.34216 4.54418 2.19429 4.68594C2.04642 4.8277 1.95673 5.01952 1.94277 5.22388L1.94231 5.23066L1.94226 5.23065C1.77375 7.28623 1.76113 9.3516 1.90452 11.4091C2.40511 15.937 5.53743 19.5287 10.0002 21.1265C14.463 19.5287 17.5958 15.937 18.0958 11.4091C18.2392 9.35158 18.2271 7.28645 18.0586 5.23064L18.0581 5.22389L18.0581 5.22388C18.0442 5.01952 17.9545 4.8277 17.8066 4.68594C17.6587 4.54418 17.4633 4.46267 17.2585 4.45734L17.2561 4.45727C15.0953 4.39072 12.4537 4.03111 10.3998 2.00799L10.3994 2.00753C10.2931 1.90259 10.1498 1.84375 10.0004 1.84375Z" fill="black"/>
                            </svg>

                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> Smart AI </p>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.20833 11.2394C1.62083 11.2394 1.12674 11.0391 0.726042 10.6384C0.325347 10.2377 0.125 9.74359 0.125 9.15609C0.125 8.56859 0.325347 8.07449 0.726042 7.67379C1.12674 7.2731 1.62083 7.07275 2.20833 7.07275V4.58942C2.20833 4.12623 2.37326 3.73005 2.70312 3.40088C3.03299 3.07171 3.42882 2.90678 3.89062 2.90609H7.41667C7.41667 2.31859 7.61701 1.82449 8.01771 1.4238C8.4184 1.0231 8.9125 0.822754 9.5 0.822754C10.0875 0.822754 10.5816 1.0231 10.9823 1.4238C11.383 1.82449 11.5833 2.31859 11.5833 2.90609H15.1094C15.5719 2.90609 15.9677 3.07102 16.2969 3.40088C16.626 3.73074 16.791 4.12657 16.7917 4.58838V7.07275C17.3792 7.07275 17.8733 7.2731 18.274 7.67379C18.6747 8.07449 18.875 8.56859 18.875 9.15609C18.875 9.74359 18.6747 10.2377 18.274 10.6384C17.8733 11.0391 17.3792 11.2394 16.7917 11.2394V15.8071C16.7917 16.2696 16.6267 16.6655 16.2969 16.9946C15.967 17.3238 15.5712 17.4887 15.1094 17.4894H3.89062C3.42812 17.4894 3.03229 17.3245 2.70312 16.9946C2.37396 16.6648 2.20903 16.2693 2.20833 15.8082V11.2394ZM6.37292 9.67692C6.66181 9.67692 6.90799 9.57588 7.11146 9.37379C7.31493 9.17171 7.41667 8.92623 7.41667 8.63734C7.41667 8.34845 7.31562 8.10227 7.11354 7.8988C6.91146 7.69532 6.66597 7.59359 6.37708 7.59359C6.08819 7.59359 5.84201 7.69463 5.63854 7.89671C5.43507 8.0988 5.33333 8.34428 5.33333 8.63317C5.33333 8.92206 5.43438 9.16824 5.63646 9.37171C5.83854 9.57518 6.08403 9.67692 6.37292 9.67692ZM12.6229 9.67692C12.9118 9.67692 13.158 9.57588 13.3615 9.37379C13.5649 9.17171 13.6667 8.92623 13.6667 8.63734C13.6667 8.34845 13.5656 8.10227 13.3635 7.8988C13.1615 7.69532 12.916 7.59359 12.6271 7.59359C12.3382 7.59359 12.092 7.69463 11.8885 7.89671C11.6851 8.0988 11.5833 8.34428 11.5833 8.63317C11.5833 8.92206 11.6844 9.16824 11.8865 9.37171C12.0885 9.57518 12.334 9.67692 12.6229 9.67692ZM5.85417 13.8436H13.1458V12.8019H5.85417V13.8436ZM3.89167 16.4478H15.1094C15.2962 16.4478 15.4497 16.3877 15.5698 16.2675C15.6899 16.1474 15.75 15.9939 15.75 15.8071V4.58838C15.75 4.40157 15.6899 4.2481 15.5698 4.12796C15.4497 4.00782 15.2962 3.94775 15.1094 3.94775H3.89062C3.70382 3.94775 3.55035 4.00782 3.43021 4.12796C3.31007 4.2481 3.25 4.40192 3.25 4.58942V15.8071C3.25 15.9939 3.31007 16.1474 3.43021 16.2675C3.55035 16.3877 3.70417 16.4478 3.89167 16.4478Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5 dd"> 
                            <p className='text-2xl'> PRICE | $555 </p>
                        </div>
                    </div>
                </div>
                <div className="adv-comp-item flex flex-wrap items-center justify-evenly gap-2">
                    <div className="s1-adv grid gap-3">
                        <img className='' src="/advimg/adv5_3.png" alt="" />
                        <button className='buy-adv-btn w-full px-3 py-5'> Buy </button>
                    </div>
                    <div className="s1-adv grid gap-3">
                        <div className="txt-advertise">
                            <h4 className='h-auto w-auto'>
                                Outer-space Laserbeam Advertise.
                                <svg width="41" height="17" viewBox="0 0 41 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8736 16.1531C15.1721 16.1531 18.6393 12.6573 18.71 8.44306C19.2843 8.2372 19.8899 8.13232 20.5 8.13306C21.0357 8.13306 21.6843 8.21735 22.29 8.44306C22.3607 12.7002 25.8279 16.1531 30.1264 16.1531C34.2 16.1531 37.5264 13.0659 37.935 9.13378H39.6121C40.2464 9.13378 40.5 8.75306 40.5 8.23164V7.69592C40.5 7.16021 40.2464 6.79378 39.6121 6.79378H37.8357C37.1171 3.21378 33.9457 0.479492 30.1257 0.479492C26.4614 0.479492 23.3886 3.00235 22.5293 6.39949C21.8807 6.14592 21.1193 6.06092 20.4993 6.06092C19.8793 6.06092 19.1179 6.14592 18.47 6.39949C17.5957 3.00235 14.5236 0.479492 10.8729 0.479492C7.05357 0.479492 3.88214 3.21378 3.16286 6.79378H1.38786C0.739286 6.79378 0.5 7.16021 0.5 7.69592V8.23164C0.5 8.75306 0.739286 9.13378 1.38786 9.13378H3.065C3.26907 11.0619 4.17994 12.8461 5.62188 14.1423C7.06382 15.4385 8.93468 16.1548 10.8736 16.1531ZM10.8736 14.0388C10.1219 14.0394 9.37745 13.8919 8.68286 13.6045C7.98827 13.3171 7.35718 12.8956 6.82569 12.364C6.2942 11.8325 5.87275 11.2013 5.58546 10.5067C5.29817 9.81207 5.15068 9.06761 5.15143 8.31592C5.15143 5.15878 7.71572 2.59449 10.8729 2.59449C14.0164 2.59449 16.5957 5.15878 16.5957 8.31592C16.5987 9.06824 16.4528 9.81372 16.1663 10.5094C15.8798 11.205 15.4585 11.8371 14.9265 12.3691C14.3946 12.9011 13.7626 13.3225 13.067 13.6091C12.3714 13.8957 11.6259 14.0417 10.8736 14.0388ZM30.1264 14.0388C29.3741 14.0417 28.6286 13.8957 27.933 13.6091C27.2374 13.3225 26.6054 12.9011 26.0735 12.3691C25.5415 11.8371 25.1202 11.205 24.8337 10.5094C24.5472 9.81372 24.4013 9.06824 24.4043 8.31592C24.4024 7.56398 24.5491 6.81908 24.836 6.12403C25.1229 5.42898 25.5444 4.79747 26.0761 4.2658C26.6078 3.73414 27.2394 3.31278 27.9345 3.02597C28.6296 2.73915 29.3745 2.59251 30.1264 2.59449C33.2836 2.59449 35.8493 5.15878 35.8493 8.31592C35.8499 9.06764 35.7024 9.81211 35.415 10.5067C35.1276 11.2014 34.7061 11.8325 34.1746 12.3641C33.643 12.8956 33.0119 13.3171 32.3172 13.6045C31.6226 13.8919 30.8782 14.0394 30.1264 14.0388Z" fill="black"/>
                                </svg>
                            </h4>
                            <p> Illuminate the skies with Earth-Laser Beam Advertising—projecting your brand across the horizon in a brilliant display visible from miles away. The future of advertising is beaming down to Earth. </p>
                        </div>
                        <button className='buy-adv-btn w-full px-3 py-5'>
                            Russian, Moscow Restenan Street 186
                        </button>
                    </div>
                    <div className="s1-adv grid gap-3">
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> Chargeable </p>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V3C9.75 3.41421 9.41421 3.75 9 3.75C8.58579 3.75 8.25 3.41421 8.25 3V1C8.25 0.585786 8.58579 0.25 9 0.25ZM14 0.25C14.4142 0.25 14.75 0.585786 14.75 1V3C14.75 3.41421 14.4142 3.75 14 3.75C13.5858 3.75 13.25 3.41421 13.25 3V1C13.25 0.585786 13.5858 0.25 14 0.25ZM12.671 6.92124C12.9907 7.18469 13.0362 7.65737 12.7728 7.97701L11.0011 10.1265L12.7403 10.4712C12.7404 10.4712 12.7401 10.4712 12.7403 10.4712C13.1901 10.5602 13.5448 10.8698 13.6857 11.2805C13.8288 11.6979 13.734 12.1788 13.3835 12.5191C13.3834 12.5191 13.3835 12.519 13.3835 12.5191L10.7895 15.0381C10.4923 15.3266 10.0175 15.3197 9.72895 15.0225C9.44038 14.7253 9.44735 14.2505 9.74451 13.9619L11.9299 11.8398L10.2592 11.5087C9.42735 11.3428 8.88289 10.3388 9.52405 9.56022L11.6152 7.02299C11.8787 6.70335 12.3514 6.6578 12.671 6.92124ZM12.3384 11.443C12.3384 11.4431 12.3384 11.443 12.3384 11.443ZM12.4497 11.9428C12.4499 11.9428 12.4496 11.9428 12.4497 11.9428ZM0.75 8.5C0.75 8.08579 1.08579 7.75 1.5 7.75H3.5C3.91421 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 3.91421 9.25 3.5 9.25H1.5C1.08579 9.25 0.75 8.91421 0.75 8.5ZM18.75 8.5C18.75 8.08579 19.0858 7.75 19.5 7.75H21.5C21.9142 7.75 22.25 8.08579 22.25 8.5C22.25 8.91421 21.9142 9.25 21.5 9.25H19.5C19.0858 9.25 18.75 8.91421 18.75 8.5ZM0.75 13.5C0.75 13.0858 1.08579 12.75 1.5 12.75H3.5C3.91421 12.75 4.25 13.0858 4.25 13.5C4.25 13.9142 3.91421 14.25 3.5 14.25H1.5C1.08579 14.25 0.75 13.9142 0.75 13.5ZM18.75 13.5C18.75 13.0858 19.0858 12.75 19.5 12.75H21.5C21.9142 12.75 22.25 13.0858 22.25 13.5C22.25 13.9142 21.9142 14.25 21.5 14.25H19.5C19.0858 14.25 18.75 13.9142 18.75 13.5ZM9 18.25C9.41421 18.25 9.75 18.5858 9.75 19V21C9.75 21.4142 9.41421 21.75 9 21.75C8.58579 21.75 8.25 21.4142 8.25 21V19C8.25 18.5858 8.58579 18.25 9 18.25ZM14 18.25C14.4142 18.25 14.75 18.5858 14.75 19V21C14.75 21.4142 14.4142 21.75 14 21.75C13.5858 21.75 13.25 21.4142 13.25 21V19C13.25 18.5858 13.5858 18.25 14 18.25Z" fill="black"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.789 3.88981C14.7614 3.75159 13.4067 3.75 11.5 3.75C9.59341 3.75 8.23893 3.75184 7.21144 3.89017C6.20552 4.02559 5.62567 4.27935 5.2021 4.70256C4.77886 5.12544 4.52512 5.7049 4.38981 6.71097C4.25159 7.73861 4.25 9.09329 4.25 11C4.25 12.9066 4.25184 14.2611 4.39017 15.2886C4.52559 16.2945 4.77935 16.8743 5.20256 17.2979C5.62544 17.7211 6.2049 17.9749 7.21097 18.1102C8.23861 18.2484 9.59329 18.25 11.5 18.25C13.4066 18.25 14.7611 18.2482 15.7886 18.1098C16.7945 17.9744 17.3743 17.7206 17.7979 17.2974C18.2211 16.8746 18.4749 16.2951 18.6102 15.289C18.7484 14.2614 18.75 12.9067 18.75 11C18.75 9.09341 18.7482 7.73893 18.6098 6.71144C18.4744 5.70552 18.2206 5.12567 17.7974 4.7021C17.3746 4.27886 16.7951 4.02512 15.789 3.88981ZM15.989 2.40319C17.1614 2.56088 18.1104 2.89314 18.8586 3.6419C19.6064 4.39033 19.9386 5.33898 20.0964 6.51131C20.25 7.65225 20.25 9.11046 20.25 10.9523V11.0565C20.25 12.8941 20.25 14.3498 20.0968 15.489C19.9391 16.6614 19.6069 17.6104 18.8581 18.3586C18.1097 19.1064 17.161 19.4386 15.9887 19.5964C14.8478 19.75 13.3895 19.75 11.5477 19.75H11.4435C9.60593 19.75 8.15025 19.75 7.01103 19.5968C5.8386 19.4391 4.88957 19.1069 4.14144 18.3581C3.39365 17.6097 3.06141 16.661 2.90358 15.4887C2.74998 14.3477 2.74999 12.8895 2.75 11.0476L2.75 10.9436C2.74998 9.10594 2.74997 7.65025 2.90319 6.51103C3.06088 5.3386 3.39314 4.38957 4.1419 3.64144C4.89033 2.89365 5.83898 2.56141 7.01131 2.40358C8.15225 2.24998 9.61046 2.24999 11.4524 2.25L11.5564 2.25C13.3941 2.24998 14.8497 2.24997 15.989 2.40319Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> High-secure </p>
                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89935 1.29552C9.19272 1.00606 9.58829 0.84375 10.0004 0.84375C10.4127 0.84375 10.8084 1.00616 11.1018 1.2958C12.875 3.04228 15.1864 3.39305 17.2869 3.45775L17.2715 3.95751L17.2845 3.45768C17.7382 3.46949 18.1711 3.65005 18.4986 3.96408C18.8253 4.27729 19.0238 4.7008 19.0555 5.15219C19.2282 7.26078 19.2402 9.37875 19.0927 11.4887C19.0925 11.4913 19.0923 11.4938 19.0921 11.4963C19.0918 11.5003 19.0914 11.5043 19.091 11.5083C18.5405 16.5314 15.0303 20.4515 10.1631 22.1292C10.0575 22.1656 9.94282 22.1656 9.83725 22.1292C4.97001 20.4515 1.46038 16.5314 0.909414 11.5084C0.908697 11.5019 0.90811 11.4953 0.907651 11.4887C0.760072 9.3786 0.772674 7.26031 0.945349 5.15207C0.977095 4.70072 1.17557 4.27726 1.50225 3.96408C1.8295 3.65036 2.26188 3.46984 2.71502 3.45771C4.81481 3.39293 7.12589 3.04197 8.89935 1.29552ZM10.0004 1.84375C9.8511 1.84375 9.70778 1.90259 9.60152 2.00753L9.60101 2.00804C7.54665 4.03109 4.90509 4.39072 2.74475 4.45727L2.74236 4.45735L2.74236 4.45734C2.53758 4.46267 2.34216 4.54418 2.19429 4.68594C2.04642 4.8277 1.95673 5.01952 1.94277 5.22388L1.94231 5.23066L1.94226 5.23065C1.77375 7.28623 1.76113 9.3516 1.90452 11.4091C2.40511 15.937 5.53743 19.5287 10.0002 21.1265C14.463 19.5287 17.5958 15.937 18.0958 11.4091C18.2392 9.35158 18.2271 7.28645 18.0586 5.23064L18.0581 5.22389L18.0581 5.22388C18.0442 5.01952 17.9545 4.8277 17.8066 4.68594C17.6587 4.54418 17.4633 4.46267 17.2585 4.45734L17.2561 4.45727C15.0953 4.39072 12.4537 4.03111 10.3998 2.00799L10.3994 2.00753C10.2931 1.90259 10.1498 1.84375 10.0004 1.84375Z" fill="black"/>
                            </svg>

                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5"> 
                            <p> Energy </p>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.20833 11.2394C1.62083 11.2394 1.12674 11.0391 0.726042 10.6384C0.325347 10.2377 0.125 9.74359 0.125 9.15609C0.125 8.56859 0.325347 8.07449 0.726042 7.67379C1.12674 7.2731 1.62083 7.07275 2.20833 7.07275V4.58942C2.20833 4.12623 2.37326 3.73005 2.70312 3.40088C3.03299 3.07171 3.42882 2.90678 3.89062 2.90609H7.41667C7.41667 2.31859 7.61701 1.82449 8.01771 1.4238C8.4184 1.0231 8.9125 0.822754 9.5 0.822754C10.0875 0.822754 10.5816 1.0231 10.9823 1.4238C11.383 1.82449 11.5833 2.31859 11.5833 2.90609H15.1094C15.5719 2.90609 15.9677 3.07102 16.2969 3.40088C16.626 3.73074 16.791 4.12657 16.7917 4.58838V7.07275C17.3792 7.07275 17.8733 7.2731 18.274 7.67379C18.6747 8.07449 18.875 8.56859 18.875 9.15609C18.875 9.74359 18.6747 10.2377 18.274 10.6384C17.8733 11.0391 17.3792 11.2394 16.7917 11.2394V15.8071C16.7917 16.2696 16.6267 16.6655 16.2969 16.9946C15.967 17.3238 15.5712 17.4887 15.1094 17.4894H3.89062C3.42812 17.4894 3.03229 17.3245 2.70312 16.9946C2.37396 16.6648 2.20903 16.2693 2.20833 15.8082V11.2394ZM6.37292 9.67692C6.66181 9.67692 6.90799 9.57588 7.11146 9.37379C7.31493 9.17171 7.41667 8.92623 7.41667 8.63734C7.41667 8.34845 7.31562 8.10227 7.11354 7.8988C6.91146 7.69532 6.66597 7.59359 6.37708 7.59359C6.08819 7.59359 5.84201 7.69463 5.63854 7.89671C5.43507 8.0988 5.33333 8.34428 5.33333 8.63317C5.33333 8.92206 5.43438 9.16824 5.63646 9.37171C5.83854 9.57518 6.08403 9.67692 6.37292 9.67692ZM12.6229 9.67692C12.9118 9.67692 13.158 9.57588 13.3615 9.37379C13.5649 9.17171 13.6667 8.92623 13.6667 8.63734C13.6667 8.34845 13.5656 8.10227 13.3635 7.8988C13.1615 7.69532 12.916 7.59359 12.6271 7.59359C12.3382 7.59359 12.092 7.69463 11.8885 7.89671C11.6851 8.0988 11.5833 8.34428 11.5833 8.63317C11.5833 8.92206 11.6844 9.16824 11.8865 9.37171C12.0885 9.57518 12.334 9.67692 12.6229 9.67692ZM5.85417 13.8436H13.1458V12.8019H5.85417V13.8436ZM3.89167 16.4478H15.1094C15.2962 16.4478 15.4497 16.3877 15.5698 16.2675C15.6899 16.1474 15.75 15.9939 15.75 15.8071V4.58838C15.75 4.40157 15.6899 4.2481 15.5698 4.12796C15.4497 4.00782 15.2962 3.94775 15.1094 3.94775H3.89062C3.70382 3.94775 3.55035 4.00782 3.43021 4.12796C3.31007 4.2481 3.25 4.40192 3.25 4.58942V15.8071C3.25 15.9939 3.31007 16.1474 3.43021 16.2675C3.55035 16.3877 3.70417 16.4478 3.89167 16.4478Z" fill="black"/>
                            </svg>
                        </div>
                        <div className="sbt-1 flex items-center justify-center gap-5 dd"> 
                            <p className='text-2xl'> PRICE | $1777 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles