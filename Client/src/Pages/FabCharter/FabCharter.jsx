import { RiArrowRightDoubleFill } from "react-icons/ri";
import Location from "../../Component/Location/Location";

const FabCharter = () => {
  const Data = {
    title: {
      label: 'Fab Charter',
      subLabel: null,

    },
    links: [
      { label: 'About Us', icon: RiArrowRightDoubleFill },
      { label: 'Fab Charter', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };

  const fabCharter = [
    {
      question: 'Who owns FabLab inventions?',
      answer: 'Designs and processes developed in FabLabs can be protected and sold however an inventor chooses, but should remain available for individuals to use and learn from.',
    },
    {
      question: 'How can businesses use FabLab?',
      answer: 'Commercial activities can be prototyped and incubated in a fab lab, but they must not conflict with other uses, they should grow beyond rather than within the lab, and they are expected to benefit the inventors, labs, and networks that contribute to their success.',
    },
    {
      question: 'What’s in a FabLab?',
      answer: 'FabLabs share an evolving inventory of core capabilities to make (almost) anything, allowing people and projects to be shared.',
    },
    {
      question: 'What does the FabLab network provide?',
      answer: 'Operational, educational, technical, financial, and logistical assistance beyond what’s available within one lab.',
    },
    {
      question: 'Who can use a FabLab?',
      answer: 'FabLabs are available as a community resource, offering open access for individuals as well as scheduled access for programs.',
    },
    {
      question: 'What are your responsibilities?',
      answer: 'Safety: Not hurting people or machines Operations: Assisting with cleaning, maintaining, and improving the lab Knowledge: Contributing to documentation and instruction',
    },
  ]




  return (
    <div className="mb-24">
      <Location {...Data} />
      <div className="flex-col-1 justify-center items-center mx-36">
      <div>
        {
          fabCharter.map((item, index) => (
            <div key={index} tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 ">
              <div className="collapse-title text-xl font-medium">
             { item.question}
              </div>
              <div className="collapse-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))
        }
      </div>

      </div>
    </div>
  );
};

export default FabCharter;