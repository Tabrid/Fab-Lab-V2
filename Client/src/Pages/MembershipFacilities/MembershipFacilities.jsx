
import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";

const MembershipFacilities = () => {
  const Data = {
    title: {
      label: 'Membership Facilities',
      subLabel: null,

    },
    links: [
      { label: 'Facilities', icon: RiArrowRightDoubleFill },
      { label: 'Membership Facilities', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  return (
    <div>
      <Location {...Data} />
      <div className='flex justify-center items-center ml-24 mb-10'>
      <div id="RootRoot" className="flex flex-col gap-8 w-full items-start">
        <div className="flex flex-col justify-between w-full items-start">
          <div className="relative flex flex-row w-full items-start">
            <div className="font-['Poppins'] font-bold leading-[28.8px] text-[#333333] absolute top-0 left-0 h-16 w-full">
              Are you searching for a place to start up with your dream project? Are
              you searching for a place for full technical support? Do you want to
              enhance your skills?
            </div>
            <div className="font-['Poppins'] font-bold leading-[28.8px] text-[#333333] absolute top-8 left-0 h-16 w-1/6">
              Good News for everyone!
            </div>
            <div className="font-['Poppins'] leading-[28.8px] text-[#333333] relative mt-20">
              FabLab Daffodil International University (DIU) is open now for all! You
              have the space to pitch your idea and work on the project with expert
              advice; that too for
            </div>
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            free! FabLab DIU will provide all kinds of equipment support! Students
            from any institution are welcome to join our FabLab DIU community. Please
            help us grow by
          </div>
          <div
            id="SectionSigningUp"
            className="font-['Poppins'] leading-[28.8px] text-[#333333]"
          >
            signing up!
          </div>
        </div>
        <div className="flex flex-col w-full items-start">
          <div className="relative flex flex-row w-full items-start">
            <div className="font-['Poppins'] font-bold leading-[28.8px] text-[#333333] absolute top-0 left-0 h-16 w-1/3">
              It’s open for all, and no membership fee is needed.
            </div>
            <div className="font-['Poppins'] leading-[28.8px] text-[#333333] relative mt-8">
              FabLab DIU is recognized to be one of the global matrixes for advanced
              digital fabrication laboratories, which stands with a goal for invention
              by providing access
            </div>
          </div>
          <div className="relative flex flex-row w-full items-start">
            <div className="font-['Poppins'] leading-[28.8px] text-[#333333] absolute top-0 left-0 h-8 w-[1199px]">
              to equipment and operational, educational, technical, financial, and
              logistical assistance to aid in the creative process. From being a
              distributed research
            </div>
            <div className="font-['Poppins'] leading-[28.8px] text-[#333333] relative mt-8">
              laboratory for digitizing fabrication to inventing the next generation
              of manufacturing and personal fabrication, FabLab DIU avails all the
              events needed to
            </div>
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            accomplish the goal. FabLab DIU is a small-scale work studio, open for
            all. It is an opportunity for students to join as a community to get
            encouraged to share their
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            ideas, design, creativity and execute almost any experiment with required
            technical support.
          </div>
        </div>
        <div className="relative flex flex-row mb-0 w-full items-start">
          <div className="font-['Poppins'] font-bold leading-[28.8px] text-[#333333] absolute top-0 left-0 h-16 w-2/5">
            If you are a maker, hobbyist, student, or company, join us.
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333] absolute top-8 left-0 h-8 w-[1245px]">
            We have an open floor for universities and schools. Our expert trainer’s
            training programs and workshops will be an advanced step for students,
            teachers, and
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333] relative mt-16">
            researchers to add value for more institutional development.
          </div>
        </div>
        <div className="flex flex-col justify-between w-full items-start">
          <div className="relative flex flex-row w-full items-start">
            <div className="font-['Poppins'] leading-[28.8px] text-[#333333] absolute top-0 left-0 h-8 w-[1259px]">
              Joint ventures of educational institutes and industries or entrepreneurs
              can do many things to be an enhanced step for socio-economic
              developments. We, the
            </div>
            <div className="font-['Poppins'] leading-[28.8px] text-[#333333] relative mt-8">
              Fab Lab DIU, provide this opportunity for both entities to collaborate.
              This partnership will consist of prototyping facilities, training, and
              workshops for both students
            </div>
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            and employees, industrial visits, developing products, troubleshooting,
            fabricating, etc. Consultancy with proper guidelines by our expert
            committees to develop
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            products is the advantage of working together in this Lab.
          </div>
        </div>
        <div className="flex flex-col justify-between w-full items-start">
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            FabLab DIU is open access to our highly configured machines along with all
            tools and electronics equipment is the fastest possible way for makers or
            researchers
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            to get their expected outputs. Our digital fabrication machine will
            facilitate you with simple cutting or polishing tools. This is the most
            promising Lab for design,
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            development, test and implements your ideas, and bringing out national and
            international publications on your findings.
          </div>
        </div>
        <div className="flex flex-col mb-0 w-full items-start">
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            This Lab will be a university-wide facility to provide fabrication
            facilities required to manufacture and deploy potential devices/products
            that directly impact local
          </div>
          <div className="relative flex flex-row w-full items-start">
            <div className="font-['Poppins'] leading-[28.8px] text-[#333333] absolute top-0 left-0 h-8 w-[1203px]">
              infrastructure. The Lab aims to promote local innovations and provide
              proper fabrication facilities to meet industry standards. The Lab
              provides a proper
            </div>
            <div className="font-['Poppins'] leading-[28.8px] text-[#333333] relative mt-8">
              multidisciplinary work environment where engineers and makers can
              collaborate with students and makers to make working products that local
              businesses can
            </div>
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            market. The Lab will provide necessary training to increase maker literacy
            among Lab users and outreach programs to inspire school/college students.
            Very soon
          </div>
          <div className="font-['Poppins'] leading-[28.8px] text-[#333333]">
            this Lab will share their ideas and collaborate with approximately 1000
            Fab labs located in more than 78 countries via https://www.fablabs.io/.
          </div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default MembershipFacilities;