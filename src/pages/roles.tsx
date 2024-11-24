import { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { ROLES, updateUserRole, createUserRole } from "@/lib/roles";

export default function RolesManagement() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newUserId, setNewUserId] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newUserRole, setNewUserRole] = useState(ROLES.USER);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersRef = collection(db, "users");
                const q = query(usersRef);
                const querySnapshot = await getDocs(q);

                const usersData = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    usersData.push({
                        id: doc.id,
                        email: data.email || "N/A", // Fallback if email is not present
                        role: data.role,
                    });
                });

                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleRoleChange = async (userId, newRole) => {
        try {
            await updateUserRole(userId, newRole, "");
            setUsers(
                users.map((user) =>
                    user.id === userId ? { ...user, role: newRole } : user
                )
            );
        } catch (error) {
            console.error("Error updating role:", error);
        }
    };

    const handleAddUser = async () => {
        if (!newUserId.trim() || !newUserEmail.trim()) {
            alert("Please enter a valid user ID and email.");
            return;
        }

        try {
            const success = await createUserRole(
                newUserId,
                newUserEmail,
                newUserRole
            );
            if (success) {
                setUsers([
                    ...users,
                    {
                        id: newUserId,
                        email: newUserEmail,
                        role: newUserRole,
                        createdAt: new Date(),
                    },
                ]);
                setNewUserId(""); // Clear input field
                setNewUserEmail(""); // Clear email input field
                setNewUserRole(ROLES.USER); // Reset role to default
                alert("User added successfully!");
            } else {
                alert("Failed to add user. Please try again.");
            }
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>

            {/* Add User Form */}
            <div className="mb-6 p-4 bg-neutral-900 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Add New User</h3>
                <div className="flex gap-4 items-center">
                    <input
                        type="text"
                        value={newUserId}
                        onChange={(e) => setNewUserId(e.target.value)}
                        placeholder="Enter User ID"
                        className="bg-neutral-800 rounded px-3 py-2 w-64"
                    />
                    <input
                        type="email"
                        value={newUserEmail}
                        onChange={(e) => setNewUserEmail(e.target.value)}
                        placeholder="Enter User Email"
                        className="bg-neutral-800 rounded px-3 py-2 w-64"
                    />
                    <select
                        value={newUserRole}
                        onChange={(e) => setNewUserRole(e.target.value)}
                        className="bg-neutral-800 rounded px-2 py-2">
                        {Object.values(ROLES).map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleAddUser}
                        className="bg-blue-600 text-white px-4 py-2 rounded">
                        Add User
                    </button>
                </div>
            </div>

            {/* User List Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-neutral-900 rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left">User ID</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">Role</th>
                            <th className="px-6 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="border-t border-neutral-800">
                                <td className="px-6 py-4">{user.id}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.role}</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={user.role}
                                        onChange={(e) =>
                                            handleRoleChange(
                                                user.id,
                                                e.target.value
                                            )
                                        }
                                        className="bg-neutral-800 rounded px-2 py-1">
                                        {Object.values(ROLES).map((role) => (
                                            <option key={role} value={role}>
                                                {role}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
