
import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { VscDebugBreakpointLog } from "react-icons/vsc";
const Rules = () => {
  const Data = {
    title: {
      label: 'Rules & Regulations',
      subLabel: null,

    },
    links: [
      { label: null, icon: null },
      { label: 'Rules & Regulations', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const guidelines1 = [
    "There must be at least two people in the laboratory while working on live circuits or with chemicals.",
    "Consider all circuits to be 'hot' unless proven otherwise.",
    "When making measurements, use only one hand at a time. No part of a live circuit should be touched by the bare hand.",
    "Keep the body, or any part of it, out of the circuit. Where interconnecting wires and cables are involved, they should be arranged so people will not trip over them.",
    "Always check to see that the power switch is switched OFF before plugging into the outlet. Also, turn the instrument or equipment OFF before unplugging from the outlet.",
    "When unplugging a power cord, pull the plug, not on the cable.",
    "When disassembling a circuit, first remove the source of power.",
    "'Cheater' cords and 3-to-2 prong adapters are prohibited unless an adequate separate ground lead is provided, the equipment or device is double insulated, or the laboratory ground return is known to be floating.",
    "No ungrounded electrical or electronic apparatuses unless it is double insulated or battery operated.",
    "Keep fluids and chemicals away from instruments and circuits.",
    "Do not attempt to remove foreign objects from the eye or body. Report to the student health service for medical treatment. If chemicals get in the eye(s), wash the eye(s) for 15 minutes in an open flow of water before proceeding for medical treatment. Notify campus security.",
    "Machines must be shut off when cleaning, repairing, or oiling.",
    "Check all machines for the correct setup before using it.",
    "Remove chips and shavings with a brush, hook, or other designated tool.",
    "Eye protection is required when using the laser cutter, drill press, grinder, and other mechanical tools.",
    "Shoes must be always worn.",
    "Remove all loose conductive jewelry and trinkets, including rings, which may come in contact with exposed circuits.",
    "Remove or secure anything that might get caught in moving machinery, including, rings, necklaces, long hair and loose clothes.",
    "Hand protection in the form of suitable gloves should be used for handling hot objects, glass or sharp-edged items only when not operating machinery.",
    "Dust, chemicals and smoke can be dangerous. Work in well-ventilated areas, minimize contamination and use appropriate protective equipment.",
    "Follow precautions listed in the SDS when working with solvents, paints, adhesives or other chemicals.",
    "Use the PPE that is required for the chemical you are using.",
    "Never work when you are impaired (injured, tired, stressed or hurried to work carefully).",
    "Report any damages to equipment, hazards, and potential hazards to the lab managers or monitors.",
    "If in doubt about safe operation of a tool, machine, or electrical safety, see the laboratory manager or monitor. Regarding specific equipment, consult the instruction manual provided by the manufacturer of the equipment. Information regarding safe use and possible hazards should be studied carefully.",
    "Be as neat as possible. Keep the work area and workbench clear of items not used in the experiment.",
    "All tools must be returned to the toolbox, the machine cleaned, and the floor swept."
  ];
  const guidelines2 = [
    "Only persons who are “Authorized” by the department/ Instructor, may enter and work in specified areas of the FabLab unescorted and/or use specified equipment unsupervised. Such authorized people are considered FabLab users.",
    "A person becomes “Authorized” with approval from the department/ Instructor upon agreement to follow safety rules and upon completion of the training and qualifications for safe work in the shop. Failure to follow any or all of these rules may lead to a ban from space, up to and including a permanent ban from space.",
    "Each Instructor understands the appropriate safe-work training needs for the space, and assures that all people in the FabLab have received the required orientation and training.",
    "All users must resist pressure to rush and work methodically and safely. Take time, and get the help needed to do a job safely.",
    "All users must properly clean a space for use before commencing with a build.",
    "All users must properly clear their space after use before leaving the project within 24 hours.",
    "Project-specific and user-specific items that remain in a space after 24 hours are subject to be destroyed and/or discarded, and the users will be banned from use of the FabLab for an agreed upon length of time.",
    "Project lockers may be provided to store project-specific and user-specific items, subject to availability.",
    "Whenever powered, hot, or electrical equipment or hazardous substances are present, appropriate face, body, hand, foot ware, and/or eye protection must be worn.",
    "Open-toed shoes, flip-flops, shorts, sandals, scarves and loose-fitting clothing are NEVER worn in any makerspace restricted area.",
    "Long and medium length hair must be tied back and put into a bun or inserted under a shirt-collar, or put under a hairnet, when working near sparks, flames, or any rotating powered or other entangling equipment.",
    "Shop access outside of supervised hours may be restricted to specific “Authorized Persons” based upon the Manager’s discretion. This access is not granted for regular on-going work. Routine working solo outside of ‘supervised hours’ is strictly forbidden and will result in an immediate revocation of privileges.",
    "“Authorized Person(s)” may not work solo in a Makerspace unless a specific exception has been made on a case-by-case basis upon communications means. In the event that an exception has been made, it is the responsibility of the authorized person to communicate with the manager and outline a procedure to assure the person’s continuous safety and ability to communicate immediately with emergency responders prior to solo-work starting."
];

  return (
    <div>
      <Location {...Data} />

      <div>
        <div className='w-full flex justify-center'>
          <div className='w-1/2 '>
          <a onClick={() => scrollToSection('first')} className='text-xl flex items-center gap-4 underline hover:text-blue-500 cursor-pointer '><VscDebugBreakpointLog />Safety Rules for using Lab</a>
            <a onClick={()=> scrollToSection("second")} className='text-xl flex items-center gap-4  underline hover:text-blue-500 mt-4'><VscDebugBreakpointLog />Rules & Regulations for Committee Members</a>
            <a onClick={()=> scrollToSection("third")} className='text-xl flex items-center gap-4 underline hover:text-blue-500 mt-4'><VscDebugBreakpointLog />Rules & Regulations for General Members</a>
            <a onClick={()=> scrollToSection("fourth")} className='text-xl flex items-center gap-4 underline hover:text-blue-500 mt-4'><VscDebugBreakpointLog />Standard Public Hours</a>
            <a onClick={()=> scrollToSection("five")} className='text-xl flex items-center gap-4 underline hover:text-blue-500 mt-4'><VscDebugBreakpointLog />3D Print Cost Calculation Policy</a>

          </div>
        </div>
        <div>
          <div className='mx-10 p-5' id='first'>
            <h1 className='text-2xl font-semibold  flex items-center gap-4 mt-4'>Safety Rules for using Lab</h1>
            <ul>
              {guidelines1.map((guideline, index) => (
                <li className='flex items-center gap-2' key={index}>{index+1}.{guideline}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className='mx-10 p-5' id='second'>
            <h1 className='text-2xl font-semibold flex items-center gap-4 mt-4'>Rules & Regulations for Committee Members</h1>
            <ul>
              {guidelines2.map((guideline, index) => (
                <li className='flex items-center gap-2' key={index}>{index+1}.{guideline}</li>
              ))}
            </ul>
          </div>
        </div>
        <div  className='mx-10 p-5' id='third'>
          <h1 className='text-2xl font-semibold'>Rules & Regulations for General Members</h1>
          <p>Thank you for your interest in becoming a Fab Lab DIU member. Your annual membership will give you access to the tools of the lab to imagine, design and create all kinds of things, pretty much limited only by your imagination. You’ll be asked to cover the cost of most of the materials and sometimes the supplies required for your projects.</p>
          <h1>The Agreement</h1>
          <p>Our goal is that the following five document sections constitute the agreement between Fab Lab DIU and our members. These are the documents to which we’ll ask for your agreement by your signature. If you’re joining as a family, your signature will include your consent for any minor children living in your household. Since this is a new endeavor for us and Fab Labs are a relatively new endeavor in the marketplace, there will undoubtedly be changes and enhancements made to the agreement as we move forward. Our goal is to provide safe and convenient access to work centers and processes not normally available to our members for use in making “just about anything.” We welcome your input concerning how we can improve the membership experience. When you are ready to become a member of Fab Lab DIU, you may print and complete these forms and bring them with you or we can provide a set of the documents for you to sign when you come to the lab for the first time.

Note: For everyone’s safety, we need to know the identity of all materials being used for projects made in the FabLab. We can’t allow anyone to bring unidentified materials into the lab. If we are unfamiliar with a material, we will require a Material Safety Data Sheet (MSDS) to be provided.</p>
        </div>
        <div className='mx-10 p-5' id='fourth'>
          <h1 className='text-2xl font-semibold'>Standard Public Hours</h1>
          <p>Hours may change without notice or update of this agreement although we usually communicate changes in hours through our Facebook page and via member email.<br/><span className='mt-3'>8:00am – 4:00pm Saturday to Thursday</span><br/>

Weekly Off Day - Friday
<br/>
The lab is available at other times by appointment, including mornings and over the lunch hour. Just give us a call at 01847334979 or email us at fablab1@diu.edu.bd and let us know. Please note that our hours may vary around holidays and certain academic breaks. Feel free to check with us.<br/>

Materials used for your projects can be provided by you or purchased from FabLab DIU. There will be designated areas where members may leave unwanted leftover materials. These ‘left-overs’ are available to other members at no charge.</p>
        </div>
        <div className='mx-10 p-5' id='five'>
          <h1 className='text-2xl font-semibold'>3D Print Cost Calculation Policy</h1>
          <p>The total cost of a 3D printing job into two parts: material cost, corresponding directly to the material that will be used, and labor cost, associated with the time of printing. Additionally, we can add a markup to ensure we're getting at least some profit on each item we print.We calculate the material cost according to the following formula:</p>
          <p>
          Material cost = ρ * π * (d/2)² * L * price
          </p>
          <p>Once we know the material cost, it's time to find out what is the labor cost:</p>
          <p>Labor cost = time * hourly rate</p>
          <p>At the end of calculations, we add the markup for the profit:</p>
          <p>Final price = (material cost + labor cost) * (100% + markup)</p>
          <p>We consider the markup only 10%</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;