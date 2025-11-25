export default function Contact() {
  return (
    <section id="contact" className="mt-20 mb-20">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form className="max-w-xl grid gap-4">
        <input
          className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
          placeholder="Your Name"
        />
        <input
          className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
          placeholder="Email"
        />
        <textarea
          className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
          rows="4"
          placeholder="Message"
        ></textarea>

        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold shadow-lg">
          Send Message
        </button>
      </form>
    </section>
  );
}
