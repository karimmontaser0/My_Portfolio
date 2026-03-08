export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  skills: string[];
  description: string;
  image: string;
  results: string;
  media?: { type: 'photo' | 'video'; label: string; src: string }[];
}

export const projects: Project[] = [
  {
    id: "humanoid-receptionist",
    title: "AI-Powered Humanoid Receptionist Robot",
    shortTitle: "Humanoid Receptionist",
    skills: ["YOLOv8", "OpenCV", "Gemini API", "ElevenLabs", "Raspberry Pi", "Arduino"],
    description:
      "Designed and built an AI-driven humanoid receptionist with real-time face tracking using YOLOv8 and OpenCV. Integrated Google Cloud STT, Gemini API, and ElevenLabs for bilingual Arabic/English interaction. Achieved 95% face detection accuracy and stable 30-minute live demos.",
    image: "/src/assets/project-robot.jpg",
    results: "95% face detection accuracy · Stable 30-min live demos · Bilingual Arabic/English",
  },
  {
    id: "clinic-automation",
    title: "Clinic Appointment Automation",
    shortTitle: "Clinic Automation",
    skills: ["n8n", "Google Sheets API", "WhatsApp Business API", "REST APIs"],
    description:
      "End-to-end automation system syncing WhatsApp patient inquiries with Google Sheets and Gmail using n8n multi-agent orchestration. Reduced manual scheduling workload by 80% with near-zero manual intervention.",
    image: "/src/assets/project-clinic.jpg",
    results: "80% reduction in manual workload · Near-zero manual intervention",
  },
  {
    id: "jd-match",
    title: "JD-Match: AI Mock Interviewer",
    shortTitle: "JD-Match",
    skills: ["GenAI", "Prompt Engineering", "n8n", "Python"],
    description:
      "A GenAI-powered tool that analyzes a candidate's CV against a Job Description and conducts a tailored mock interview via a custom n8n workflow. Generates role-specific interview questions and provides feedback.",
    image: "/src/assets/project-jdmatch.jpg",
    results: "Automated CV-to-JD matching · Role-specific interview generation",
  },
];
