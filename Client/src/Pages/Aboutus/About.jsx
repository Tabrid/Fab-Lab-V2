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