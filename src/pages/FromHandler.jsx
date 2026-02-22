// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// /* ================= SCHEMA ================= */

// const schema = z.object({
//     firstName: z.string().min(1, "First name required"),
//     lastName: z.string().optional(),
//     email: z.string().email("Invalid email"),
//     age: z.coerce.number().min(1, "Age must be > 0"),
//     phone: z.string().min(5, "Phone required"),
//     description: z.string().optional()
// });

// /* ================= COMPONENT ================= */

// const FormHandler = () => {

//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors, isSubmitting }
//     } = useForm({
//         resolver: zodResolver(schema),
//         defaultValues: {
//             firstName: "",
//             lastName: "",
//             email: "",
//             age: "",
//             phone: "",
//             description: ""
//         }
//     });

//     /* ================= SUBMIT ================= */

//     const onSubmit = async (data) => {

//         // simulate API delay
//         await new Promise(res => setTimeout(res, 800));

//         // get old entries
//         const existing =
//             JSON.parse(localStorage.getItem("formDATA")) || [];

//         // push new entry
//         existing.push(data);

//         // save again
//         localStorage.setItem("formDATA", JSON.stringify(existing));

//         // reset form
//         reset();
//     };

//     /* ================= UI ================= */

//     return (
//         <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">

//             <h2 className="text-xl font-bold mb-4 text-center">
//                 User Form
//             </h2>

//             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

//                 <Input label="First Name" error={errors.firstName} {...register("firstName")} />

//                 <Input label="Last Name" error={errors.lastName} {...register("lastName")} />

//                 <Input label="Email" error={errors.email} {...register("email")} />

//                 <Input label="Age" type="number" error={errors.age} {...register("age")} />

//                 <Input label="Phone" error={errors.phone} {...register("phone")} />

//                 <Textarea label="Description" error={errors.description} {...register("description")} />

//                 <button
//                     disabled={isSubmitting}
//                     className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
//                 >
//                     {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>

//             </form>
//         </div>
//     );
// };

// export default FormHandler;


import { useForm } from "react-hook-form"


const FormHandler = () => {
    const { handleSubmit, reset, register } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            number: "",
            description: ""
        }
    });

    const submitHandler = () => {
        reset();
    }
    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">

            <h2 className="text-xl font-bold mb-6 text-center">
                User Form
            </h2>

            <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">

                <input
                    type="text"
                    placeholder="First Name"
                    className="border p-2 rounded w-full"
                    {...register("firstName")}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    className="border p-2 rounded w-full"
                    {...register("lastName")}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded w-full"
                    {...register("email")}
                />

                <input
                    type="number"
                    placeholder="Age"
                    className="border p-2 rounded w-full"
                    {...register("age")}
                />

                <input
                    type="tel"
                    placeholder="Phone"
                    className="border p-2 rounded w-full"
                    {...register("number")}
                />

                <textarea
                    placeholder="Description"
                    rows="4"
                    className="border p-2 rounded w-full"
                    {...register("description")}
                />

                {/* <input
                    type="file"
                    accept="image/*"
                    className="border p-2 rounded w-full"
                /> */}

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded"
                >
                    Submit
                </button>

            </form>
        </div>
    );
}

export default FormHandler
