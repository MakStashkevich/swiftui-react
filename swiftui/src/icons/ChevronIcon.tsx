interface ChevronIconProps {
    className?: string;
}

export default function ChevronIcon({ className }: ChevronIconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" fill="none" viewBox="0 0 7 12" preserveAspectRatio="xMidYMid meet" className={className}>
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5 5-5 5"></path>
        </svg>
    )
}