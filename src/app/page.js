'use client'
import TableUser from "@/components/dataTable/tableUser";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUsers(data.result);
    };

    fetchData();
  }, []);


  return (
    
    <div>
     
        <TableUser   />
    
    </div>
  );
}

