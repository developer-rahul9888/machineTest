import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AdminLayout from '@/Layouts/AdminLayout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { router, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const Forms = () => {
    
    const { errors } = usePage().props;
    // Validation schema using Yup
    const validationSchema = Yup.object({
        projectName: Yup.string()
            .min(3, 'Project Name must be at least 3 characters')
            .max(50, 'Project Name must not exceed 50 characters')
            .required('Project Name is required'),
        description: Yup.string()
            .min(10, 'Description must be at least 10 characters')
            .required('Description is required'),
        startDate: Yup.date()
            .required('Start Date is required')
            .nullable(),
        endDate: Yup.date()
            .nullable()
            .min(Yup.ref('startDate'), 'End Date cannot be before Start Date'),
        status: Yup.string()
            .required('Status is required'),
    });

    // Formik setup
    const formik = useFormik({
        initialValues: {
            projectName: '',
            description: '',
            startDate: '',
            endDate: '',
            status: 'active',
        },
        validationSchema, // Yup validation
        onSubmit: async  (values, { setSubmitting, setErrors }) => {
            try {
                await router.post('/admin/projects', values);
              } catch (error) {
                console.error(error);
              }
        },
    });


    useEffect(() => {
        // If there are server-side errors, set them in Formik
        if (errors) {
            formik.setErrors(errors);
        }
      }, [errors]);

    return (
        <AdminLayout>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md my-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Create New Project</h2>
            <form onSubmit={formik.handleSubmit}>
                {/* Project Name */}
                <div className="mb-4">
                    <label className="block text-gray-700">Project Name</label>
                    <input
                        type="text"
                        name="projectName"
                        value={formik.values.projectName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formik.touched.projectName && formik.errors.projectName ? 'border-red-500' : ''}`}
                        placeholder="Enter project name"
                        required
                    />
                    {formik.touched.projectName && formik.errors.projectName ? (
                        <p className="text-red-500 text-sm mt-2">{formik.errors.projectName}</p>
                    ) : null}
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
                        placeholder="Enter project description"
                        rows="4"
                        required
                    ></textarea>
                    {formik.touched.description && formik.errors.description ? (
                        <p className="text-red-500 text-sm mt-2">{formik.errors.description}</p>
                    ) : null}
                </div>

                {/* Start Date */}
                <div className="mb-4">
                    <label className="block text-gray-700">Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formik.values.startDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formik.touched.startDate && formik.errors.startDate ? 'border-red-500' : ''}`}
                        required
                    />
                    {formik.touched.startDate && formik.errors.startDate ? (
                        <p className="text-red-500 text-sm mt-2">{formik.errors.startDate}</p>
                    ) : null}
                </div>

                {/* End Date */}
                <div className="mb-4">
                    <label className="block text-gray-700">End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={formik.values.endDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formik.touched.endDate && formik.errors.endDate ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.endDate && formik.errors.endDate ? (
                        <p className="text-red-500 text-sm mt-2">{formik.errors.endDate}</p>
                    ) : null}
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label className="block text-gray-700">Status</label>
                    <select
                        name="status"
                        value={formik.values.status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${formik.touched.status && formik.errors.status ? 'border-red-500' : ''}`}
                        required
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    {formik.touched.status && formik.errors.status ? (
                        <p className="text-red-500 text-sm mt-2">{formik.errors.status}</p>
                    ) : null}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Create Project
                    </button>
                </div>
            </form>
        </div>
        </AdminLayout>
    );
};

export default Forms;
