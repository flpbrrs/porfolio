import { IconTerminal } from "@tabler/icons-react";

export default function BrandLogo() {
    return (
        <div className="
            flex items-center justify-center
            leading-none font-extrabold text-xl
            bg-clip-text text-transparent
            bg-gradient-to-b from-zinc-100 to-zinc-400
        ">
            <IconTerminal size={24} stroke={2} className="text-emerald-400 mr-1"/>
            <span className="uppercase">flp</span>
            <span className="uppercase">.</span>
            <span className="uppercase">brrs</span>
        </div>
    )
}