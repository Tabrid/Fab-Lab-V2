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
    <div className='flex flex-col mx-4 lg:mx-36'>
      <Location {...Data} />
      <div className='font-bold text-start'>
        Are you searching for a place to start up with your dream project? Are
        you searching for a place for full technical support? Do you want to
        enhance your skills? Good News for everyone!
      </div>
      <div className='lg:mt-8'>FabLab Daffodil International University (DIU) is open now for all! You
        have the space to pitch your idea and work on the project with expert
        advice; that too for free! FabLab DIU will provide all kinds of equipment support! Students
        from any institution are welcome to join our FabLab DIU community. Please
        help us grow by signing up!
      </div>
      <div className="text-start font-bold lg:mt-8  text-[#333333]">
        It’s open for all, and no membership fee is needed.
      </div>
      <div className="lg:mt-8 text-[#333333]">
        FabLab DIU is recognized to be one of the global matrixes for advanced
        digital fabrication laboratories, which stands with a goal for invention
        by providing access to equipment and operational, educational, technical, financial, and
        logistical assistance to aid in the creative process. From being a
        distributed research laboratory for digitizing fabrication to inventing the next generation
        of manufacturing and personal fabrication, FabLab DIU avails all the
        events needed to accomplish the goal. FabLab DIU is a small-scale work studio, open for
        all. It is an opportunity for students to join as a community to get
        encouraged to share their ideas, design, creativity and execute almost any experiment with required
        technical support.
      </div>
      <div className="text-start font-bold lg:mt-8 text-[#333333]">
        If you are a maker, hobbyist, student, or company, join us.
      </div>
      <div className="lg:mt-8  text-[#333333]">
        We have an open floor for universities and schools. Our expert trainer’s
        training programs and workshops will be an advanced step for students,
        teachers, and researchers to add value for more institutional development.
      </div>
      <br />
      <div className="lg:mt-3 text-[#333333]">
        Joint ventures of educational institutes and industries or entrepreneurs
        can do many things to be an enhanced step for socio-economic
        developments. We, the Fab Lab DIU, provide this opportunity for both entities to collaborate.
        This partnership will consist of prototyping facilities, training, and
        workshops for both students and employees, industrial visits, developing products, troubleshooting,
        fabricating, etc. Consultancy with proper guidelines by our expert
        committees to develop products is the advantage of working together in this Lab.
      </div>
      <div className="text-[#333333]">
        FabLab DIU is open access to our highly configured machines along with all
        tools and electronics equipment is the fastest possible way for makers or
        researchers to get their expected outputs. Our digital fabrication machine will
        facilitate you with simple cutting or polishing tools. This is the most
        promising Lab for design, development, test and implements your ideas, and bringing out national and
        international publications on your findings.
      </div>
      <div className="text-[#333333]">
        This Lab will be a university-wide facility to provide fabrication
        facilities required to manufacture and deploy potential devices/products
        that directly impact local infrastructure. The Lab aims to promote local innovations and provide
        proper fabrication facilities to meet industry standards. The Lab
        provides a proper multidisciplinary work environment where engineers and makers can
        collaborate with students and makers to make working products that local
        businesses can market. The Lab will provide necessary training to increase maker literacy
        among Lab users and outreach programs to inspire school/college students.
        Very soon this Lab will share their ideas and collaborate with approximately 1000
        Fab labs located in more than 78 countries via <a href="https://www.fablabs.io/">https://www.fablabs.io/</a>.
      </div>
    </div>
  );
};

export default MembershipFacilities;
