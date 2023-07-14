import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import { useState, useRef } from "react";



const Contact = () => {
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_ID
            );

            // Restablecer el formulario después del envío exitoso
            if (formRef.current) {
                formRef.current.reset();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (

        <main>
            <Header />
            <section className=" text-slate-600 md:gap-20 md:px-10 md:py-12 grid sm:grid-cols-2 max-w-[1000px] mx-auto px-8">
                <section>
                    <h2 className="text-lg font-bold md:text-3xl ">Let’s talk about business</h2>
                    <p className="text-gray-400 md:my-12 text-base  md:text-xl ">
                        Now that you know more about me, let me know if you are interested to
                        work with me.
                    </p>
                    <section className='flex justify-center py-8 md:space-y-0 md:justify-center text-slate-600 text-5xl gap-5'>
                        <button className='flex justify-center gap-7'>

                            <a href="https://github.com/VivianLaFarina" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                        </button>
                        <button className='flex justify-center '>

                            <a href="https://linkedin.com/in/vivianlafarina" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                        </button>
                    </section>

                </section>

                <form onSubmit={handleSubmit} className="grid gap-2 ">
                    <div className=" rounded-3xl grid gap-1 ">
                        <label className="text-lg rounded-2xl  " htmlFor="name">
                            Name
                        </label>
                        <input
                            className=" bg-slate-300 p-2 outline-none rounded-3xl"
                            id="name"
                            type="text"
                            name="from_name"
                            placeholder="Type your name" />
                    </div>
                    <div className="grid gap-1">
                        <label className="text-lg" htmlFor="email">
                            Email
                        </label>
                        <input
                            className=" bg-slate-300 p-2 outline-none rounded-3xl"
                            id="email"
                            type="text"
                            name="email"
                            placeholder="Please type your email-address"
                        />
                    </div>
                    <div className="grid gap-1">
                        <label className="text-lg" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className=" bg-slate-300 p-2 outline-none rounded-3xl"
                            id="message"
                            rows="5"
                            name="message"
                            placeholder="Please, provide the general idea"
                        ></textarea>
                    </div>

                    <button className=" bg-slate-400 hover:bg-slate-800 transition-colors py-3 font-bold rounded-3xl text-slate-100">
                        LET’S GET STARTED
                    </button>
                </form>

            </section>

        </main>
    );
};
export default Contact;
