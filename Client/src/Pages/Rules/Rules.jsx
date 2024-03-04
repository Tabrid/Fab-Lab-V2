
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

  const guidelines = [
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
  return (
    <div>
      <Location {...Data} />

      <div>
        <div className='w-full flex justify-center'>
          <div className='w-1/2 '>
          <a onClick={() => scrollToSection('first')} className='text-xl flex items-center gap-4 cursor-pointer'><VscDebugBreakpointLog />Safety Rules for using Lab</a>
            <h1 className='text-xl flex items-center gap-4 mt-4'><VscDebugBreakpointLog />Rules & Regulations for Committee Members</h1>
            <h1 className='text-xl flex items-center gap-4 mt-4'><VscDebugBreakpointLog />Rules & Regulations for General Members</h1>
            <h1 className='text-xl flex items-center gap-4 mt-4'><VscDebugBreakpointLog />Standard Public Hours</h1>
            <h1 className='text-xl flex items-center gap-4 mt-4'><VscDebugBreakpointLog />3D Print Cost Calculation Policy</h1>

          </div>
        </div>
        <div>
          <div className='mx-10 p-5' id='first'>
            <h1 className='text-xl flex items-center gap-4 mt-4'>Safety Rules for using Lab</h1>
            <ul>
              {guidelines.map((guideline, index) => (
                <li className='flex items-center gap-2' key={index}>{index+1}.{guideline}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;