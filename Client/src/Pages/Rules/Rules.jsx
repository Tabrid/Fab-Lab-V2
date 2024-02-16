
import Location from '../../Component/Location/Location';
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Rules = () => {
  const Data = {
    title: {
      label: 'Rules',
      subLabel: null,

    },
    links: [
      { label: null, icon: null },
      { label: 'Rules', icon: RiArrowRightDoubleFill, color: 'text-[#2e3094]' },
    ],
  };
  return (
    <div>
      <Location {...Data} />

      <div className="relative w-full h-[4732.66px] text-left text-base text-darkslategray font-poppins mx-28">
        <div className="absolute top-[0px] left-[calc(50%_-_221.31px)] text-[44px] leading-[52.8px] font-semibold text-center flex items-center justify-center w-[442.98px] h-[52.8px]">{`Rules & Regulations`}</div>
        <div className="absolute w-[calc(100%_-_810px)] top-[137.8px] right-[798px] left-[12px] box-border h-[57.8px] border-b-[1px] border-solid border-gainsboro">
          <div className="absolute top-[16px] left-[0px] leading-[28.8px] flex items-center w-[203.45px] h-[23px]">
            Safety Rules for using Lab
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_810px)] top-[195.6px] right-[798px] left-[12px] box-border h-[57.8px] border-b-[1px] border-solid border-gainsboro">
          <div className="absolute top-[16px] left-[0px] leading-[28.8px] flex items-center w-[357.43px] h-[23px]">{`Rules & Regulations for Committee Members`}</div>
        </div>
        <div className="absolute w-[calc(100%_-_810px)] top-[253.39px] right-[798px] left-[12px] box-border h-[57.8px] border-b-[1px] border-solid border-gainsboro">
          <div className="absolute top-[16px] left-[0px] leading-[28.8px] flex items-center w-[329.71px] h-[23px]">{`Rules & Regulations for General Members`}</div>
        </div>
        <div className="absolute w-[calc(100%_-_810px)] top-[311.19px] right-[798px] left-[12px] box-border h-[57.8px] border-b-[1px] border-solid border-gainsboro">
          <div className="absolute top-[16px] left-[0px] leading-[28.8px] flex items-center w-[177.36px] h-[23px]">
            Standard Public Hours
          </div>
        </div>
        <div className="absolute top-[384.99px] left-[12px] leading-[28.8px] flex items-center w-[248.36px] h-[23px]">
          3D Print Cost Calculation Policy
        </div>
        <div className="absolute top-[546.8px] left-[12px] text-3xl leading-[26.4px] font-medium flex items-center w-[283px] h-[31px]">
          Safety Rules for using Lab
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[606.19px] right-[12px] left-[12px] rounded-t-md rounded-b-none bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[12.77px] leading-[28.8px] flex items-center w-[787.87px] h-[23px]">
            There must be at least two people in the laboratory while working on
            live circuits or with chemicals.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[644.99px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[16.84px] leading-[28.8px] flex items-center w-[443.28px] h-[23px]">
            Consider all circuits to be "hot" unless proven otherwise.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[683.79px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[17.08px] leading-[28.8px] flex items-center w-[955.72px] h-[23px]">
            When making measurements, use only one hand at a time. No part of a
            live circuit should be touched by the bare hand.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[722.58px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[17.72px] leading-[28.8px] flex items-center w-[1232.93px] h-[23px]">
            Keep the body, or any part of it, out of the circuit. Where
            interconnecting wires and cables are involved, they should be arranged
            so people will not trip over
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[46.17px] h-[23px]">
            them.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[790.18px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[17.7px] leading-[28.8px] flex items-center w-[1254.43px] h-[23px]">
            Always check to see that the power switch is switched OFF before
            plugging into the outlet. Also, turn the instrument or equipment OFF
            before unplugging from
          </div>
          <div className="absolute top-[35.79px] left-[0px] leading-[28.8px] flex items-center w-[79.93px] h-[23px]">
            the outlet.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[857.77px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[17.81px] leading-[28.8px] flex items-center w-[501.51px] h-[23px]">
            When unplugging a power cord, pull the plug, not on the cable.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[896.57px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[16.39px] leading-[28.8px] flex items-center w-[505.15px] h-[23px]">
            When disassembling a circuit, first remove the source of power.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[935.36px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[17.75px] leading-[28.8px] flex items-center w-[1180.7px] h-[23px]">
            "Cheater" cords and 3-to-2 prong adapters are prohibited unless an
            adequate separate ground lead is provided, the equipment or device is
            double
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[518.18px] h-[23px]">
            insulated, or the laboratory ground return is known to be floating.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1002.96px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[17.73px] leading-[28.8px] flex items-center w-[804.16px] h-[23px]">
            No ungrounded electrical or electronic apparatuses unless it is double
            insulated or battery operated.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1041.75px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[22.81px] leading-[28.8px] flex items-center w-[502.34px] h-[23px]">
            Keep fluids and chemicals away from instruments and circuits.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1080.55px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[17.89px] leading-[28.8px] flex items-center w-[511.06px] h-[23px]">
            Do not attempt to remove foreign objects from the eye or body.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1119.35px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[21.97px] leading-[28.8px] flex items-center w-[1208.54px] h-[23px]">
            Report to the student health service for medical treatment. If
            chemicals get in the eye(s), wash the eye(s) for 15 minutes in an open
            flow of water before
          </div>
          <div className="absolute top-[35.79px] left-[0px] leading-[28.8px] flex items-center w-[467.93px] h-[23px]">
            proceeding for medical treatment. Notify campus security.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1186.94px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[22.19px] leading-[28.8px] flex items-center w-[487.45px] h-[23px]">
            Machines must be shut off when cleaning, repairing, or oiling.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1225.74px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[22.83px] leading-[28.8px] flex items-center w-[446.46px] h-[23px]">
            Check all machines for the correct setup before using it.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1264.54px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[22.81px] leading-[28.8px] flex items-center w-[577.53px] h-[23px]">
            Remove chips and shavings with a brush, hook, or other designated
            tool.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1303.33px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[22.92px] leading-[28.8px] flex items-center w-[804.74px] h-[23px]">
            Eye protection is required when using the laser cutter, drill press,
            grinder, and other mechanical tools.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1342.13px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[21.5px] leading-[28.8px] flex items-center w-[226.22px] h-[23px]">
            Shoes must be always worn.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1380.93px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[22.86px] leading-[28.8px] flex items-center w-[918.86px] h-[23px]">
            Remove all loose conductive jewelry and trinkets, including rings,
            which may come in contact with exposed circuits.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1419.72px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[22.84px] leading-[28.8px] flex items-center w-[1018.45px] h-[23px]">
            Remove or secure anything that might get caught in moving machinery,
            including, rings, necklaces, long hair and loose clothes.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1458.52px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[26.89px] leading-[28.8px] flex items-center w-[1210.45px] h-[23px]">
            Hand protection in the form of suitable gloves should be used for
            handling hot objects, glass or sharp-edged items only when not
            operating machinery.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1497.32px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[21.97px] leading-[28.8px] flex items-center w-[1169.56px] h-[23px]">
            Dust, chemicals and smoke can be dangerous. Work in well-ventilated
            areas, minimize contamination and use appropriate protective
            equipment.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1536.11px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[26.05px] leading-[28.8px] flex items-center w-[806.38px] h-[23px]">
            Follow precautions listed in the SDS when working with solvents,
            paints, adhesives or other chemicals.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1574.91px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[26.27px] leading-[28.8px] flex items-center w-[467.1px] h-[23px]">
            Use the PPE that is required for the chemical you are using.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1613.71px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[26.91px] leading-[28.8px] flex items-center w-[690.88px] h-[23px]">
            Never work when you are impaired (injured, tired, stressed or hurried
            to work carefully).
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1652.5px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[26.89px] leading-[28.8px] flex items-center w-[801.86px] h-[23px]">
            Report any damages to equipment, hazards, and potential hazards to the
            lab managers or monitors
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1691.3px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[27.02px] leading-[28.8px] flex items-center w-[1222.62px] h-[23px]">
            If in doubt about safe operation of a tool, machine, or electrical
            safety, see the laboratory manager or monitor. Regarding specific
            equipment, consult the
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[1194.85px] h-[23px]">
            instruction manual provided by the manufacturer of the equipment.
            Information regarding safe use and possible hazards should be studied
            carefully.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1758.89px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[25.58px] leading-[28.8px] flex items-center w-[803.75px] h-[23px]">
            Be as neat as possible. Keep the work area and workbench clear of
            items not used in the experiment.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[1797.69px] right-[12px] left-[12px] rounded-t-none rounded-b-md bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[26.94px] leading-[28.8px] flex items-center w-[662.85px] h-[23px]">
            All tools must be returned to the toolbox, the machine cleaned, and
            the floor swept.
          </div>
        </div>
        <div className="absolute top-[1945.49px] left-[12px] text-3xl leading-[26.4px] font-medium flex items-center w-[496.89px] h-[31px]">{`Rules & Regulations for Committee Members`}</div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2004.88px] right-[12px] left-[12px] rounded-t-md rounded-b-none bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[12.77px] leading-[28.8px] flex items-center w-[1209.37px] h-[23px]">
            Only persons who are “Authorized” by the department/ Instructor, may
            enter and work in specified areas of the FabLab unescorted and/or use
            specified
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[635.4px] h-[23px]">
            equipment unsupervised. Such authorized people are considered FabLab
            users.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2072.47px] right-[12px] left-[12px] bg-white h-[96.39px] text-gray">
          <div className="absolute top-[7px] left-[16.84px] leading-[28.8px] flex items-center w-[1229.05px] h-[23px]">
            A person becomes “Authorized” with approval from the department/
            Instructor upon agreement to follow safety rules and upon completion
            of the training
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[1262.97px] h-[51.8px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">
                and qualifications for safe work in the shop. Failure to follow
                any or all of these rules may lead to a ban from space, up to and
                including a permanent ban from
              </p>
              <p className="m-0">space.</p>
            </span>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2168.86px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[17.08px] leading-[28.8px] flex items-center w-[1227.1px] h-[23px]">
            Each Instructor understands the appropriate safe-work training needs
            for the space, and assures that all people in the FabLab have received
            the required
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[193.1px] h-[23px]">
            orientation and training.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2236.46px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[17.72px] leading-[28.8px] flex items-center w-[1002.17px] h-[23px]">
            All users must resist pressure to rush and work methodically and
            safely. Take time, and get the help needed to do a job safely.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2275.25px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[17.7px] leading-[28.8px] flex items-center w-[626.9px] h-[23px]">
            All users must properly clean a space for use before commencing with a
            build.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2314.05px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[17.81px] leading-[28.8px] flex items-center w-[733.81px] h-[23px]">
            All users must properly clear their space after use before leaving the
            project within 24 hours.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2352.85px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[16.39px] leading-[28.8px] flex items-center w-[1228.73px] h-[23px]">
            Project-specific and user-specific items that remain in a space after
            24 hours are subject to be destroyed and/or discarded, and the users
            will be banned
          </div>
          <div className="absolute top-[35.79px] left-[0px] leading-[28.8px] flex items-center w-[461.9px] h-[23px]">
            from use of the FabLab for an agreed upon length of time.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2420.44px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[17.75px] leading-[28.8px] flex items-center w-[828.49px] h-[23px]">
            Project lockers may be provided to store project-specific and
            user-specific items, subject to availability.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2459.24px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[17.73px] leading-[28.8px] flex items-center w-[1239.46px] h-[23px]">
            Whenever powered, hot, or electrical equipment or hazardous substances
            are present, appropriate face, body, hand, foot ware, and/or eye
            protection must
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[68.24px] h-[23px]">
            be worn.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2526.83px] right-[12px] left-[12px] bg-white h-[38.8px] text-gray">
          <div className="absolute top-[7px] left-[22.81px] leading-[28.8px] flex items-center w-[1034.43px] h-[23px]">
            Open-toed shoes, flip-flops, shorts, sandals, scarves and
            loose-fitting clothing are NEVER worn in any makerspace restricted
            area.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2565.63px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[17.89px] leading-[28.8px] flex items-center w-[1250.62px] h-[23px]">
            Long and medium length hair must be tied back and put into a bun or
            inserted under a shirt-collar, or put under a hairnet, when working
            near sparks, flames,
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[452.04px] h-[23px]">
            or any rotating powered or other entangling equipment.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2633.22px] right-[12px] left-[12px] bg-white h-[67.59px] text-gray">
          <div className="absolute top-[7px] left-[21.97px] leading-[28.8px] flex items-center w-[1245.55px] h-[23px]">
            Shop access outside of supervised hours may be restricted to specific
            “Authorized Persons” based upon the Manager’s discretion. This access
            is not granted
          </div>
          <div className="absolute top-[35.8px] left-[0px] leading-[28.8px] flex items-center w-[1212.2px] h-[23px]">
            for regular on-going work. Routine working solo outside of ‘supervised
            hours’ is strictly forbidden and will result in an immediate
            revocation of privileges.
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_24px)] top-[2700.82px] right-[12px] left-[12px] rounded-t-none rounded-b-md bg-white h-[96.39px] text-gray">
          <div className="absolute top-[7px] left-[22.19px] leading-[28.8px] flex items-center w-[1207.3px] h-[23px]">
            “Authorized Person(s)” may not work solo in a Makerspace unless a
            specific exception has been made on a case-by-case basis upon
            communications
          </div>
          <div className="absolute top-[35.79px] left-[0px] leading-[28.8px] flex items-center w-[1201.22px] h-[51.8px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">
                means. In the event that an exception has been made, it is the
                responsibility of the authorized person to communicate with the
                manager and outline a
              </p>
              <p className="m-0">
                procedure to assure the person’s continuous safety and ability to
                communicate immediately with emergency responders prior to
                solo-work starting.
              </p>
            </span>
          </div>
        </div>
        <div className="absolute top-[2906.21px] left-[12px] text-3xl leading-[26.4px] font-medium flex items-center w-[458.41px] h-[31px]">{`Rules & Regulations for General Members`}</div>
        <div className="absolute top-[2967.6px] left-[12px] leading-[28.8px] flex items-center w-[1237.88px] h-[23px]">
          Thank you for your interest in becoming a Fab Lab DIU member. Your
          annual membership will give you access to the tools of the lab to
          imagine, design and
        </div>
        <div className="absolute top-[2996.39px] left-[12px] leading-[28.8px] flex items-center w-[1253.15px] h-[23px]">
          create all kinds of things, pretty much limited only by your
          imagination. You’ll be asked to cover the cost of most of the materials
          and sometimes the supplies
        </div>
        <div className="absolute top-[3025.19px] left-[12px] leading-[28.8px] flex items-center w-[205.86px] h-[23px]">
          required for your projects.
        </div>
        <div className="absolute top-[3071.99px] left-[12px] leading-[28.8px] font-semibold flex items-center w-[125.83px] h-[28.8px]">
          The Agreement
        </div>
        <div className="absolute top-[3114.79px] left-[12px] leading-[28.8px] flex items-center w-[1271.55px] h-[23px]">
          Our goal is that the following five document sections constitute the
          agreement between Fab Lab DIU and our members. These are the documents
          to which we’ll
        </div>
        <div className="absolute top-[3143.58px] left-[12px] leading-[28.8px] flex items-center w-[1251.95px] h-[23px]">
          ask for your agreement by your signature. If you’re joining as a family,
          your signature will include your consent for any minor children living
          in your household.
        </div>
        <div className="absolute top-[3172.38px] left-[12px] leading-[28.8px] flex items-center w-[1229.71px] h-[23px]">
          Since this is a new endeavor for us and Fab Labs are a relatively new
          endeavor in the marketplace, there will undoubtedly be changes and
          enhancements
        </div>
        <div className="absolute top-[3201.18px] left-[12px] leading-[28.8px] flex items-center w-[1251.2px] h-[23px]">
          made to the agreement as we move forward. Our goal is to provide safe
          and convenient access to work centers and processes not normally
          available to our
        </div>
        <div className="absolute top-[3229.97px] left-[12px] leading-[28.8px] flex items-center w-[1253.34px] h-[23px]">
          members for use in making “just about anything.” We welcome your input
          concerning how we can improve the membership experience. When you are
          ready
        </div>
        <div className="absolute top-[3258.77px] left-[12px] leading-[28.8px] flex items-center w-[1245.79px] h-[23px]">
          to become a member of Fab Lab DIU, you may print and complete these
          forms and bring them with you or we can provide a set of the documents
          for you to
        </div>
        <div className="absolute top-[3287.57px] left-[12px] leading-[28.8px] flex items-center w-[379.73px] h-[23px]">
          sign when you come to the lab for the first time.
        </div>
        <div className="absolute top-[3336.36px] left-[12px] leading-[28.8px] font-semibold flex items-center w-[46.42px] h-[23px]">{`Note: `}</div>
        <div className="absolute top-[3336.36px] left-[58.08px] leading-[28.8px] flex items-center w-[1134.47px] h-[23px]">
          For everyone’s safety, we need to know the identity of all materials
          being used for projects made in the FabLab. We can’t allow anyone to
          bring
        </div>
        <div className="absolute top-[3365.16px] left-[12px] leading-[28.8px] flex items-center w-[1095.12px] h-[23px]">
          unidentified materials into the lab. If we are unfamiliar with a
          material, we will require a Material Safety Data Sheet (MSDS) to be
          provided.
        </div>
        <div className="absolute top-[3500.96px] left-[12px] text-3xl leading-[26.4px] font-medium flex items-center w-[246.83px] h-[31px]">
          Standard Public Hours
        </div>
        <div className="absolute top-[3562.35px] left-[12px] leading-[28.8px] flex items-center w-[1216.79px] h-[23px]">
          Hours may change without notice or update of this agreement although we
          usually communicate changes in hours through our Facebook page and via
        </div>
        <div className="absolute top-[3591.14px] left-[12px] leading-[28.8px] flex items-center w-[122.7px] h-[23px]">
          member email.
        </div>
        <div className="absolute top-[3637.94px] left-[12px] leading-[28.8px] flex items-center w-[317.32px] h-[28.8px]">
          8:00am – 4:00pm Saturday to Thursday
        </div>
        <div className="absolute top-[3686.74px] left-[12px] leading-[28.8px] flex items-center w-[185.75px] h-[28.8px]">
          Weekly Off Day - Friday
        </div>
        <div className="absolute top-[3737.54px] left-[12px] leading-[28.8px] flex items-center w-[935.02px] h-[23px]">{`The lab is available at other times by appointment, including mornings and over the lunch hour. Just give us a call at `}</div>
        <div className="absolute top-[3737.54px] left-[946.64px] leading-[28.8px] font-medium text-midnightblue flex items-center w-[104.39px] h-[23px]">
          01847334979
        </div>
        <div className="absolute top-[3737.54px] left-[1050.67px] leading-[28.8px] flex items-center w-[114.01px] h-[23px]">
          {" "}
          or email us at
        </div>
        <div className="absolute top-[3766.33px] left-[12px] leading-[28.8px] font-medium text-midnightblue flex items-center w-[161.23px] h-[23px]">
          fablab1@diu.edu.bd
        </div>
        <div className="absolute top-[3766.33px] left-[172.91px] leading-[28.8px] flex items-center w-[1013.21px] h-[23px]">
          {" "}
          and let us know. Please note that our hours may vary around holidays and
          certain academic breaks. Feel free to check with us.
        </div>
        <div className="absolute top-[3815.13px] left-[12px] leading-[28.8px] flex items-center w-[1254.13px] h-[23px]">
          Materials used for your projects can be provided by you or purchased
          from FabLab DIU. There will be designated areas where members may leave
          unwanted
        </div>
        <div className="absolute top-[3843.93px] left-[12px] leading-[28.8px] flex items-center w-[652.91px] h-[23px]">
          leftover materials. These ‘left-overs’ are available to other members at
          no charge.
        </div>
        <div className="absolute top-[3979.72px] left-[12px] text-3xl leading-[26.4px] font-medium flex items-center w-[345.66px] h-[31px]">
          3D Print Cost Calculation Policy
        </div>
        <div className="absolute top-[4041.11px] left-[12px] leading-[28.8px] flex items-center w-[1264.98px] h-[23px]">
          The total cost of a 3D printing job into two parts: material cost,
          corresponding directly to the material that will be used, and labor
          cost, associated with the time
        </div>
        <div className="absolute top-[4069.91px] left-[12px] leading-[28.8px] flex items-center w-[1248.3px] h-[23px]">
          of printing. Additionally, we can add a markup to ensure we're getting
          at least some profit on each item we print.We calculate the material
          cost according to
        </div>
        <div className="absolute top-[4098.71px] left-[12px] leading-[28.8px] flex items-center w-[172.94px] h-[23px]">
          the following formula:
        </div>
        <div className="absolute top-[4145.5px] left-[12px] leading-[28.8px] flex items-center w-[303.96px] h-[28.8px]">
          Material cost = ρ * π * (d/2)² * L * price
        </div>
        <div className="absolute top-[4194.3px] left-[12px] leading-[28.8px] flex items-center w-[55.21px] h-[28.8px]">
          Where,
        </div>
        <div className="absolute top-[4235.1px] left-[35px] leading-[28.8px] flex items-center w-[243.86px] h-[28.8px]">
          ρ is the density of the material,
        </div>
        <div className="absolute top-[4263.89px] left-[35px] leading-[28.8px] flex items-center w-[259.78px] h-[28.8px]">
          d is the diameter of the filament,
        </div>
        <div className="absolute top-[4292.69px] left-[35px] leading-[28.8px] flex items-center w-[368.61px] h-[28.8px]">
          L is the length of the filament used for printing,
        </div>
        <div className="absolute top-[4321.49px] left-[35px] leading-[28.8px] flex items-center w-[463.33px] h-[28.8px]">
          Price is the cost of material per unit weight (per kilogram).
        </div>
        <div className="absolute top-[4380.29px] left-[12px] leading-[28.8px] flex items-center w-[589.73px] h-[28.8px]">
          Once we know the material cost, it's time to find out what is the labor
          cost:
        </div>
        <div className="absolute top-[4429.08px] left-[12px] leading-[28.8px] flex items-center w-[242.58px] h-[28.8px]">
          Labor cost = time * hourly rate
        </div>
        <div className="absolute top-[4477.88px] left-[12px] leading-[28.8px] flex items-center w-[55.21px] h-[28.8px]">
          Where,
        </div>
        <div className="absolute top-[4518.68px] left-[35px] leading-[28.8px] flex items-center w-[318.6px] h-[28.8px]">
          Time is the time needed to finish the job
        </div>
        <div className="absolute top-[4547.47px] left-[35px] leading-[28.8px] flex items-center w-[541.03px] h-[28.8px]">
          Hourly rate is the cost per one hour of 3D printing. (per our 10tk only)
        </div>
        <div className="absolute top-[4606.27px] left-[12px] leading-[28.8px] flex items-center w-[474.32px] h-[28.8px]">
          At the end of calculations, we add the markup for the profit:
        </div>
        <div className="absolute top-[4655.07px] left-[12px] leading-[28.8px] flex items-center w-[472.63px] h-[28.8px]">
          Final price = (material cost + labor cost) * (100% + markup)
        </div>
        <div className="absolute top-[4703.86px] left-[12px] leading-[28.8px] flex items-center w-[265.68px] h-[28.8px]">
          We consider the markup only 10%
        </div>
      </div>
    </div>
  );
};

export default Rules;