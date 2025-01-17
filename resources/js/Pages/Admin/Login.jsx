import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePage, router } from "@inertiajs/react";
import * as Yup from "yup";

const Login = () => {
    const { errors: serverErrors } = usePage().props; // For server-side errors

    // Define validation schema with Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    return (
        <div className="bg-gray-50 font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-md w-full">
                    <div className="p-8 rounded-2xl bg-white shadow">
                        <h2 className="text-gray-800 text-center text-2xl font-bold">
                            Sign in
                        </h2>

                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                router.post("/admin/login", values, {
                                    onError: (errorMessages) => {
                                        // Display server validation errors with Toast
                                        if (errorMessages.email)
                                            toast.error(errorMessages.email);
                                        if (errorMessages.password)
                                            toast.error(errorMessages.password);
                                    },
                                    onFinish: () => setSubmitting(false),
                                });
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="space-y-4">
                                    {/* Email Field */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email Address
                                        </label>
                                        <Field
                                            name="email"
                                            type="email"
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                        {serverErrors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {serverErrors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>
                                        <Field
                                            name="password"
                                            type="password"
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500 text-sm mt-1"
                                        />
                                        {serverErrors.password && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {serverErrors.password}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:ring focus:ring-blue-300"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting
                                                ? "Logging in..."
                                                : "Login"}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
