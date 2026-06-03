export default function WhatsAppWidget() {
  return (
    <a href="https://wa.me/61415937649" className="fixed bottom-7 right-7 z-50 flex items-center gap-3" aria-label="Chat on WhatsApp">
      <span className="hidden w-[166px] rounded bg-white px-4 py-3 text-sm font-black leading-5 text-[#1d2939] shadow-[0_4px_18px_rgba(0,0,0,0.08)] sm:block">
        Contact us for program options and current deals.
      </span>
      <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2db742] text-white shadow-[0_5px_14px_rgba(0,0,0,0.28)]">
        <svg viewBox="0 0 32 32" className="h-9 w-9 fill-current" aria-hidden="true">
          <path d="M16.01 3.2A12.73 12.73 0 0 0 5.2 22.65L3.9 28.8l6.28-1.24A12.73 12.73 0 1 0 16.01 3.2Zm0 22.98c-1.95 0-3.86-.55-5.5-1.6l-.4-.25-3.74.74.78-3.63-.27-.42a10.31 10.31 0 1 1 9.13 5.16Zm5.7-7.72c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.35-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z" />
        </svg>
      </span>
    </a>
  );
}
