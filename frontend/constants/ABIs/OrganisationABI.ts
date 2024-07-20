export const OrganisationABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_organization",
        type: "string",
      },
      {
        internalType: "string",
        name: "_cohort",
        type: "string",
      },
      {
        internalType: "address",
        name: "_moderator",
        type: "address",
      },
      {
        internalType: "string",
        name: "_adminName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Already_Signed_Attendance_For_Id",
    type: "error",
  },
  {
    inputs: [],
    name: "Attendance_compilation_started",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid_Lecture_Id",
    type: "error",
  },
  {
    inputs: [],
    name: "Lecture_id_closed",
    type: "error",
  },
  {
    inputs: [],
    name: "already_requested",
    type: "error",
  },
  {
    inputs: [],
    name: "lecture_id_already_used",
    type: "error",
  },
  {
    inputs: [],
    name: "not_Autorized_Caller",
    type: "error",
  },
  {
    inputs: [],
    name: "not_valid_Moderator",
    type: "error",
  },
  {
    inputs: [],
    name: "not_valid_lecture_id",
    type: "error",
  },
  {
    inputs: [],
    name: "not_valid_student",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "Id",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "AttendanceSigned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldMentor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newMentor",
        type: "address",
      },
    ],
    name: "Handover",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "noOfStaffs",
        type: "uint256",
      },
    ],
    name: "StaffNamesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "Id",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mentor",
        type: "address",
      },
    ],
    name: "attendanceClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes",
        name: "lectureId",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "topic",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "staff",
        type: "address",
      },
    ],
    name: "attendanceCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "Id",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mentor",
        type: "address",
      },
    ],
    name: "attendanceOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "changer",
        type: "address",
      },
    ],
    name: "nameChangeRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "testId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mentor",
        type: "address",
      },
    ],
    name: "newResultUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "noOfStaffs",
        type: "uint256",
      },
    ],
    name: "staffsRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "noOfStudents",
        type: "uint256",
      },
    ],
    name: "studentNamesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "noOfStudents",
        type: "uint256",
      },
    ],
    name: "studentsEvicted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "noOfStudents",
        type: "uint256",
      },
    ],
    name: "studentsRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "Id",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "oldTopic",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newTopic",
        type: "string",
      },
    ],
    name: "topicEditted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "studentsToRevoke",
        type: "address[]",
      },
    ],
    name: "EvictStudents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "Uri",
        type: "string",
      },
    ],
    name: "MintCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "NftContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "testId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_resultCid",
        type: "string",
      },
    ],
    name: "RecordResults",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "RequestNameCorrection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newModerator",
        type: "address",
      },
    ],
    name: "TransferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mentor",
        type: "address",
      },
    ],
    name: "VerifyMentor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
    ],
    name: "VerifyStudent",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "certificateContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "certificateIssued",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "certiificateURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_lectureId",
        type: "bytes",
      },
    ],
    name: "closeAttendance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_lectureId",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "string",
        name: "_topic",
        type: "string",
      },
    ],
    name: "createAttendance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
        ],
        internalType: "struct individual[]",
        name: "_mentorsList",
        type: "tuple[]",
      },
    ],
    name: "editMentorsName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
        ],
        internalType: "struct individual[]",
        name: "_studentList",
        type: "tuple[]",
      },
    ],
    name: "editStudentName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_lectureId",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "_topic",
        type: "string",
      },
    ],
    name: "editTopic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_Mentor",
        type: "address",
      },
    ],
    name: "getClassesTaugth",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCohortName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_lectureId",
        type: "bytes",
      },
    ],
    name: "getLectureData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "mentorOnDuty",
            type: "address",
          },
          {
            internalType: "string",
            name: "topic",
            type: "string",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "attendanceStartTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "studentsPresent",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "status",
            type: "bool",
          },
        ],
        internalType: "struct organisation.lectureData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLectureIds",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMentorOnDuty",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_Mentor",
        type: "address",
      },
    ],
    name: "getMentorsName",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getModerator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_students",
        type: "address[]",
      },
    ],
    name: "getNameArray",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrganisationImageUri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrganizationName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getResultCid",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
    ],
    name: "getStudentAttendanceRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "attendace",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "TotalClasses",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
    ],
    name: "getStudentName",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_lectureId",
        type: "bytes",
      },
    ],
    name: "getStudentsPresent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_NftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_certificateContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spokContract",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
    ],
    name: "listClassesAttended",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "listMentors",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liststudents",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newMentor",
        type: "address",
      },
    ],
    name: "mentorHandover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "Uri",
        type: "string",
      },
    ],
    name: "mintMentorsSpok",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_lectureId",
        type: "bytes",
      },
    ],
    name: "openAttendance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "organisationImageUri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
        ],
        internalType: "struct individual[]",
        name: "staffList",
        type: "tuple[]",
      },
    ],
    name: "registerStaffs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_address",
            type: "address",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
        ],
        internalType: "struct individual[]",
        name: "_studentList",
        type: "tuple[]",
      },
    ],
    name: "registerStudents",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_lectureId",
        type: "bytes",
      },
    ],
    name: "signAttendance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spokContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "spokMinted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "spokURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;