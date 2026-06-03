export default function AnnouncementBar() {
  return (
    <div className="bg-[#5f7397] py-3 text-sm text-white">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-2 px-4 md:flex-row">
        <p className="max-w-full break-words text-center font-semibold md:text-left">
          Term 2 Enrolment are now open! Book your obligation-free assessment today!
        </p>
        <div className="flex items-center gap-5">
          <a href="tel:0283110885" className="font-semibold">Call (02) 8311 0885</a>
          <a href="/my-account/" className="font-semibold">Login</a>
        </div>
      </div>
    </div>
  );
}
