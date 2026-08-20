import React from 'react';

export interface ServiceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
}

const DEFAULT_COLOR = '#c49a6c';

/**
 * 1. Nybyggnation: Modern architectural villa with structural framework & rising crane guide
 */
export function NybyggnationIcon({
  size = 48,
  color = DEFAULT_COLOR,
  strokeWidth = 1.35,
  className = '',
  style,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      {/* Foundation ground line */}
      <path
        d="M 6 41 L 42 41"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Main modern villa outline */}
      <path
        d="M 10 41 L 10 20 L 25 10 L 40 20 L 40 41"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Modern cantilever roof overhang */}
      <path
        d="M 7 21 L 25 9 L 43 21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Structural timber frame grid & window */}
      <path
        d="M 25 9 L 25 41"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 10 28 L 40 28"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.9}
        strokeLinecap="round"
      />

      {/* Panoramic window frame */}
      <rect
        x="15"
        y="32"
        width="6"
        height="9"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="29"
        y="32"
        width="7"
        height="6"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Architectural construction axis marker */}
      <path
        d="M 25 5 L 25 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle
        cx="25"
        cy="4"
        r="1"
        fill={color}
      />
    </svg>
  );
}

/**
 * 2. Renovering / Ombyggnation: Building structure undergoing precision transformation with carpenter's square
 */
export function RenoveringIcon({
  size = 48,
  color = DEFAULT_COLOR,
  strokeWidth = 1.35,
  className = '',
  style,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      {/* Base building outline being renovated */}
      <path
        d="M 9 39 L 9 22 L 23 12 L 28 15.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 9 39 L 37 39 L 37 28"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Masonry / renovation brick pattern */}
      <path
        d="M 9 30 L 25 30 M 17 30 L 17 39 M 13 22 L 21 22 M 17 22 L 17 30"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.8}
        strokeLinecap="round"
      />

      {/* Precision Carpenter's L-Square / Angle ruler tool */}
      <path
        d="M 26 8 L 41 8 L 41 23 L 37 23 L 37 12 L 26 12 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Ruler gradations */}
      <path
        d="M 30 8 L 30 10 M 34 8 L 34 10 M 38 8 L 38 10 M 41 15 L 39 15 M 41 19 L 39 19"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.8}
        strokeLinecap="round"
      />

      {/* Dynamic circular renewal / craft swoosh arc */}
      <path
        d="M 33 27 C 36.5 30 36 34 32.5 36.5"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.85}
        strokeLinecap="round"
      />
      <path
        d="M 31 36.5 L 33.5 37 L 33 34.5"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.85}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 3. Tillbyggnad: Main structure connecting to a modern extended new wing with expansion dimensions
 */
export function TillbyggnadIcon({
  size = 48,
  color = DEFAULT_COLOR,
  strokeWidth = 1.35,
  className = '',
  style,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      {/* Ground baseline */}
      <path
        d="M 6 40 L 42 40"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Main Existing House (Left) */}
      <path
        d="M 8 40 L 8 22 L 20 12 L 24 15.5 L 24 40"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 6 23 L 20 11 L 25 15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Seamless Extended Wing (Right) */}
      <path
        d="M 24 20 L 39 20 L 39 40"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Modern glass facade on extension */}
      <rect
        x="27"
        y="25"
        width="9"
        height="15"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 31.5 25 L 31.5 40"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.8}
        strokeLinecap="round"
      />

      {/* Expansion dimension marker arrow */}
      <path
        d="M 27 15 L 38 15"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.85}
        strokeLinecap="round"
      />
      <path
        d="M 35 12.5 L 38.5 15 L 35 17.5"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.85}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 4. Totalentreprenad: Turnkey blueprint project board with certified quality seal & master key
 */
export function TotalentreprenadIcon({
  size = 48,
  color = DEFAULT_COLOR,
  strokeWidth = 1.35,
  className = '',
  style,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      {/* Blueprint clipboard board */}
      <rect
        x="10"
        y="11"
        width="28"
        height="32"
        rx="3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Top clipboard clip mechanism */}
      <path
        d="M 19 11 L 19 8 C 19 6.8 20 6 21.2 6 L 26.8 6 C 28 6 29 6.8 29 8 L 29 11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Architectural spec lines */}
      <path
        d="M 16 19 L 26 19 M 16 25 L 32 25 M 16 30 L 24 30"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.85}
        strokeLinecap="round"
      />

      {/* Certified Project Quality Seal (Bottom-Right) */}
      <circle
        cx="31"
        cy="33"
        r="5.5"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="#ffffff"
      />
      {/* Checkmark inside seal */}
      <path
        d="M 28.5 33 L 30.5 35 L 33.5 31"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 5. Lokalanpassningar: Architectural interior room divider & commercial space zoning layout
 */
export function LokalanpassningarIcon({
  size = 48,
  color = DEFAULT_COLOR,
  strokeWidth = 1.35,
  className = '',
  style,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      {/* 3D Commercial Space Perspective Box */}
      <path
        d="M 8 12 L 40 12 L 40 36 L 8 36 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Perspective interior back wall */}
      <path
        d="M 15 17 L 33 17 L 33 31 L 15 31 Z"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.85}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Corner depth lines */}
      <path
        d="M 8 12 L 15 17 M 40 12 L 33 17 M 40 36 L 33 31 M 8 36 L 15 31"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.85}
        strokeLinecap="round"
      />

      {/* Modular glass door / partition entry */}
      <path
        d="M 22 17 L 22 31 M 26 17 L 26 31"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.9}
        strokeLinecap="round"
      />
      <circle
        cx="24.5"
        cy="24"
        r="0.75"
        fill={color}
      />
    </svg>
  );
}

/**
 * 6. Kök & Badrum: Modern architectural mixer faucet & clean tile grid backdrop
 */
export function KokBadrumIcon({
  size = 48,
  color = DEFAULT_COLOR,
  strokeWidth = 1.35,
  className = '',
  style,
  ...props
}: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    >
      {/* Elegant subway tile backdrop */}
      <path
        d="M 8 10 L 40 10 M 8 18 L 40 18 M 8 26 L 40 26 M 8 34 L 40 34"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.55}
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 16 10 L 16 18 M 32 10 L 32 18 M 24 18 L 24 26 M 16 26 L 16 34 M 32 26 L 32 34"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.55}
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Countertop surface */}
      <path
        d="M 6 38 L 42 38"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Sleek architectural gooseneck faucet */}
      <path
        d="M 17 38 L 17 21 C 17 14 28 14 28 21 L 28 24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M 26.5 24 L 29.5 24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Faucet mixer handle */}
      <path
        d="M 14 27 L 17 27 M 14 25 L 14 29"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Precision water droplet */}
      <path
        d="M 28 29 C 26.5 31.5 29.5 31.5 28 29 Z"
        stroke={color}
        strokeWidth={Number(strokeWidth) * 0.9}
        strokeLinejoin="round"
        fill={color}
      />
    </svg>
  );
}

/**
 * Universal ServiceIcon component supporting slug/key lookup
 */
export function ServiceIcon({
  name,
  size = 48,
  color = DEFAULT_COLOR,
  strokeWidth = 1.35,
  className = '',
  ...props
}: ServiceIconProps & { name: string }) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (normalized.includes('nybygg')) {
    return <NybyggnationIcon size={size} color={color} strokeWidth={strokeWidth} className={className} {...props} />;
  }
  if (normalized.includes('ombygg') || normalized.includes('renover')) {
    return <RenoveringIcon size={size} color={color} strokeWidth={strokeWidth} className={className} {...props} />;
  }
  if (normalized.includes('tillbygg')) {
    return <TillbyggnadIcon size={size} color={color} strokeWidth={strokeWidth} className={className} {...props} />;
  }
  if (normalized.includes('total') || normalized.includes('entreprenad')) {
    return <TotalentreprenadIcon size={size} color={color} strokeWidth={strokeWidth} className={className} {...props} />;
  }
  if (normalized.includes('lokal') || normalized.includes('anpass')) {
    return <LokalanpassningarIcon size={size} color={color} strokeWidth={strokeWidth} className={className} {...props} />;
  }
  if (normalized.includes('kok') || normalized.includes('bad') || normalized.includes('kök')) {
    return <KokBadrumIcon size={size} color={color} strokeWidth={strokeWidth} className={className} {...props} />;
  }

  // Fallback
  return <NybyggnationIcon size={size} color={color} strokeWidth={strokeWidth} className={className} {...props} />;
}

export default ServiceIcon;
