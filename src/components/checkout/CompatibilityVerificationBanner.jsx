function CompatibilityVerificationBanner() {
  return (
    <div className="mb-space-lg p-space-md bg-surface-container-low border border-surface-variant rounded-DEFAULT flex items-start sm:items-center gap-space-sm">
      <span
        className="material-symbols-outlined text-tertiary text-[22px] shrink-0"
        style={{ fontVariationSettings: "FILL 1" }}
      >
        verified
      </span>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-space-xs">
        <p className="font-body-md text-body-md text-on-surface">
          <strong className="font-bold text-on-surface">
            Verificación técnica de compatibilidad:
          </strong>
          Tu procesador AMD Socket AM5 y memoria RAM DDR5 son 100% compatibles
          entre sí.
        </p>
        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm uppercase px-2 py-0.5 bg-surface-container-lowest text-tertiary border border-tertiary-fixed-dim shrink-0">
          Ensamble Testeado
        </span>
      </div>
    </div>
  );
}

export default CompatibilityVerificationBanner;
