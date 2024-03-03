import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";

const About = () => {
    const Data = {
        title: {
          label: 'Fab Charter',
          subLabel: null,
        },
        links: [
          { label: 'About', icon: RiArrowRightDoubleFill },
          { label: 'About Us', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
        ],
      };
    return (
        <div>
            <Location {...Data} />
        
        <div className="mx-28 mb-10">
            <h1 className="font-bold text-lg">What’s FAB LAB</h1> 
            <p className="mt-2 text-sm">The world is going through the process of the 4th Industrial Revolution where innovation and creativity play an important role in the process. A Fabrication lab, FabLab in short, first emerged through the non-profit MIT’s Center for Bits & Atoms FabLab Program, can play role as a key contributor to this revolution. Over the years, different universities and industries have taken many initiatives to jointly work to harness the true potential of FabLab.To ensure learners’ engagement in corporate workflows from concept, design, prototyping, fabrication and marketing, DIU has set up a Multi-Disciplinary Fabrication Laboratory in 2020 to provide a clear idea of product creation through the application of "learning-by-doing" and "hands-on" activities. Moreover, the DIU FabLab aims to develop and implement a set of training programs with some modules, based on the latest modern technologies and tools such as Educational Robotics, Embedded System, Internet of Things (IoT), 3D design & printing and Mobile Technologies using augmented reality (AR) applications.The training programs will be concluded with various competitions so that learners can use their gained knowledge and skills to think and develop models and concepts closely related to the real market. The goal of all the activities organized by the lab is to involve learners at all levels from conception, and design to product materialization. You are most welcome to visit our site, our current activities, and future opportunities of working together. </p>
            <h1 className="font-bold text-lg mt-5">What We Do</h1>
            <h1 className="font-bold text-lg">LEARN</h1>
            <p className="mt-2 text-sm">Learn the tools to operate the machines and to create your own designs. We offer workshops with up-to-date content.</p>
            <h1 className="font-bold text-lg mt-5">FABRICATE</h1>
            <p className="mt-2 text-sm">Materialize your ideas with our machines. From digital fabrication tools to electronics, build (almost) anything.</p>
            <h1 className="font-bold text-lg mt-5">Fab Foundation</h1>
            <p className="mt-2 text-sm">The Fab Foundation is a US non-profit 501(c) 3 organization that emerged from MIT’s center for Bits & Atoms FabLab Program. Formed in 2009 its mission is to support the growth of the international fab lab network, maintaining a coherent standard among every international branch. The foundation aims to provide access to tools, knowledge and financial means to educate, innovate and invent using technology and digital fabrication, allowing anyone to make anything and improve their lives and livelihood in the process.</p>
            </div>
            </div>
    );
};

export default About;