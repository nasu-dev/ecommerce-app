import { Dice1 } from "lucide-react"

export default function AuthLayout ({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
    )
}