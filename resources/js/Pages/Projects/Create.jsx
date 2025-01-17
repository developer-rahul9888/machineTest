import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "@/Layouts/AdminLayout";
import { router, usePage } from "@inertiajs/react";
import * as Yup from "yup";

const CreateProject = () => {
    const { errors } = usePage().props;

    const [galleryImages, setGalleryImages] = useState([]);

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Project Name must be at least 3 characters")
            .max(50, "Project Name must not exceed 50 characters")
            .required("Project Name is required"),
        description: Yup.string()
            .min(10, "Description must be at least 10 characters")
            .required("Description is required"),
        category: Yup.string().required("Category is required"),
    });

    const options = ["Option 1", "Option 2", "Option 3"];

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            category: "",
            meta_title: "",
            meta_description: "",
            cover_image: null,
            project_image: null,
            gallery_images: [],
            selectedOptions: [],
        },
        validationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("description", values.description);
            formData.append("category", values.category);
            formData.append("cover_image", values.cover_image);
            formData.append("project_image", values.project_image);
            galleryImages.forEach((image, index) => {
                formData.append(`gallery_images[${index}]`, image);
            });
            router.post("/admin/projects", formData);
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
            <div className="container px-6 py-8 mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-700">
                        Projects
                    </h1>
                </div>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Project Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-sm text-red-500 mt-1">
                                    {formik.errors.name}
                                </div>
                            ) : null}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.description &&
                            formik.errors.description ? (
                                <div className="text-sm text-red-500 mt-1">
                                    {formik.errors.description}
                                </div>
                            ) : null}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                type="text"
                                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="interior">Interior</option>
                                <option value="architecture">
                                    Architecture
                                </option>
                            </select>
                            {formik.touched.category && formik.errors.category ? (
                                <div className="text-sm text-red-500 mt-1">
                                    {formik.errors.category}
                                </div>
                            ) : null}
                        </div>
                        


                  
                        {/* Cover Image */}
                        <div className="mb-4">
                            <label
                                htmlFor="cover_image"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Cover Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="cover_image"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) =>
                                    formik.setFieldValue(
                                        "cover_image",
                                        e.currentTarget.files[0]
                                    )
                                }
                            />
                        </div>

                        {/* Project Image */}
                        <div className="mb-4">
                            <label
                                htmlFor="project_image"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Project Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="project_image"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) =>
                                    formik.setFieldValue(
                                        "project_image",
                                        e.currentTarget.files[0]
                                    )
                                }
                            />
                        </div>

                        {/* Gallery Images */}
                        <div>
                            <label
                                htmlFor="gallery_images"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Gallery Images
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="gallery_images"
                                multiple
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={(e) =>
                                    setGalleryImages([
                                        ...galleryImages,
                                        ...e.target.files,
                                    ])
                                }
                            />
                            <small className="text-gray-500">
                                You can upload multiple images.
                            </small>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                {galleryImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={
                                            image instanceof File
                                                ? URL.createObjectURL(image)
                                                : `/storage/${image}`
                                        }
                                        alt={`Gallery ${index}`}
                                        className="w-full h-20 object-cover rounded-md shadow-md"
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h1 className="text-2xl font-semibold text-gray-700 my-4">
                                SEO
                            </h1>
                            {/* Add SEO fields */}
                            <div className="mb-4">
                                <label
                                    htmlFor="meta_title"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Meta Title
                                </label>
                                <input
                                    id="meta_title"
                                    name="meta_title"
                                    type="text"
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                                    value={formik.values.meta_title}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="meta_description"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Meta Description
                                </label>
                                <textarea
                                    id="meta_description"
                                    name="meta_description"
                                    rows="4"
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                                    value={formik.values.meta_description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                        </div>

                        <div className="flex gap-5 items-center mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            >
                                Create Project
                            </button>
                            <a
                                href="/admin/projects"
                                className="text-sm text-gray-500 hover:text-gray-700"
                            >
                                Cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default CreateProject;
