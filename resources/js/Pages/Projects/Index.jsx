import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const ProjectIndex = ({ projects }) => {
    const { data, current_page, last_page, per_page, total } = projects;

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${id}`);
        }
    };

    const handlePageChange = (page) => {
        router.get(`/admin/projects?page=${page}`);
    };

    return (
        <AdminLayout>
        <div className="container px-6 py-8 mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-700">Projects</h1>
                <Link
                    href="/admin/projects/create"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Create Project
                </Link>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="border-b bg-gray-100">
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Project Name</th>
                            <th className="py-3 px-6 text-left text-sm font-medium text-gray-500">Description</th>
                            <th className="py-3 px-6 text-center text-sm font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((project) => (
                            <tr key={project.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-6 text-sm font-medium text-gray-700">{project.name}</td>
                                <td className="py-3 px-6 text-sm text-gray-500">{project.description}</td>
                                <td className="py-3 px-6 text-center">
                                    <Link
                                        href={`/admin/projects/${project.id}/edit`}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(project.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Section */}
            <div className="flex justify-between items-center mt-6">
                <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                    disabled={current_page === 1}
                    onClick={() => handlePageChange(current_page - 1)}
                >
                    Previous
                </button>

                <div className="text-sm text-gray-600">
                    Page {current_page} of {last_page} - Total: {total}
                </div>

                <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                    disabled={current_page === last_page}
                    onClick={() => handlePageChange(current_page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
        </AdminLayout>
    );
};

export default ProjectIndex;