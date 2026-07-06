"use client";

import { useEffect, useState } from "react";
import { auth, logout } from "@/lib/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Header from '@/components/Header';
import Link from "next/link";
import ProjectForm from "./ProjectForm";
import ProjectList from "./Projectlist.jsx";

export default function AdminPanel() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) router.push("/admin/login");
      else setUser(u);
    });

    return () => unsub();
  }, []);

  if (!user) return <div className="p-5">Loading...</div>;

  const handleEdit = (project) => setSelectedProject(project);
  const clearSelection = () => setSelectedProject(null);

  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <div className="flex gap-3">
          <Link className="bg-green-500 rounded-xl px-6 py-2" href={'/'}>Home</Link>
          <button onClick={logout} className="bg-red-600 text-white px-3 py-1">Logout</button>
        </div>
      </div>

      <ProjectForm selectedProject={selectedProject} clearSelection={clearSelection} />
      <ProjectList onEdit={handleEdit} />   
    </div>
  );
}


// "use client";

// import { useState } from "react";

// import ConversationList from "@/components/admin/ConversationList";
// import ChatWindow from "@/components/admin/ChatWindow";

// export default function AdminPage() {
//   const [activeConversation, setActiveConversation] = useState(null);

//   return (
//     <div className="h-screen flex">

//       {/* Left Sidebar */}

//       <div className="w-80 border-r dark:border-zinc-800">

//         <ConversationList
//           activeConversation={activeConversation}
//           setActiveConversation={setActiveConversation}
//         />

//       </div>

//       {/* Right Side */}

//       <div className="flex-1">

//         <ChatWindow
//           conversation={activeConversation}
//         />

//       </div>

//     </div>
//   );
// }