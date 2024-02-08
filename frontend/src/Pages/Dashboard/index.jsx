import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { toast } from "react-toastify";
import ChildABI from "../../../utils/childABI.json";
import HeaderSection from "@/src/ui-components/HeaderSection";
import Section from "@/src/ui-components/Section";
import DataCard from "@/src/ui-components/DataCard";
import Card from "@/src/ui-components/Card";
import BarChartExample from "@/src/components/BarCharExample";
import DoughnutChartExample from "@/src/components/DoughnutChartExample";
import Modal from "@/src/ui-components/Modal";
import { JsonRpcProvider, ethers } from "ethers";


export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const [classes, setClasses] = useState();
  const [mentors, setMentors] = useState();
  const [students, setStudents] = useState();
  const [totalAttendance, setTotalAttendance] = useState();
  const [programAddress, setProgramAddress] = useState();

  useContractRead({
    address: programAddress,
    abi: ChildABI,
    functionName: "getLectureIds",
    watch: true,
    args: [],
    onSuccess(data) {
      setClasses(data);
      // console.log(data);
    },
  });
  useContractRead({
    address: programAddress,
    abi: ChildABI,
    functionName: "listMentors",
    watch: true,
    args: [],
    onSuccess(data) {
      setMentors(data);
    },
  });
  useContractRead({
    address: programAddress,
    abi: ChildABI,
    functionName: "liststudents",
    watch: true,
    args: [],
    onSuccess(data) {
      setStudents(data);
    },
  });

  const handleClose = () => {
    //alert('closing');
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const handleSubmit = () => {
    toast.success("Submitted");
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        let res = localStorage.getItem("programAddress");
        setProgramAddress(res);
        // console.log("Program Address...........................");
        let allSigners = await get_allAttendance(classes, res, ChildABI);
        setTotalAttendance(allSigners);
        // console.log("Total Attendance:.......................... ");
      }
    };
  
    fetchData();
  }, [programAddress, classes], [totalAttendance], [classes]);


  return (
    <>
      <HeaderSection
        heading={"Dashboard"}
        subHeading={"Welcome to Classmate+ dashboard"}
      />

      <Section>
        <DataCard
          label={"Total Classes"}
          value={classes ? classes.length : `00`}
          inverse={true}
        />
        <DataCard
          label={"Total Students"}
          value={students ? students.length : `00`}
        />
        <DataCard
          label={"Total Mentors"}
          value={mentors ? mentors.length : `00`}
        />
        <DataCard
          label={"Total Attendance Singned"}
          value={totalAttendance ? totalAttendance : `00`}
        />
      </Section>

      <Section>
        <Card heading="Class Summary Bar Chart" subHeading="Data of students">
          <BarChartExample />
          {/*<BarChart />*/}
        </Card>
        <Card heading="Class Summary Doughnut" subHeading="Data of students">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DoughnutChartExample />
          </div>
        </Card>
      </Section>

      <Modal
        isOpen={modal}
        onClose={handleClose}
        heading={"Classmate+ Dashboard"}
        positiveText={"Save Changes"}
        negativeText={"Cancel"}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      >
        <p>Welcome to Classmate+</p>
      </Modal>
    </>
  );
}

async function get_allAttendance(classes, programAddress, ChildABI) {
  let allAttendance = 0;

  if (classes) {
    for (const element of classes) {
      let data = await readdata(element, programAddress, ChildABI); 
      allAttendance += data;
    }
  }

  return allAttendance;
}


async function readdata(element, programAddress, ChildABI) {
  const rpcUrl = process.env.NEXT_PUBLIC_ALCHEMY_KEY;
  const readProvider = new JsonRpcProvider(rpcUrl);
  
  try {
    const attendanceContract = new ethers.Contract(
      programAddress,
      ChildABI,
      readProvider
    );
    let data = await attendanceContract.getLectureData(element);
    let AttendanceData = parseInt(data.studentsPresent);
    // console.log("AttendanceData:", AttendanceData);
    return AttendanceData;

  } catch (error) {
    console.log(error);
  }
}

