'use client';

export default function PlanTripButton() {
  return (
    <button
      className="trip-button"
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('openTripModal'))}
    >
      <PaperPlaneIcon />
      <span>Plan Your Trip</span>
    </button>
  );
}

function PaperPlaneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="plane-icon">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
